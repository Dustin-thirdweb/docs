---
slug: /react.useupdateprimarysalerecipient
title: useUpdatePrimarySaleRecipient() function
hide_title: true
displayed_sidebar: react
---

<!-- Do not edit this file. It is automatically generated by API Documenter. -->

## useUpdatePrimarySaleRecipient() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.

Use this to update the primary sales recipient of your

**Signature:**

```typescript
export declare function useUpdatePrimarySaleRecipient(
  contract: RequiredParam<SmartContract | ValidContractInstance>,
): import("react-query").UseMutationResult<
  Omit<
    {
      receipt: import("@ethersproject/abstract-provider").TransactionReceipt;
      data: () => Promise<unknown>;
    },
    "data"
  >,
  unknown,
  string,
  unknown
>;
```

## Parameters

| Parameter | Type                                                                                        | Description      |
| --------- | ------------------------------------------------------------------------------------------- | ---------------- |
| contract  | [RequiredParam](./react.requiredparam.md)&lt;SmartContract &#124; ValidContractInstance&gt; | an instance of a |

**Returns:**

import("react-query").UseMutationResult&lt;Omit&lt;{ receipt: import("@ethersproject/abstract-provider").TransactionReceipt; data: () =&gt; Promise&lt;unknown&gt;; }, "data"&gt;, unknown, string, unknown&gt;

a mutation object that can be used to update the primary sales recipient

## Example

```jsx
const Component = () => {
  const {
    mutate: updatePrimarySalesRecipient,
    isLoading,
    error,
  } = useUpdatePrimarySaleRecipient(SmartContract);

  if (error) {
    console.error("failed to update recipient", error);
  }

  return (
    <button
      disabled={isLoading}
      onClick={() => updatePrimarySalesRecipient({ newRecipient: "0x123" })}
    >
      Update Recipient
    </button>
  );
};
```