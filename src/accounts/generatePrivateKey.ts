import { getPublicKey } from "@noble/ed25519"
import { etc } from "@noble/ed25519"
import { utils } from "@noble/ed25519"
import { sha512 } from "@noble/hashes/sha512"
import base58 from "bs58"

import crypto from "crypto"
global.crypto = crypto

etc.sha512Sync = (...m) => sha512(etc.concatBytes(...m));

export const generatePrivateKey = (): string => {
    const privKey = utils.randomPrivateKey()
    const publicKey = getPublicKey(privKey)

    const secretKey = new Uint8Array(64)
    secretKey.set(privKey)
    secretKey.set(publicKey, 32)

    return base58.encode(secretKey)
}