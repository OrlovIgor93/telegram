import app from "firebase/app"
import "firebase/auth"
import "firebase/firebase-firestore"

const config = {
    apiKey: "AIzaSyAYMxBb2Wg0zpAacs3jzGy0ke5xXwAdK3s",
    authDomain: "react-telegram-app.firebaseapp.com",
    databaseURL: "https://react-telegram-app.firebaseio.com",
    projectId: "react-telegram-app",
    storageBucket: "react-telegram-app.appspot.com",
    messagingSenderId: "808444415442",
    appId: "1:808444415442:web:dd99e72ffc541464"
};

class Firebase {
    constructor() {
        app.initializeApp(config);
        this.auth = app.auth();
        this.db = app.firestore();
        this.auth.settings.appVerificationDisabledForTesting = true;
    }

    signUpWithPhone(phoneNumber, appVerifier) {
        return this.auth.signInWithPhoneNumber(phoneNumber, appVerifier);
    };

    registerUserAccount(user) {
        return this.db
            .collection("users")
            .doc(user.uid)
            .set(user);
    };

    setAutoCaptcha() {
        window.recaptchaVerifier = new app.auth.RecaptchaVerifier("recaptcha-container", {
            "size": "invisible"
        });
    };

    updateCurrentUser(userName) {
        const userCurrent = this.auth.currentUser;

        return userCurrent.updateProfile({
            displayName: userName,
        })
    };



}

export default new Firebase()