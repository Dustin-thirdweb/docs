---
slug: /reference/sdk.erc1155.burnbatchfrom
title: Erc1155.burnBatchFrom() method
hide_title: true
displayed_sidebar: typescript
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

# Erc1155.burnBatchFrom() method

Burn a batch of NFTs

## Example

```javascript
// The address of the wallet to burn NFTS from
const account = "0x...";
// The token IDs to burn NFTs of
const tokenIds = [0, 1];
// The amounts of each NFT you want to burn
const amounts = [2, 2];

const result = await contract.erc1155.burnBatchFrom(account, tokenIds, amounts);
```

**Signature:**

```typescript
burnBatchFrom(account: string, tokenIds: BigNumberish[], amounts: BigNumberish[]): Promise<TransactionResult>;
```

## Parameters

| Parameter | Type             | Description                   |
| --------- | ---------------- | ----------------------------- |
| account   | string           | the address to burn NFTs from |
| tokenIds  | BigNumberish\[\] | the tokenIds to burn          |
| amounts   | BigNumberish\[\] | amount of each token to burn  |

**Returns:**

Promise&lt;[TransactionResult](./sdk.transactionresult.md)&gt;

## Remarks

Burn the batch NFTs from the specified wallet