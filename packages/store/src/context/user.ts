import { atom } from "recoil"

export const loggedUser = atom({
    key: 'user',
    default: {
        email: ''
    }
})