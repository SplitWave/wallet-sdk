import { expect, test } from "vitest"
import { privateKeyToAccount } from "./privateKeyToAccount"

test("test private key", () => {
    const account = privateKeyToAccount("5dZXVMyDZxkptigMKijbZJ2W3D1LZGAU2va3wWUp9wwLwuBjJpM2tQ38ZXqCHHeKz2mVLhtmM2FvM9MAUBMvQvaa")

    expect(account.publicKey).toBe("CfvaNcVZTctXLi8MK62A9PDgYCK4grcPDjd2iwDmr8er")
})