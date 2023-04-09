import { getPublicKey, etc } from "@noble/ed25519"
import { sha512 } from "@noble/hashes/sha512";
import base58 from "bs58"
import { toAccount } from "./toAccount"
import { signMessage, signTransaction } from "./utils"

export const privateKeyToAccount = (privateKey: string) => {
    const publicKey = getPublicKey(base58.decode(privateKey).slice(0, 32))

    const account = toAccount({
        publicKey: base58.encode(publicKey),
        signMessage: async ({ message }) => {
            return signMessage({message, privateKey: base58.decode(privateKey).slice(0, 32)})
        },
        signTransaction: async (transaction) => {
            return signTransaction({transaction, privateKey: base58.decode(privateKey)})
        }
    })

    return account
}