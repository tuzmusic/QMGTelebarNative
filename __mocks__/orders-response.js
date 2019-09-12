// pasted 9/11/19, mainly to just get a good look at order info
// [0] is my order with what should be all the different types of items
export const ordersResponse = [
  {
    id: 1287,
    parent_id: 0,
    number: "1287",
    order_key: "wc_order_hiSlOCCMgNTW8",
    created_via: "checkout",
    version: "3.6.4",
    status: "processing",
    currency: "USD",
    date_created: "2019-09-11T18:08:24",
    date_created_gmt: "2019-09-11T18:08:24",
    date_modified: "2019-09-11T18:08:36",
    date_modified_gmt: "2019-09-11T18:08:36",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "0.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "144.00",
    total_tax: "0.00",
    prices_include_tax: false,
    customer_id: 4,
    customer_ip_address: "76.24.193.62",
    customer_user_agent:
      "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/76.0.3809.132 Safari/537.36",
    customer_note: "",
    billing: {
      first_name: "Jonathan",
      last_name: "Tuzman",
      company: "Sunrise Labs!",
      address_1: "88 N Spring St",
      address_2: "123",
      city: "Concord",
      state: "NH",
      postcode: "03301",
      country: "US",
      email: "tuzmusic@gmail.com",
      phone: "2026766507"
    },
    shipping: {
      first_name: "Holly",
      last_name: "Shulman",
      company: "Holly's Company",
      address_1: "PO Box 3304",
      address_2: "123",
      city: "Washington",
      state: "DC",
      postcode: "20010",
      country: "US"
    },
    payment_method: "stripe",
    payment_method_title: "Credit Card (Stripe)",
    transaction_id: "ch_1FHaF5Hmb92rNdesr2dhwLJf",
    date_paid: "2019-09-11T18:08:36",
    date_paid_gmt: "2019-09-11T18:08:36",
    date_completed: null,
    date_completed_gmt: null,
    cart_hash: "607af6c871f45eee787ac43896fb906a",
    meta_data: [
      {
        id: 19676,
        key: "is_vat_exempt",
        value: "no"
      },
      {
        id: 19677,
        key: "myfield1",
        value: "Holly Tropper Shulman"
      },
      {
        id: 19678,
        key: "_subscription_switch_data",
        value: []
      },
      {
        id: 19735,
        key: "_stripe_customer_id",
        value: "cus_FnAaAcbj2ZpRlV"
      },
      {
        id: 19736,
        key: "_stripe_source_id",
        value: "src_1FHaErHmb92rNdesy39gFzdP"
      },
      {
        id: 19739,
        key: "_stripe_intent_id",
        value: "pi_1FHaF4Hmb92rNdesrm4BVS4A"
      },
      {
        id: 19740,
        key: "_stripe_charge_captured",
        value: "yes"
      },
      {
        id: 19741,
        key: "_stripe_fee",
        value: "4.48"
      },
      {
        id: 19742,
        key: "_stripe_net",
        value: "139.52"
      },
      {
        id: 19743,
        key: "_stripe_currency",
        value: "USD"
      }
    ],
    line_items: [
      {
        id: 12,
        name: "M&M Peanut",
        product_id: 1014,
        variation_id: 0,
        quantity: 2,
        tax_class: "",
        subtotal: "20.00",
        subtotal_tax: "0.00",
        total: "20.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [],
        sku: "",
        price: 10
      },
      {
        id: 13,
        name: "1 Delivery a Month for only $5",
        product_id: 935,
        variation_id: 0,
        quantity: 2,
        tax_class: "",
        subtotal: "30.00",
        subtotal_tax: "0.00",
        total: "30.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          /* THE FORM WITH SELECTIONS */ {
            id: 149,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Twix",
                price: 0,
                section: "5d23b756c6c877.78250726",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Reese&#039;s",
                price: 10,
                section: "5d23b756c6c8c2.69989172",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 10
                },
                quantity: "2",
                multiple: "1",
                key: "Reese&#039;s_5",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "textarea",
                  rules_type: [[""]],
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Custom message on. this card. Woo hoo.",
                price: 0,
                section: "5d23b756c6c8f3.18519071",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: [],
                quantity: 1
              }
            ]
          },
          /* ORIGINAL_PRICE */ {
            id: 150,
            key: "_tm_epo_product_original_price",
            value: ["5"]
          },
          /* Nothing? */ {
            id: 151,
            key: "_tm_epo",
            value: [1]
          },
          /* THE FORM WITH SELECTIONS - again! */ {
            id: 149,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Twix",
                price: 0,
                section: "5d23b756c6c877.78250726",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Reese&#039;s",
                price: 10,
                section: "5d23b756c6c8c2.69989172",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 10
                },
                quantity: "2",
                multiple: "1",
                key: "Reese&#039;s_5",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "textarea",
                  rules_type: [[""]],
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Custom message on. this card. Woo hoo.",
                price: 0,
                section: "5d23b756c6c8f3.18519071",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: [],
                quantity: 1
              }
            ]
          },
          /* ORIGINAL_PRICE - again! */ {
            id: 150,
            key: "_tm_epo_product_original_price",
            value: ["5"]
          },
          /* NOTHING - AGAIN! */ {
            id: 151,
            key: "_tm_epo",
            value: [1]
          },
          /* Key and Value of Selected fields: note that some (most) fields don't have keys (corresponds to blank "name" property) */ {
            id: 100000,
            key: "Choose 1 free candy bar per gift",
            value: "Twix"
          },
          {
            id: 100001,
            key: "",
            value: "Reese&#039;s $5.00 × 2"
          },
          {
            id: 100002,
            key: "",
            value: "<p>Custom message on. this card. Woo hoo.</p>\n"
          }
        ],
        sku: "",
        price: 15
      },
      {
        id: 14,
        name: "3 Muskateers",
        product_id: 986,
        variation_id: 0,
        quantity: 2,
        tax_class: "",
        subtotal: "44.00",
        subtotal_tax: "0.00",
        total: "44.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 161,
            key: "_tmcartepo_data",
            value: [
              /* Select frequency */ {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Weekly_0: [""],
                    Biweekly_1: [""],
                    Monthly_2: [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Weekly",
                price: 2,
                section: "5ccb146fa14493.76960026",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 2
                },
                quantity: 1,
                multiple: "1",
                key: "Weekly_0",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Weekly_0: [""],
                    Biweekly_1: [""],
                    Monthly_2: [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Monthly",
                price: 10,
                section: "5ccb146fa14493.76960026",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 10
                },
                quantity: 1,
                multiple: "1",
                key: "Monthly_2",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 162,
            key: "_tm_epo_product_original_price",
            value: ["10"]
          },
          {
            id: 163,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 161,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Weekly_0: [""],
                    Biweekly_1: [""],
                    Monthly_2: [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Weekly",
                price: 2,
                section: "5ccb146fa14493.76960026",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 2
                },
                quantity: 1,
                multiple: "1",
                key: "Weekly_0",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Weekly_0: [""],
                    Biweekly_1: [""],
                    Monthly_2: [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Monthly",
                price: 10,
                section: "5ccb146fa14493.76960026",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 10
                },
                quantity: 1,
                multiple: "1",
                key: "Monthly_2",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 162,
            key: "_tm_epo_product_original_price",
            value: ["10"]
          },
          {
            id: 163,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 100000,
            key: "",
            value: "Weekly $2.00, Monthly $10.00"
          }
        ],
        sku: "",
        price: 22
      },
      {
        id: 15,
        name: "4 Deliveries a Month for only $20",
        product_id: 938,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "40.00",
        subtotal_tax: "0.00",
        total: "40.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 173,
            key: "_tmcartepo_data",
            value: [
              /* Free candy 1 */ {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name:
                  "Choose 4 separate or mix and match candy to began placing your order",
                value: "Butterfinger",
                price: 0,
                section: "5d23b5e4bc9613.31243931",
                section_label:
                  "Choose 4 separate or mix and match candy to began placing your order",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: "1",
                multiple: "1",
                key: "Butterfinger_0",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              /* Free candy 2 */ {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name:
                  "Choose 4 separate or mix and match candy to began placing your order",
                value: "Twix",
                price: 0,
                section: "5d23b5e4bc9613.31243931",
                section_label:
                  "Choose 4 separate or mix and match candy to began placing your order",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: "1",
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              /* Free candy 3 */ {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name:
                  "Choose 4 separate or mix and match candy to began placing your order",
                value: "M&amp;M",
                price: 0,
                section: "5d23b5e4bc9613.31243931",
                section_label:
                  "Choose 4 separate or mix and match candy to began placing your order",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: "1",
                multiple: "1",
                key: "M&amp;M_2",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              /* Free candy 4 */ {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name:
                  "Choose 4 separate or mix and match candy to began placing your order",
                value: "Snickers",
                price: 0,
                section: "5d23b5e4bc9613.31243931",
                section_label:
                  "Choose 4 separate or mix and match candy to began placing your order",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: "1",
                multiple: "1",
                key: "Snickers_3",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              /* Extra candy 1 (Hersheys x 2)*/ {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Hershey&#039;s",
                price: 10,
                section: "5d37d46af20c50.88536732",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 10
                },
                quantity: "2",
                multiple: "1",
                key: "Hershey&#039;s_9",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              /* Extra candy 2 (3 Musk x 2)*/ {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "3 Muskateers",
                price: 10,
                section: "5d37d46af20c50.88536732",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 10
                },
                quantity: "2",
                multiple: "1",
                key: "3 Muskateers_10",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
             /* Selected card */ {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "textarea",
                  rules_type: [[""]],
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Custom card message!",
                price: 0,
                section: "5d23b5e4bc9642.07058587",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: [],
                quantity: 1
              }
            ]
          },
          {
            id: 174,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 175,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 173,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name:
                  "Choose 4 separate or mix and match candy to began placing your order",
                value: "Butterfinger",
                price: 0,
                section: "5d23b5e4bc9613.31243931",
                section_label:
                  "Choose 4 separate or mix and match candy to began placing your order",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: "1",
                multiple: "1",
                key: "Butterfinger_0",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name:
                  "Choose 4 separate or mix and match candy to began placing your order",
                value: "Twix",
                price: 0,
                section: "5d23b5e4bc9613.31243931",
                section_label:
                  "Choose 4 separate or mix and match candy to began placing your order",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: "1",
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name:
                  "Choose 4 separate or mix and match candy to began placing your order",
                value: "M&amp;M",
                price: 0,
                section: "5d23b5e4bc9613.31243931",
                section_label:
                  "Choose 4 separate or mix and match candy to began placing your order",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: "1",
                multiple: "1",
                key: "M&amp;M_2",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name:
                  "Choose 4 separate or mix and match candy to began placing your order",
                value: "Snickers",
                price: 0,
                section: "5d23b5e4bc9613.31243931",
                section_label:
                  "Choose 4 separate or mix and match candy to began placing your order",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: "1",
                multiple: "1",
                key: "Snickers_3",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Hershey&#039;s",
                price: 10,
                section: "5d37d46af20c50.88536732",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 10
                },
                quantity: "2",
                multiple: "1",
                key: "Hershey&#039;s_9",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "checkbox",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese&#039;s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey&#039;s_9": [""],
                    "3 Muskateers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "3 Muskateers",
                price: 10,
                section: "5d37d46af20c50.88536732",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: 10
                },
                quantity: "2",
                multiple: "1",
                key: "3 Muskateers_10",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "textarea",
                  rules_type: [[""]],
                  _: {
                    price_type: ""
                  }
                },
                name: "",
                value: "Custom card message!",
                price: 0,
                section: "5d23b5e4bc9642.07058587",
                section_label: "",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: [],
                quantity: 1
              }
            ]
          },
          {
            id: 174,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 175,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 100000,
            key:
              "Choose 4 separate or mix and match candy to began placing your order",
            value: "Butterfinger, Twix, M&M, Snickers"
          },
          {
            id: 100001,
            key: "",
            value: "Hershey&#039;s $5.00 × 2, 3 Muskateers $5.00 × 2"
          },
          {
            id: 100002,
            key: "",
            value: "<p>Custom card message!</p>\n"
          }
        ],
        sku: "",
        price: 40
      },
      {
        id: 16,
        name: "2 Deliveries a Month for only $10",
        product_id: 924,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "10.00",
        subtotal_tax: "0.00",
        total: "10.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 185,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Twix",
                price: 0,
                section: "5d23b7e35e4df9.57432583",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "The secret of a happy marriage is finding the right person. You know they&#039;re right if you love to be with them all the time.  -Julia Child_0": [
                      ""
                    ],
                    "A wedding anniversary is the celebration of love, trust, partnership, tolerance and tenacity. The order varies for any given year.  -Paul Sweeney_1": [
                      ""
                    ],
                    "You were made perfectly to be loved - and surely I have loved you, in the idea of you, my whole life long.  -Elizabeth Barrett Browning_2": [
                      ""
                    ],
                    "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake_3": [
                      ""
                    ],
                    "Love me or hate me, both are in my favour. If you love me, I will always be in your heart, and if you hate me, I will be in your mind.  -Qandeel Baloch_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Anniversary Gift Card",
                value:
                  "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake",
                price: 0,
                section: "5d23b7e35e4e27.23351632",
                section_label: "Add a Anniversary Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake_3",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 186,
            key: "_tm_epo_product_original_price",
            value: ["10"]
          },
          {
            id: 187,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 185,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Twix",
                price: 0,
                section: "5d23b7e35e4df9.57432583",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "The secret of a happy marriage is finding the right person. You know they&#039;re right if you love to be with them all the time.  -Julia Child_0": [
                      ""
                    ],
                    "A wedding anniversary is the celebration of love, trust, partnership, tolerance and tenacity. The order varies for any given year.  -Paul Sweeney_1": [
                      ""
                    ],
                    "You were made perfectly to be loved - and surely I have loved you, in the idea of you, my whole life long.  -Elizabeth Barrett Browning_2": [
                      ""
                    ],
                    "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake_3": [
                      ""
                    ],
                    "Love me or hate me, both are in my favour. If you love me, I will always be in your heart, and if you hate me, I will be in your mind.  -Qandeel Baloch_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Anniversary Gift Card",
                value:
                  "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake",
                price: 0,
                section: "5d23b7e35e4e27.23351632",
                section_label: "Add a Anniversary Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake_3",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 186,
            key: "_tm_epo_product_original_price",
            value: ["10"]
          },
          {
            id: 187,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 100000,
            key: "Choose 1 free candy bar per gift",
            value: "Twix"
          },
          {
            id: 100001,
            key: "Add a Anniversary Gift Card",
            value:
              "An anniversary is a reminder as to why you love and married this person.  -Zoe Foster Blake"
          }
        ],
        sku: "",
        price: 10
      }
    ],
    tax_lines: [],
    shipping_lines: [
      {
        id: 17,
        method_title: "Flat rate",
        method_id: "flat_rate",
        instance_id: "1",
        total: "0.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 193,
            key: "Items",
            value:
              "M&M Peanut &times; 2, 1 Delivery a Month for only $5 &times; 2, 3 Muskateers &times; 2, 4 Deliveries a Month for only $20 &times; 1, 2 Deliveries a Month for only $10 &times; 1"
          }
        ]
      }
    ],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    _links: {
      self: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders/1287"
        }
      ],
      collection: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders"
        }
      ],
      customer: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/customers/4"
        }
      ]
    }
  },
  {
    id: 1246,
    parent_id: 0,
    number: "1246",
    order_key: "wc_order_gWzBdfKyPvOCA",
    created_via: "subscription",
    version: "3.6.4",
    status: "processing",
    currency: "USD",
    date_created: "2019-08-16T08:11:58",
    date_created_gmt: "2019-08-16T08:11:58",
    date_modified: "2019-08-16T08:11:59",
    date_modified_gmt: "2019-08-16T08:11:59",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "0.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "25.00",
    total_tax: "0.00",
    prices_include_tax: false,
    customer_id: 1,
    customer_ip_address: "68.100.50.19",
    customer_user_agent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1",
    customer_note: "",
    billing: {
      first_name: "FName1",
      last_name: "LName1",
      company: "",
      address_1: "7171 hollow rd",
      address_2: "",
      city: "Alexandria",
      state: "CA",
      postcode: "22309",
      country: "US",
      email: "user1@user-mail.net",
      phone: "5712123131"
    },
    shipping: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: ""
    },
    payment_method: "stripe",
    payment_method_title: "Credit Card (Stripe)",
    transaction_id: "ch_1F80XSHmb92rNdes7VNyHrsz",
    date_paid: "2019-08-16T08:12:00",
    date_paid_gmt: "2019-08-16T08:12:00",
    date_completed: null,
    date_completed_gmt: null,
    cart_hash: "",
    meta_data: [
      {
        id: 19570,
        key: "is_vat_exempt",
        value: "no"
      },
      {
        id: 19571,
        key: "_stripe_customer_id",
        value: "cus_FRdhLgzVSGTFet"
      },
      {
        id: 19572,
        key: "_stripe_source_id",
        value: "src_1EwkQSHmb92rNdesLoRRlkUW"
      },
      {
        id: 19581,
        key: "_subscription_renewal",
        value: "1197"
      },
      {
        id: 19584,
        key: "_stripe_charge_captured",
        value: "yes"
      },
      {
        id: 19585,
        key: "_stripe_fee",
        value: "1.03"
      },
      {
        id: 19586,
        key: "_stripe_net",
        value: "23.97"
      },
      {
        id: 19587,
        key: "_stripe_currency",
        value: "USD"
      }
    ],
    line_items: [
      {
        id: 10,
        name: "4 Deliveries a Month for only $20",
        product_id: 938,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "20.00",
        subtotal_tax: "0.00",
        total: "20.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 112,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "M&amp;M",
                price: 0,
                section: "5d23b5e4bc95c0.21408554",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "M&amp;M_2",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld",
                price: 0,
                section: "5d23b5e4bc95e9.64202710",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 113,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 114,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 115,
            key: "Choose 1 free candy bar per gift",
            value: "M&M"
          },
          {
            id: 116,
            key: "Add a Birthday Gift Card",
            value:
              "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld"
          },
          {
            id: 112,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "M&amp;M",
                price: 0,
                section: "5d23b5e4bc95c0.21408554",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "M&amp;M_2",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld",
                price: 0,
                section: "5d23b5e4bc95e9.64202710",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 113,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 114,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 115,
            key: "Choose 1 free candy bar per gift",
            value: "M&M"
          },
          {
            id: 116,
            key: "Add a Birthday Gift Card",
            value:
              "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld"
          },
          {
            id: 100000,
            key: "Choose 1 free candy bar per gift",
            value: "M&M"
          },
          {
            id: 100001,
            key: "Add a Birthday Gift Card",
            value:
              "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld"
          }
        ],
        sku: "",
        price: 20
      },
      {
        id: 11,
        name: "1 Delivery a Month for only $5",
        product_id: 935,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "5.00",
        subtotal_tax: "0.00",
        total: "5.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 126,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Skittles",
                price: 0,
                section: "5d23b756c6c877.78250726",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Skittles_4",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss",
                price: 0,
                section: "5d23b756c6c897.10105797",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 127,
            key: "_tm_epo_product_original_price",
            value: ["5"]
          },
          {
            id: 128,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 129,
            key: "Choose 1 free candy bar per gift",
            value: "Skittles"
          },
          {
            id: 130,
            key: "Add a Birthday Gift Card",
            value:
              "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss"
          },
          {
            id: 126,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Skittles",
                price: 0,
                section: "5d23b756c6c877.78250726",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Skittles_4",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss",
                price: 0,
                section: "5d23b756c6c897.10105797",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 127,
            key: "_tm_epo_product_original_price",
            value: ["5"]
          },
          {
            id: 128,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 129,
            key: "Choose 1 free candy bar per gift",
            value: "Skittles"
          },
          {
            id: 130,
            key: "Add a Birthday Gift Card",
            value:
              "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss"
          },
          {
            id: 100000,
            key: "Choose 1 free candy bar per gift",
            value: "Skittles"
          },
          {
            id: 100001,
            key: "Add a Birthday Gift Card",
            value:
              "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss"
          }
        ],
        sku: "",
        price: 5
      }
    ],
    tax_lines: [],
    shipping_lines: [],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    _links: {
      self: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders/1246"
        }
      ],
      collection: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders"
        }
      ],
      customer: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/customers/1"
        }
      ]
    }
  },
  {
    id: 1239,
    parent_id: 0,
    number: "1239",
    order_key: "wc_order_oFniwFe4KmmS6",
    created_via: "subscription",
    version: "3.6.4",
    status: "processing",
    currency: "USD",
    date_created: "2019-08-16T00:15:46",
    date_created_gmt: "2019-08-16T00:15:46",
    date_modified: "2019-08-16T00:15:49",
    date_modified_gmt: "2019-08-16T00:15:49",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "0.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "20.00",
    total_tax: "0.00",
    prices_include_tax: false,
    customer_id: 3,
    customer_ip_address: "68.100.50.19",
    customer_user_agent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1",
    customer_note: "",
    billing: {
      first_name: "Noor",
      last_name: "Illahi",
      company: "",
      address_1: "6789 Kenyon dr",
      address_2: "",
      city: "Alexandria",
      state: "WV",
      postcode: "22370",
      country: "US",
      email: "test@gmail.clm",
      phone: "5714514242"
    },
    shipping: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: ""
    },
    payment_method: "stripe",
    payment_method_title: "Credit Card (Stripe)",
    transaction_id: "ch_1F7t6eHmb92rNdesg1QKNNNk",
    date_paid: "2019-08-16T00:15:50",
    date_paid_gmt: "2019-08-16T00:15:50",
    date_completed: null,
    date_completed_gmt: null,
    cart_hash: "",
    meta_data: [
      {
        id: 19522,
        key: "is_vat_exempt",
        value: "no"
      },
      {
        id: 19523,
        key: "_stripe_customer_id",
        value: "cus_FRWgRBuYYyBY0o"
      },
      {
        id: 19524,
        key: "_stripe_source_id",
        value: "src_1EwddBHmb92rNdesTi695aDz"
      },
      {
        id: 19533,
        key: "_subscription_renewal",
        value: "1188"
      },
      {
        id: 19536,
        key: "_stripe_charge_captured",
        value: "yes"
      },
      {
        id: 19537,
        key: "_stripe_fee",
        value: "0.88"
      },
      {
        id: 19538,
        key: "_stripe_net",
        value: "19.12"
      },
      {
        id: 19539,
        key: "_stripe_currency",
        value: "USD"
      }
    ],
    line_items: [
      {
        id: 9,
        name: "4 Deliveries a Month for only $20",
        product_id: 938,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "20.00",
        subtotal_tax: "0.00",
        total: "20.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 98,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Twix",
                price: 0,
                section: "5d23b5e4bc95c0.21408554",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "Don&#039;t just count your years, make your years count.  -George Meredith",
                price: 0,
                section: "5d23b5e4bc95e9.64202710",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "Don&#039;t just count your years, make your years count.  -George Meredith_3",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 99,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 100,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 101,
            key: "Choose 1 free candy bar per gift",
            value: "Twix"
          },
          {
            id: 102,
            key: "Add a Birthday Gift Card",
            value:
              "Don&#039;t just count your years, make your years count.  -George Meredith"
          },
          {
            id: 98,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Twix",
                price: 0,
                section: "5d23b5e4bc95c0.21408554",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "Don&#039;t just count your years, make your years count.  -George Meredith",
                price: 0,
                section: "5d23b5e4bc95e9.64202710",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "Don&#039;t just count your years, make your years count.  -George Meredith_3",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 99,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 100,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 101,
            key: "Choose 1 free candy bar per gift",
            value: "Twix"
          },
          {
            id: 102,
            key: "Add a Birthday Gift Card",
            value:
              "Don&#039;t just count your years, make your years count.  -George Meredith"
          },
          {
            id: 100000,
            key: "Choose 1 free candy bar per gift",
            value: "Twix"
          },
          {
            id: 100001,
            key: "Add a Birthday Gift Card",
            value:
              "Don&#039;t just count your years, make your years count.  -George Meredith"
          }
        ],
        sku: "",
        price: 20
      }
    ],
    tax_lines: [],
    shipping_lines: [],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    _links: {
      self: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders/1239"
        }
      ],
      collection: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders"
        }
      ],
      customer: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/customers/3"
        }
      ]
    }
  },
  {
    id: 1196,
    parent_id: 0,
    number: "1196",
    order_key: "wc_order_wEy1ufRaZvVir",
    created_via: "checkout",
    version: "3.6.4",
    status: "processing",
    currency: "USD",
    date_created: "2019-07-16T06:46:15",
    date_created_gmt: "2019-07-16T06:46:15",
    date_modified: "2019-07-16T06:46:20",
    date_modified_gmt: "2019-07-16T06:46:20",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "0.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "25.00",
    total_tax: "0.00",
    prices_include_tax: false,
    customer_id: 1,
    customer_ip_address: "68.100.50.19",
    customer_user_agent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1",
    customer_note: "",
    billing: {
      first_name: "FName1",
      last_name: "LName1",
      company: "",
      address_1: "7171 hollow rd",
      address_2: "",
      city: "Alexandria",
      state: "CA",
      postcode: "22309",
      country: "US",
      email: "user1@user-mail.net",
      phone: "5712123131"
    },
    shipping: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: ""
    },
    payment_method: "stripe",
    payment_method_title: "Credit Card (Stripe)",
    transaction_id: "ch_1EwkQZHmb92rNdescsaSVEEn",
    date_paid: "2019-07-16T06:46:20",
    date_paid_gmt: "2019-07-16T06:46:20",
    date_completed: null,
    date_completed_gmt: null,
    cart_hash: "0ea81decee7dee33e30f55aa40007619",
    meta_data: [
      {
        id: 19389,
        key: "is_vat_exempt",
        value: "no"
      },
      {
        id: 19390,
        key: "_subscription_switch_data",
        value: []
      },
      {
        id: 19446,
        key: "_stripe_customer_id",
        value: "cus_FRdhLgzVSGTFet"
      },
      {
        id: 19447,
        key: "_stripe_source_id",
        value: "src_1EwkQSHmb92rNdesLoRRlkUW"
      },
      {
        id: 19450,
        key: "_stripe_intent_id",
        value: "pi_1EwkQYHmb92rNdesICC1jiTv"
      },
      {
        id: 19451,
        key: "_stripe_charge_captured",
        value: "yes"
      },
      {
        id: 19452,
        key: "_stripe_fee",
        value: "1.03"
      },
      {
        id: 19453,
        key: "_stripe_net",
        value: "23.97"
      },
      {
        id: 19454,
        key: "_stripe_currency",
        value: "USD"
      }
    ],
    line_items: [
      {
        id: 5,
        name: "4 Deliveries a Month for only $20",
        product_id: 938,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "20.00",
        subtotal_tax: "0.00",
        total: "20.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 50,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "M&amp;M",
                price: 0,
                section: "5d23b5e4bc95c0.21408554",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "M&amp;M_2",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld",
                price: 0,
                section: "5d23b5e4bc95e9.64202710",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 51,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 52,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 50,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "M&amp;M",
                price: 0,
                section: "5d23b5e4bc95c0.21408554",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "M&amp;M_2",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld",
                price: 0,
                section: "5d23b5e4bc95e9.64202710",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 51,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 52,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 100000,
            key: "Choose 1 free candy bar per gift",
            value: "M&M"
          },
          {
            id: 100001,
            key: "Add a Birthday Gift Card",
            value:
              "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld"
          }
        ],
        sku: "",
        price: 20
      },
      {
        id: 6,
        name: "1 Delivery a Month for only $5",
        product_id: 935,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "5.00",
        subtotal_tax: "0.00",
        total: "5.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 62,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Skittles",
                price: 0,
                section: "5d23b756c6c877.78250726",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Skittles_4",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss",
                price: 0,
                section: "5d23b756c6c897.10105797",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 63,
            key: "_tm_epo_product_original_price",
            value: ["5"]
          },
          {
            id: 64,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 62,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Skittles",
                price: 0,
                section: "5d23b756c6c877.78250726",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Skittles_4",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss",
                price: 0,
                section: "5d23b756c6c897.10105797",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 63,
            key: "_tm_epo_product_original_price",
            value: ["5"]
          },
          {
            id: 64,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 100000,
            key: "Choose 1 free candy bar per gift",
            value: "Skittles"
          },
          {
            id: 100001,
            key: "Add a Birthday Gift Card",
            value:
              "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss"
          }
        ],
        sku: "",
        price: 5
      }
    ],
    tax_lines: [],
    shipping_lines: [],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    _links: {
      self: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders/1196"
        }
      ],
      collection: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders"
        }
      ],
      customer: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/customers/1"
        }
      ]
    }
  },
  {
    id: 1187,
    parent_id: 0,
    number: "1187",
    order_key: "wc_order_BSbZyKNkMYqWz",
    created_via: "checkout",
    version: "3.6.4",
    status: "processing",
    currency: "USD",
    date_created: "2019-07-15T23:30:56",
    date_created_gmt: "2019-07-15T23:30:56",
    date_modified: "2019-07-15T23:31:02",
    date_modified_gmt: "2019-07-15T23:31:02",
    discount_total: "0.00",
    discount_tax: "0.00",
    shipping_total: "0.00",
    shipping_tax: "0.00",
    cart_tax: "0.00",
    total: "20.00",
    total_tax: "0.00",
    prices_include_tax: false,
    customer_id: 3,
    customer_ip_address: "68.100.50.19",
    customer_user_agent:
      "Mozilla/5.0 (iPhone; CPU iPhone OS 12_3_1 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/12.1.1 Mobile/15E148 Safari/604.1",
    customer_note: "",
    billing: {
      first_name: "Noor",
      last_name: "Illahi",
      company: "",
      address_1: "6789 Kenyon dr",
      address_2: "",
      city: "Alexandria",
      state: "WV",
      postcode: "22370",
      country: "US",
      email: "test@gmail.clm",
      phone: "5714514242"
    },
    shipping: {
      first_name: "",
      last_name: "",
      company: "",
      address_1: "",
      address_2: "",
      city: "",
      state: "",
      postcode: "",
      country: ""
    },
    payment_method: "stripe",
    payment_method_title: "Credit Card (Stripe)",
    transaction_id: "ch_1EwddJHmb92rNdes3zd0Vzr6",
    date_paid: "2019-07-15T23:31:02",
    date_paid_gmt: "2019-07-15T23:31:02",
    date_completed: null,
    date_completed_gmt: null,
    cart_hash: "23c5082a3192c827a4af175ebd810bb8",
    meta_data: [
      {
        id: 19280,
        key: "is_vat_exempt",
        value: "no"
      },
      {
        id: 19281,
        key: "_subscription_switch_data",
        value: []
      },
      {
        id: 19337,
        key: "_stripe_customer_id",
        value: "cus_FRWgRBuYYyBY0o"
      },
      {
        id: 19338,
        key: "_stripe_source_id",
        value: "src_1EwddBHmb92rNdesTi695aDz"
      },
      {
        id: 19341,
        key: "_stripe_intent_id",
        value: "pi_1EwddIHmb92rNdesgLjKwu4W"
      },
      {
        id: 19342,
        key: "_stripe_charge_captured",
        value: "yes"
      },
      {
        id: 19343,
        key: "_stripe_fee",
        value: "0.88"
      },
      {
        id: 19344,
        key: "_stripe_net",
        value: "19.12"
      },
      {
        id: 19345,
        key: "_stripe_currency",
        value: "USD"
      }
    ],
    line_items: [
      {
        id: 3,
        name: "4 Deliveries a Month for only $20",
        product_id: 938,
        variation_id: 0,
        quantity: 1,
        tax_class: "",
        subtotal: "20.00",
        subtotal_tax: "0.00",
        total: "20.00",
        total_tax: "0.00",
        taxes: [],
        meta_data: [
          {
            id: 26,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Twix",
                price: 0,
                section: "5d23b5e4bc95c0.21408554",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "Don&#039;t just count your years, make your years count.  -George Meredith",
                price: 0,
                section: "5d23b5e4bc95e9.64202710",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "Don&#039;t just count your years, make your years count.  -George Meredith_3",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 27,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 28,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 26,
            key: "_tmcartepo_data",
            value: [
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    Butterfinger_0: [""],
                    Twix_1: [""],
                    "M&amp;M_2": [""],
                    Snickers_3: [""],
                    Skittles_4: [""],
                    "Reese’s_5": [""],
                    "M&amp;M Peanut_6": [""],
                    Milkyway_7: [""],
                    KitKat_8: [""],
                    "Hershey’s_9": [""],
                    "3 Musketeers_10": [""]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Choose 1 free candy bar per gift",
                value: "Twix",
                price: 0,
                section: "5d23b5e4bc95c0.21408554",
                section_label: "Choose 1 free candy bar per gift",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key: "Twix_1",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              },
              {
                mode: "builder",
                cssclass: "",
                hidelabelincart: "",
                hidevalueincart: "",
                hidelabelinorder: "",
                hidevalueinorder: "",
                element: {
                  type: "select",
                  rules_type: {
                    "There are two great days in a person&#039;s life - the day we are born and the day we discover why.  -William Barclay_0": [
                      ""
                    ],
                    "Today you are you! That is truer than true! There is no one alive who is you-er than you!  -Dr. Seuss_1": [
                      ""
                    ],
                    "When you wake up every day, it&#039;s like a new birthday: it&#039;s a new chance to be great again and make great decisions.  -Poo Bear_2": [
                      ""
                    ],
                    "Don&#039;t just count your years, make your years count.  -George Meredith_3": [
                      ""
                    ],
                    "You know you&#039;re getting old when you get that one candle on the cake. It&#039;s like, &#039;See if you can blow this out. -Jerry Seinfeld_4": [
                      ""
                    ]
                  },
                  _: {
                    price_type: ""
                  }
                },
                name: "Add a Birthday Gift Card",
                value:
                  "Don&#039;t just count your years, make your years count.  -George Meredith",
                price: 0,
                section: "5d23b5e4bc95e9.64202710",
                section_label: "Add a Birthday Gift Card",
                percentcurrenttotal: 0,
                currencies: [],
                price_per_currency: {
                  USD: ""
                },
                quantity: 1,
                multiple: "1",
                key:
                  "Don&#039;t just count your years, make your years count.  -George Meredith_3",
                use_images: "",
                use_colors: "",
                changes_product_image: "",
                imagesp: "",
                images: "",
                color: ""
              }
            ]
          },
          {
            id: 27,
            key: "_tm_epo_product_original_price",
            value: ["20"]
          },
          {
            id: 28,
            key: "_tm_epo",
            value: [1]
          },
          {
            id: 100000,
            key: "Choose 1 free candy bar per gift",
            value: "Twix"
          },
          {
            id: 100001,
            key: "Add a Birthday Gift Card",
            value:
              "Don&#039;t just count your years, make your years count.  -George Meredith"
          }
        ],
        sku: "",
        price: 20
      }
    ],
    tax_lines: [],
    shipping_lines: [],
    fee_lines: [],
    coupon_lines: [],
    refunds: [],
    _links: {
      self: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders/1187"
        }
      ],
      collection: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/orders"
        }
      ],
      customer: [
        {
          href: "https://telebardelivery.com/wp-json/wc/v3/customers/3"
        }
      ]
    }
  }
];
