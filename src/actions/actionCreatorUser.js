
import { LOG_IN_SUCCESS, LOG_OUT_USER, INITIALISING_USER} from "../constants";

export function loginSuccess(user) {
    return { type: LOG_IN_SUCCESS, authData: user }
}

export function logOutSuccess() {
    return { type: LOG_OUT_USER }
}

export function initialisingUser() {
    return { type: INITIALISING_USER }
}