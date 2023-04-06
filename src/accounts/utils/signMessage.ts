import base58 from "bs58";
import { sign } from "./sign";

export async function signMessage({ message, privateKey }: { message: string, privateKey: Uint8Array }): Promise<string> {
    console.log(message, privateKey)
    
    const signature = await sign({ hash: Buffer.from(message), privateKey })

    console.log(signature)

    return base58.encode(signature.signature)
}