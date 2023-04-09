import { etc } from "@noble/ed25519";
import { sha512 } from "@noble/hashes/sha512";
import base58 from "bs58";
import { sign } from "./sign";

etc.sha512Sync = (...m) => sha512(etc.concatBytes(...m));

export async function signTransaction({ transaction, privateKey }: { transaction: Uint8Array, privateKey: Uint8Array }): Promise<string> {
    const signature = await sign({ hash: transaction, privateKey })

    return base58.encode(signature.signature)
}