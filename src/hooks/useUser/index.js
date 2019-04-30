import { useState } from 'react';
import {accountData} from "../../mock/accountData";


export const useUser = () => {
    const [profileInfo, changeProfileInfo] = useState(accountData);


    return {
        profileInfo, changeProfileInfo
    };

};
