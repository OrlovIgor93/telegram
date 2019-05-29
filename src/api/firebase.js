import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

import { config } from "./config";

class Firebase {
    constructor() {
        firebase.initializeApp(config);
        this.auth = firebase.auth();
        this.db = firebase.firestore();
        this.auth.settings.appVerificationDisabledForTesting = true;
    }



    signUpWithPhone(phoneNumber, appVerifier) {
        return this.auth.signInWithPhoneNumber(phoneNumber, appVerifier);
    };

    logout() {
        return this.auth.signOut()
    }

    registerUserAccount(user) {
        return this.db
            .collection("users")
            .doc(user.phoneNumber)
            .set(user);
    };

    setAutoCaptcha() {
        window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier("recaptcha-container", {
            "size": "invisible"
        });
    };

     getCurrentUser() {
        return  this.auth.currentUser;
    }

    updateCurrentUser(userName) {
       const user = this.auth.currentUser;
        this.db
          .collection("users")
          .doc(user.phoneNumber)
          .update({userName: userName});

        return user.updateProfile({
            displayName: userName,
        })
    };



}

export default new Firebase();