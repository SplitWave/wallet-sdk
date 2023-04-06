import { privateKeyToAccount } from "./privateKeyToAccount"

export const test = () => {
    const account = privateKeyToAccount("5dZXVMyDZxkptigMKijbZJ2W3D1LZGAU2va3wWUp9wwLwuBjJpM2tQ38ZXqCHHeKz2mVLhtmM2FvM9MAUBMvQvaa")

    console.log(account)
}

test()