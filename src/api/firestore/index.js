import firebase from "../firebase";

export const getUserByPhoneNumber = (findPhoneNumber, phoneNumber) => {


    const user = firebase.db
        .collection("users")
        .doc(findPhoneNumber);

    return user.get().then(function(sfDoc) {
            if (!sfDoc.exists) {
                throw "Document does not exist!";
            }

            const batch = firebase.db.batch();
            const newDialog = firebase.db.collection("dialogs").doc();
            const data = {
                members: {
                    findPhoneNumber,
                    phoneNumber
                },
                messages: [
                    {
                        author: phoneNumber,
                        timeMessage: new Date(),
                        textMessage: `${phoneNumber} create dialog`
                    }
                ]
            };
            batch.set(newDialog, data);

            return batch.commit();


            // if (newPopulation <= 1000000) {
            //     transaction.update(sfDocRef, { population: newPopulation });
            //     return newPopulation;
            // } else {
            //     return Promise.reject("Sorry! Population is too big.");
            // }


        }
    );
};


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