import { getPublicKey } from "@noble/ed25519"
import base58 from "bs58"
import { toAccount } from "./toAccount"
import { signMessage, signTransaction } from "./utils"

export const privateKeyToAccount = (privateKey: string) => {
    const publicKey = getPublicKey(base58.decode(privateKey))

    return toAccount({
        publicKey: base58.encode(publicKey),
        signMessage: async ({ message }) => {
            return signMessage({message, privateKey: base58.decode(privateKey)})
        },
        signTransaction: async (transaction) => {
            return signTransaction({message: "transaction.toString() as string", privateKey: base58.decode(privateKey)})
        }
    })
}