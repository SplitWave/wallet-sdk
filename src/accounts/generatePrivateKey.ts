import { utils } from "@noble/ed25519"

export const generatePrivateKey = (): Uint8Array => {
    return utils.randomPrivateKey()
}