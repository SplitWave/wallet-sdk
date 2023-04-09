import { generatePrivateKey } from "./generatePrivateKey";
import { expect, test } from "vitest"

test("generate private key", () => {
    const privateKey = generatePrivateKey()

    expect(privateKey).toBeDefined()
})