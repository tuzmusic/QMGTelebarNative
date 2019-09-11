# Single item, quantity: 1 - no frequencty selected

```js
meta_data: [],
name: string,
quantity: number,
various price information: string
price: number // the total order price
```

# Single item, quantity: 2 - no frequencty selected

Same as above. `price` is single item price.

# Single item - with frequency selected

- The _only_ place to get the original price of the single bar is `line_items.meta_data._tm_epo_original_price`. 

```js
meta_data: [
  {
    key: "_tmcartepo_data",
    value: [ // Selected frequencies
      {
        // Each selection
        name: "",
        value: string,
        price: number,
        quantity: number
      }
    ]
  },
  {
    key: "_tm_epo_product_original_price",
    value: Original Price (string[]),
  },
  { /* _tmcartepo_data AGAIN */ },
  { /* _tm_epo_product_original_price AGAIN */ },
  {
    /*
    Objects for each selected field, with Key and Value.
    Note that some (most) fields don't have keys
    (corresponds to blank "name" property)
    */
  }
]
```

# 1 Delivery Per Month ($5)

```js
meta_data: [
  {
    key: "_tmcartepo_data",
    value: [
      /* Free selection field */ {
        name: string, // the field name/title
        value: string,
        quantity: number, // quantity = 1. Probably because this is a selectbox field
        price: number
      },
        /* Extra selections field (with a single selection) */ {
        name: "" // huh?
        value: string,  // single selection...
        quantity: string, // different from first field!
        price: number
      },
        /* selected card, probably */ {
        name: "",
        value: Custom message (string)
      }
    ]
  },
  {
    key: "_tm_epo_product_original_price",
    value: Original Price (string[]),
  },
  { /* _tmcartepo_data AGAIN */ },
  { /* _tm_epo_product_original_price AGAIN */ }
]
```

# 2 Deliveries per month
Same as 1 (which is, taken generically, same as 4!)

# 4 Deliveries Per Month ($20)

```js
meta_data: [
  {
    key: "_tmcartepo_data",
    value: [
      /* Free selections - ONE FOR EACH */ {
        name: string, // name of the field ("Choose 4 separate...")
        value: string,
        price: number,
        quantity: string
      },
      /* Extra selections - One for each selection (with quantities) */ {
        /* These are identical to the free selections, 
        except for the info about their field (name: "")
        and of course price */ 
      },
      /* selected card, probably */ {
      name: "",
      value: Custom message (string)
      }
    ]
  }
];
```

# Notes:
- Each non-empty meta-data has:
  - The fields indicated above
  - A `_tm_epo` field, whose value is always `[1]`
  - Those 3 fields, _again_
  - Interesting summary fields, with:
    - ids starting at 100000
    - key: `name` of each form field (note that most name values are empty) 
    - value: a human-readable (though HTML-encoded) summary of the field's selections, e.g., `"Hershey&#039;s $5.00 × 2, 3 Muskateers $5.00 × 2"`, or `"Butterfinger, Twix, M&M, Snickers"`
- Each field object (in `_tmcartepo_data`) has an `element` property, with a `type` property that gives us the form type (selectbox, checkbox, etc).
- For the card field: Custom has no `name` but birthday and anniversary do have a `name`.