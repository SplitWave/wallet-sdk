import { expect, test } from "vitest";
import { mnemonicToAccount } from "./mnemonicToAccount";

test("test mnemonic to account", () => {
    const seed = "simple neither goose extra rule field crowd either prosper artist system prison"

    const account = mnemonicToAccount(seed)

    expect(account.publicKey).toBe("AwLVzB6DvfLWPJDNA3iYWAiUwfjmM4vTca55R2VSRQ6G")
})