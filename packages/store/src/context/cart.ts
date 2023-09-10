import { atom } from "recoil";
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const cartAtom = atom({
    key: 'cartItems',
    default: [{
        id: 0,
        name: '',
        price: 0,
        quantity: 0,
        productId: 0,
        imageURL: ''
    }],
    effects_UNSTABLE: [persistAtom]
})