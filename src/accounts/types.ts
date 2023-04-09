import type { HDKey } from "ed25519-keygen/hdkey"

export enum AccountType {
    JSON_RPC = 'json-rpc',
    LOCAL = 'local'
}

export type Account = JsonRpcAccount | LocalAccount

export type CustomSource = {
    publicKey: string
    signMessage: ({ message }: { message: string }) => Promise<string>
    signTransaction: (transaction: Uint8Array) => Promise<string> // todo
  }

export type JsonRpcAccount = {
    publicKey: string,
    type: AccountType.JSON_RPC
}

export type LocalAccount<
  TSource extends string = 'custom',
  TAddress extends string = string,
> = CustomSource & {
  publicKey: TAddress,
  source: TSource
  type: AccountType.LOCAL
}

export type HDAccount = LocalAccount<'hd'> & {
    getHdKey(): HDKey
}

export type HDOptions = 
    | {
        /** The account index to use in the path (`"m/44'/501'/${accountIndex}'/0"`). */
        depth?: number
        /** The address index to use in the path (`"m/44'/60'/0'/0/${addressIndex}"`). */
        index?: number
        /** The change index to use in the path (`"m/44'/60'/0'/${changeIndex}/0"`). */
        parentFingerprint?: number
        path?: never
    }
    | {
        accountIndex?: never
        addressIndex?: never
        changeIndex?: never
        /** The HD path. */
        path: `m/44'/501'/${string}'/0'`
    }