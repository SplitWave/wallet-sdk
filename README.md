# Solana SDK

A new and modular way to interact with Solana

## Installation

```shell
npm i solana-wallet-creator
```

## Accounts

### Create Wallet

```typescript
import { createRandomKeypair } from "solana-sdk/accounts"

const keypair = createRandomKeypair()
```