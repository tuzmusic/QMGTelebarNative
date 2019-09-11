# Minimal info for posting selections

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
			                "mode": "builder",
			                "name": "",
			                "value": "Weekly",
			                "price": 2,
			                "price_per_currency": {
			                  "USD": 2
			                },
			                "quantity": 1,
			                "multiple": "1",
			                "key": "Weekly_0",
                        	"section": "5d23b7e35e4df9.57432583"
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

```json
// FREE
{
  "name": "Choose 1 free candy bar per gift",
  "value": "Twix",
  "price": 0,  
  "section": "5d23b756c6c877.78250726",
  "quantity": 1
}

// EXTRA
```json
{
  "name": "", // NOTE: Blank
  "value": "Twix",
  "price": 20,  // TOTAL PRICE OF THIS OPTION!!! (quantity * item price)
  "section": "5d23b756c6c8c2.69989172",
  "quantity": 4
}

```

### card form - selectbox 

- 1. Match with checkboxes (see above) - good!
```json
{
  "name": "Add a Anniversary Gift Card",
  "value":
    "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake",
  "price": 0,
  "section": "5d23b7e35e4e27.23351632",
  "quantity": 1
}
```

### card form - custom message
```json
{
  "name": "",
  "value": "Custom message on. this card. Woo hoo.",
  "price": 0,
  "section": "5d23b756c6c8f3.18519071", // NOTE DIFFERENT SECTION NUMBER
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
