import { atom } from "recoil"
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()
export const loggedUser = atom({
    key: 'login_type',
    default: {
        email: '',
        log_type:''
    },
    effects_UNSTABLE: [persistAtom],
})