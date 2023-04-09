import { hdKeyToAccount } from "./hdKeyToAccount"
import { expect, test } from "vitest"
import { HDKey } from "ed25519-keygen/hdkey"

const hdKey = HDKey.fromMasterSeed(
    new Uint8Array( [
        242,  70, 251,  15,  35, 179, 223, 198, 252,  64,  52,
         39, 120, 136,  54, 215,  94, 104, 161,  12,  20,  52,
        226, 117, 223, 194,  18, 150,  20, 102, 198, 140, 107,
          2,  96,  12,  38,  81, 110,  85,  57, 242, 212, 234,
        115, 238, 153, 164, 233,  31, 185, 232, 244,  20,  63,
         63,  94,  10, 221, 231,  25,  48,  33, 225
      ])
)

test("generate private key", () => {
    const account = hdKeyToAccount(hdKey)
    expect(account).toBeDefined()
})