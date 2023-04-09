import { generateMnemonic } from "./generateMnemonic"
import { expect, test } from "vitest"
import { wordlist } from "@scure/bip39/wordlists/english"
import { mnemonicToAccount } from "./mnemonicToAccount"

test("mnemonic english test", () => {
    const phrase = generateMnemonic(wordlist)

    expect(phrase.split(" ").length).toBe(12)
})