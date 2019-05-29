import firebase from "../firebase";
import {useCollection, useCollectionData} from "react-firebase-hooks/firestore";
import {useEffect, useState} from "react";
import {getDialogs} from "../../actions/actionCreatorDialogs";

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
            const newDialogCore = firebase.db.collection("dialogs").doc(id)
            const newDialog = firebase.db.collection("dialogs").doc(id).collection("messages").doc();


            const message = {
                authorId: dataUser.phoneNumber,
                messages: [
                    {
                        timeMessage: id,
                        textMessage: `${(new Date()).toLocaleDateString()} dialog was created`
                    }
                ]
            };

            const data = {
                members: [
                    phoneNumber,
                    dataUser.phoneNumber
                ],
                idLastMessage: newDialog.id,
            };

            batch.set(newDialogCore, data);
            batch.set(newDialog, message);

            const refUser = firebase.db
                .collection("users")
                .doc(dataUser.phoneNumber);

            const refFindUser = firebase.db
                .collection("users")
                .doc(findPhoneNumber);


            batch.update(refUser, {
                dialogs: [
                    ...dataUser.dialogs,
                    {dialogId: newDialogCore.id, targetUserId: findPhoneNumber}
                ]
            });


            // batch.update(refFindUser, {dialogs: [...dialogs, {dialogId: id, dialogInfo: dataUser.phoneNumber}]});


            return batch.commit();


        }
    );
};

export const useLatestDocument = (phoneNumber) => {
    const query = phoneNumber && firebase.db.collection('users').doc(phoneNumber);
    const {value, loading, error} = useCollection(query);
    const [dialogs, setDialogs] = useState([]);

    useEffect(() => {
            if (loading) {
                console.log("loading")
            } else if (error) {
                console.log("error")
            } else if (value) {
                console.log("--value", value)
                const {dialogs} = value.data();
                console.log("dialogs", dialogs)
                setDialogs(dialogs);
            }
        }, [value, loading, error]
    )

    return {
        dialogs,
        loading,
        error,
    };
}

export const getMyDialogs = (dialogs) => dialogs.map(async ({dialogId, targetUserId}) => {

    const {idLastMessage} = await getData(`dialogs/${dialogId}`);
    const {userName, photoURL} = await getData(`users/${targetUserId}`);

    return {idLastMessage, userName, photoURL}
    // return Promise.all([
    //     firebase.db
    //         .collection('users')
    //         .doc(targetUserId)
    //         .get()
    //         .then((data) => {const d=data.data()
    //             return {...d}
    //             }),
    //
    //     firebase.db
    //         .collection('dialogs')
    //         .doc(dialogId)
    //         .get()
    //         .then((data) => {let {idLastMessage}=data.data()
    //             console.log(data.data())
    //             return {idLastMessage}
    //         }),
    //
    // ])
});

export const getInfoDialog = async ({dialogId, targetUserId}) => {
    const {idLastMessage} = await getData(`dialogs/${dialogId}`);
    const {userName, photoURL} = await getData(`users/${targetUserId}`);
    const {authorLastMessage, textMessage, timeMessage} = await getLastData(`dialogs/${dialogId}/messages/${idLastMessage}`);

    return {
        idLastMessage,
        userName,
        photoURL,
        authorLastMessage,
        lastMessage: textMessage,
        timeLastMessage: timeMessage,
        targetUserId
    }
}

export const getData = async (idDoc) => {
    return await firebase.db.doc(idDoc).get().then(d => d.data())
}

const getLastData = async (idDoc) => {
    const {authorId, messages} = await firebase.db.doc(idDoc).get().then(d => d.data())
    const {userName} = await getData(`users/${authorId}`)
    return {authorLastMessage: userName, ...messages[messages.length - 1]}
}


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
// export const createNewConvoRoom = async (newRoomId, senderUser, targetUser) => {
//     const { uid } = senderUser;
//     const { userId } = targetUser;
//     firestore
//         .collection("conversations")
//         .doc(newRoomId)
//         .set({
//             targetUserInfo: {
//                 [uid]: {
//                     username: targetUser.username,
//                     id: userId
//                 },
//                 [userId]: {
//                     username: senderUser.username,
//                     id: uid
//                 }
//             },
//             members: {
//                 [uid]: true,
//                 [userId]: true
//             },
//             roomId: newRoomId
//         });
//
//     const senderRef = firestore.collection("users").doc(uid);
//     const targetRef = firestore.collection("users").doc(userId);
//
//     await Promise.all([
//         senderRef.set(
//             {
//                 connections: {
//                     [userId]: {
//                         conversationId: newRoomId
//                     }
//                 }
//             },
//             { merge: true }
//         ),
//         targetRef.set(
//             {
//                 connections: {
//                     [uid]: {
//                         conversationId: newRoomId
//                     }
//                 }
//             },
//             { merge: true }
//         )
//     ]);
// };
//
// export const pushMessageToFirebase = (message, roomId) => {
//     const conversationRoom = firestore.collection("conversations").doc(roomId);
//     conversationRoom.set(
//         {
//             displayMessage: message.messageText,
//             lastMessageTime: message.messageDate,
//             timeStamp: dayjs().unix()
//         },
//         { merge: true }
//     );
//
//     conversationRoom
//         .collection("messageLog")
//         .doc(message.messageId)
//         .set(message);
// };
//
// export const processMessage = (messageLog, message, uid) => {
//     const timeFull = dayjs().format("YYYY-MM-DD HH:mm:ss");
//     const timeMin = dayjs().format("dddd, h:mm a");
//
//     const pushMessage = {
//         senderId: uid,
//         messageId: uuid(),
//         messageText: message,
//         messageDate: timeMin,
//         messageDateFull: timeFull,
//         showTimeStamp: false
//     };
//
//     // -------- TIME STUFF -------
//
//     if (messageLog.length < 1) {
//         pushMessage.showTimeStamp = true;
//     } else {
//         const previousMsg = messageLog[messageLog.length - 1];
//         const lastTime = dayjs(previousMsg.dateFull);
//         const thisTime = dayjs(message.dateFull);
//         const timeDiff = thisTime.diff(lastTime, "minutes");
//
//         if (timeDiff >= 30) {
//             pushMessage.showTimeStamp = true;
//         }
//     }
//
//     return pushMessage;
// };