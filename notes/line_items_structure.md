`SubscriptionProductDetailScreen` state:
  Uses `selection` in case we need any other properties in the state
```ts
type State  =   { selection: Types.ProductFormSelection };
            =   { selection: {
                  {
                    card: ?Card,
                    items: Array<
                      { 
                        name: string, 
                        price: ?number, 
                        quantity: number
                        fieldName: string 
                      };
                    >
                  };
                }}
```

Perhaps the problem is that we'd rather consolidate using `NamedItemList`:
```ts
export type NamedItemList = {
  items: Array<{
    name: string, 
    price: ?number, 
    quantity: number
  }>
  fieldName: string
};
```