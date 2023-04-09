import { mnemonicToSeedSync } from "@scure/bip39";
import { HDKey } from "ed25519-keygen/hdkey";
import { hdKeyToAccount } from "./hdKeyToAccount";
import { HDOptions } from "./types";

export const mnemonicToAccount = (mnemonic: string, opts: HDOptions = {}) => {
    const seed = mnemonicToSeedSync(mnemonic)

    return hdKeyToAccount(HDKey.fromMasterSeed(seed), opts)
}