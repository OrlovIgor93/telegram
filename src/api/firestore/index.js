import firebase from "../firebase";
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
import {useEffect, useState} from "react";

export const getUserByPhoneNumber = (findPhoneNumber, phoneNumber) => {
    const userTarget = firebase.db.collection("users").doc(findPhoneNumber);
    const userCurrent = firebase.db.collection("users").doc(phoneNumber);

    return userTarget.get().then(async (sfDoc) => {
            if (!sfDoc.exists) {
                throw "User not found";
            }
            const {...dataUser} = await userCurrent.get().then((data) => {
                return data.data()
            });

            const {phoneNumber, userName, dialogs} = sfDoc.data();

            const batch = firebase.db.batch();
            const id = (new Date()).getTime().toString();
            const newDialog = firebase.db.collection("dialogs").doc(id);


            const message = {
                author: dataUser.userName,
                textMessage: `${dataUser.userName} create dialog1`,
            };
            const data = {
                members: [
                    phoneNumber,
                    dataUser.phoneNumber
                ],
                messages: {
                    [id]: message
                }


            };

            batch.set(newDialog, data);


            const refUser = firebase.db
                .collection("users")
                .doc(dataUser.phoneNumber);


            batch.update(refUser, {dialogs: [...dataUser.dialogs, {dialogId: id, dialogInfo: phoneNumber}]});

            const refFindUser = firebase.db
                .collection("users")
                .doc(findPhoneNumber);


            batch.update(refFindUser, {dialogs: [...dialogs, {dialogId: id, dialogInfo: dataUser.phoneNumber}]});


            return batch.commit();


        }
    );
};

export const useLatestDocument =(phoneNumber)=> {
    const query = phoneNumber && firebase.db.collection('users').doc(phoneNumber);
    const { value, loading, error } = useCollection(query);
    const [dialogs, setDialogs]= useState([]);

    useEffect(() => {
            if (loading) {
                console.log("loading")
            } else if (error) {
                console.log("error")
            } else if (value) {
                console.log("value",value)
                const {dialogs} = value.data();
                setDialogs(dialogs);
            }
        },[value, loading, error]
    )

    return {
        dialogs,
        loading,
        error,
    };
}

export const getMyDialogs =   (dialogs)=> dialogs.map(async (doc) => {
    {console.log("dpc", doc)}
        const {userName, phoneNumber} = await firebase.db
            .collection('users')
            .doc(doc.dialogInfo)
            .get()
            .then( (data) =>  data.data());

        const {textMessage, id} = await firebase.db
            .collection('dialogs')
            .doc(doc.dialogId)
            .get()
            .then( (data) =>{
                const { messages } =  data.data();

                return {textMessage: messages.textMessage, id: data.id}
            });

        const data = {
            name: userName,
            phone: phoneNumber,
            lastMessage: textMessage,
            imgUrl: null,
            timeLastMessage: id,
            numberOfUnreadMessages: null
        };

        return data
    }
);

// import uuid from "uuid";
// import dayjs from "dayjs";
// import { firestore } from "../../components/firebase";
//
// export const registerUserAccount = user => {
//     firestore
//         .collection("users")
//         .doc(user.username)
//         .set(user);
// };
//
// export const retunUserAccount = async uid => {
//     const userRef = firestore.collection("users").doc(uid);
//     return userRef.get().then(data => data.data());
// };
//
// export const searchUsers = async (text, uid) => {
//     if (text === "") return [];
//     const userRef = firestore.collection("users");
//     const query = await userRef
//         .orderBy("username")
//         .startAt(text)
//         .endAt(`${text}${"\uf8ff"}`)
//         .get();
//
//     return query.docs
//         .map(user => user.data())
//         .filter(target => target.uid !== uid);
// };
//
// export const loadUserConvos = async uid => {
//     const conversationsRef = firestore.collection("conversations");
//
//     const userConvos = await conversationsRef
//         .where(`members.${uid}`, "==", true)
//         .get();
//
//     return userConvos.docs
//         .map(e => e.data())
//         .sort((a, b) => b.timeStamp - a.timeStamp);
// };
//
// export const loadConversationLog = async convoId => {
//     const convoRoom = firestore.collection("conversations").doc(convoId);
//     const messageLogQuery = await convoRoom
//         .collection("messageLog")
//         .orderBy("messageDateFull")
//         .get();
//
//     return messageLogQuery.docs.map(e => e.data());
// };
//
