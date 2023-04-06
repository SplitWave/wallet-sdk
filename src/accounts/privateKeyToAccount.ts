import { getPublicKey, etc } from "@noble/ed25519"
import { sha512 } from "@noble/hashes/sha512";
import base58 from "bs58"
import { toAccount } from "./toAccount"
import { signMessage, signTransaction } from "./utils"

etc.sha512Sync = (...m) => sha512(etc.concatBytes(...m));

export const privateKeyToAccount = (privateKey: string) => {
    const publicKey = getPublicKey(base58.decode(privateKey).slice(0, 32))

    const account = toAccount({
        publicKey: base58.encode(publicKey),
        signMessage: async ({ message }) => {
            return signMessage({message, privateKey: base58.decode(privateKey).slice(0, 32)})
        },
        signTransaction: async (transaction) => {
            return signTransaction({message: "transaction.toString() as string", privateKey: base58.decode(privateKey)})
        }
    })

    account.signMessage({ message: "dsa" }).then(x => console.log(x)).catch(e => console.error(e))

    return account
}