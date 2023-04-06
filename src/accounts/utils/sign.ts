import { sign as signMessage } from "@noble/ed25519"

export type SignReturnType = {
    signature: Uint8Array
}

export async function sign({
    hash,
    privateKey
}: {
    hash: Uint8Array,
    privateKey: Uint8Array
}): Promise<SignReturnType> {
    console.log(hash, privateKey)
    const signature = signMessage(hash, privateKey)
    
    return {
        signature
    }
}