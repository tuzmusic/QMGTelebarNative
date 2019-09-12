# Minimal info for posting selections

- General notes:
  - In all cases when we need a `section` key, it can be anything, including blank!
  - All line items need `product_id` and `quantity`.
  - A line item without a form needs no `meta_data`.
  - Any line item with a form needs `meta_data._tmcartepo_data`, which as a `value` array with each form selection.
    - The card form, with its exclusive-ness, only results in one object in the array.
    - Each checked off candy (free/extra) results in one object. For example:
      - 2 free Snickers is 1 field with quantity = 2
      - 4 different free candies are 4 different fields (with the same name, which is the "name" of the free candy field)
  - A line item that has a form may also include a `meta_data._tm_epo_product_original_price` object, which has the actual price of the _main item_.
    - For a single candy with a card (which needs a form), the original price is the price of one candy.
    - For a subscription product, the original price is the **price of a single subscription** (not the price of, for example, a single extra candy).
      - If `subscription.quantity > 1`, original price is for one subscription (`price` in main `line_item` will be `quantity * original_price` but original price will not be found anywhere outside this meta field)
      - An extra candy with `quantity > 1` will show its total price; original price of each candy not present, event in this original_price field.

## Single item

```json
	"line_items": [
		{
			"product_id": 1014,
      "quantity": 2,
		}
  ]
```

## Single item with frequency

```json
	"line_items": [
		{
	        "product_id": 986,
	        "quantity": 2,
	        "meta_data": [
	        	{
	        		"key": "_tmcartepo_data",
              "value": [
                {
                  "name": "",
                  "value": "Weekly",
                  "price": 2,
                  "quantity": 1,
                  "section": ""
                }
              ]
	        	},
	        	{
              "key": "_tm_epo_product_original_price",
              "value": ["10"]
	        	}
        	]
		}
  ]
```

- Minimum info for frequency selection:

  - value
  - price - necessary!
    - trying without (and with)
  - quantity - should be unncessary for selectbox

  - 1. done
  - 2. Trying:
    - single product with only id and quantity
    - _full_ metadata for frequency fields
    - Result:
      - This does generate the duplicate meta fields, as well as the summary field.
  - 3. Trying:
    - Getting rid of a lot of the surplus-looking meta fields
      - `cssclass`, `hide` keys, `section`, `section_label` (which duplicates the value of `name`), `percentcurrenttotal`, `currencies`, `multiple`, and everything after `key`
      - Result:
        - Doesn't generate duplicate fields or summary.
  - 4. Trying:
    - Putting back `section` and `section_label`.
    - Result: works!
  - 5. Trying:
    - Get rid of `element`
    - Result: works!
  - 6. Trying:
    - Get rid of "section_label"
    - Result: works!
  - 7. Add `_tm_epo_product_original_price`

## Subscriptions

- We really just need to know what we need for each kind of field (checkboxes, cardfield)

### checkboxes

- Trying:
  - 1. Full info - good
  - 2. Delete blank keys - good
  - 3. Delete `element` - good
  - 4. Delete `section_label` - good
  - 5. Delete `mode` - good!
  - 6. Delete `multiple` - good!
  - 7. Delete `section` - no!
  - 8. Delete `key` - good!

````json
// FREE
{
  "name": "Choose 1 free candy bar per gift",
  "value": "Twix",
  "price": 0,
  "section": "",
  "quantity": 1
}

// EXTRA
```json
{
  "name": "", // NOTE: Blank
  "value": "Twix",
  "price": 20,  // TOTAL PRICE OF THIS OPTION!!! (quantity * item price)
  "section": "",
  "quantity": 4
}

````

### card form - selectbox

- 1. Match with checkboxes (see above) - good!

```json
{
  "name": "Add a Anniversary Gift Card",
  "value": "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake",
  "price": 0,
  "section": "",
  "quantity": 1
}
```

### card form - custom message

```json
{
  "name": "",
  "value": "Custom message on. this card. Woo hoo.",
  "price": 0,
  "section": "",
  "quantity": 1
}
```

## What do we need this info for?

- Well...

  - Do we need to reproduce the whole form from an **order**? No! We just need to be able to POST an order.
    And possibly display it, with the id:100000+ summary fields, in the user profile section (which appears to be how the website does it)
    _However_, we do need to be able to reproduce a cart item.
    _However_, if we are keeping the cart local, we can use our own API and only worry about how we get the minimal info to the WC API for the order.
    If, later, we want to _get_ the user's current cart from online, we can _rebuild_ our `Order.toApi` method to include all the static boilerplate.

- The only thing left is M&Ms which are just a card form. I imagine this is a fluke.
