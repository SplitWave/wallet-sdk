import { generateMnemonic as _generateMnemonic } from "@scure/bip39"

export function generateMnemonic(wordlist: string[]) {
    return _generateMnemonic(wordlist)
}