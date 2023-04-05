import base58 from "bs58";
import { sign } from "./sign";

export async function signTransaction({ message, privateKey }: { message: string, privateKey: Uint8Array }): Promise<string> {
    const signature = await sign({ hash: message, privateKey })

    return base58.encode(signature.signature)
}