import { atom } from "recoil"

export const loggedUser = atom({
    key: 'login_type',
    default: {
        email: '',
        log_type:''
    }
})