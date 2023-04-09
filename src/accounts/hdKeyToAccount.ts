import base58 from "bs58";
import { HDKey } from "ed25519-keygen/hdkey";
import { privateKeyToAccount } from "./privateKeyToAccount";
import { HDAccount, HDOptions } from "./types";

export const hdKeyToAccount = (key: HDKey, opts: HDOptions = {}): HDAccount => {
    const hdKey = key.derive(
        opts.path || `m/44'/501'/${opts.changeIndex ?? "0"}'/0'`
    )
    const account = privateKeyToAccount(base58.encode(hdKey.privateKey))

    return {
        ...account,
        getHdKey: () => hdKey,
        source: 'hd'
    }
}