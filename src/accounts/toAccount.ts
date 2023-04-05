import { AccountType, CustomSource, JsonRpcAccount, LocalAccount } from "./types"

type GetAccountReturnType<TAccountSource extends CustomSource> =
  | (TAccountSource extends string ? JsonRpcAccount : never)
  | (TAccountSource extends CustomSource ? LocalAccount : never)


export function toAccount<TAccount extends CustomSource>(source: TAccount): GetAccountReturnType<TAccount> {
    return {
        publicKey: source.publicKey,
        signMessage: source.signMessage,
        signTransaction: source.signTransaction,
        source: 'custom',
        type: AccountType.LOCAL,
    } as GetAccountReturnType<TAccount>
}