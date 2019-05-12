import React, { useContext, useEffect, useState } from "react";
import { Redirect } from "react-router";

import { Header } from "./ComponentsLogin/Header.jsx";
import Login from "./ComponentsLogin/Login.jsx";
import { LearnMore } from "./ComponentsLogin/LearnMore.jsx";
import { VerticalWrap } from "../common/VerticalWrap";
import { countryCode } from "../../mock/countryCode";
import firebase from "../../api/firebase";
import { StoreContext } from "../../store";
import { loginSuccess } from "../../actions/actionCreatorUser";

import { loginPage } from "../styles"
import ConfirmCode from "./ConfirmCode";

export const LoginPage = () => {
    const [selectCountry, setSelectCountry] = useState(() =>
        countryCode.find((el) => el.selected)
        || {
            name: "",
            code: "",
            phoneLength: -1
        });

    const [phoneNumber, setPhoneNumber] = useState("");
    const [userName, setUserName] = useState("Den Abramov");
    const [error, setError] = useState("");
    const [code, setCode] = useState("");
    const [isNewUser, setIsNewUser] = useState(null);
    const [codeSent, setCodeSent] = useState(false);
    const { authenticated, dispatchUser } = useContext(StoreContext);

    useEffect(() => {
        firebase.setAutoCaptcha();
        return () => {
            window.recaptchaVerifier = null;
        }
    }, []);

    const handleChange = ({ target: { value } }) => {
        setSelectCountry(value);
    };

    const handleChangePhoneNumberInput = ({ target: { value } }) => {
        if (value.length > selectCountry.phoneLength) {
            setError("Long phone number");
        } else {
            setError("");
        }
        setPhoneNumber(value);
    };

    const handleBlur = () => {
        if (phoneNumber.length < selectCountry.phoneLength) {
            setError("short phone number");
        }
    };
    const onChangeConfirmCode = ({ target: { value } }) => {
        setCode(value)
    };

    const handleSubmitNumber = e => {
        e.preventDefault();
        const fullPhoneNumber = `${selectCountry.code} ${phoneNumber}`;
        const appVerifier = window.recaptchaVerifier;

        firebase.signUpWithPhone(fullPhoneNumber, appVerifier)
            .then(confirmationResult => {
                console.log("confirmationResult", confirmationResult);
                window.confirmationResult = confirmationResult;
                setCodeSent(true);
            })
            .catch(error => {
                console.log("error", error)
            })
        ;

    };

    const handleConfirmCode = e => {
        e.preventDefault();
        window.confirmationResult
            .confirm(code)
            .then(result => {
                const { user, additionalUserInfo } = result;
                if (additionalUserInfo.isNewUser) {
                    setIsNewUser(user);
                } else {
                    dispatchUser(loginSuccess(user));
                }
            })
            .catch(error => {
                console.log("error", error)
            });
    };

   const handleFinishRegistration =()=>{
       const initialData = {
           dialogs: {},
           uid: isNewUser.uid,
           phoneNumber: isNewUser.phoneNumber,
           userName: userName
       };

       firebase
           .registerUserAccount(initialData)
           .then((res)=>console.log(res))
           .catch(error=>console.log(error));

       firebase.updateCurrentUser(userName)
           .then(()=>dispatchUser(loginSuccess({...isNewUser,userName: userName} )))
           .catch(error=>console.log(error));
   };

    if (authenticated) {
        return <Redirect to="/"/>;
    }


    return (
        <VerticalWrap style={loginPage}>
            <Header
                error={selectCountry.phoneLength !== phoneNumber.length}
                handleLoginStep={handleSubmitNumber}
            />
            <Login
                countryCode={countryCode}
                error={error}
                phoneNumber={phoneNumber}
                selectCountry={selectCountry}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handleChangePhoneNumberInput={handleChangePhoneNumberInput}
            />
            <LearnMore/>

            <ConfirmCode open={codeSent}
                         onChangeConfirmCode={onChangeConfirmCode}
                         isNewUser={isNewUser}
                         code={code}
                         handleConfirmCode={handleConfirmCode}
                         userName={userName}
                         setUserName={setUserName}
                         handleFinishRegistration={handleFinishRegistration}
            />
        </VerticalWrap>
    );
};