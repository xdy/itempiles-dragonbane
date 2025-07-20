Hooks.once("item-piles-ready", async () => {
  let gold = `{#} ${(String(game.i18n.localize("DoD.currency.gold")).toLowerCase())}`;
  let silver = `{#} ${(String(game.i18n.localize("DoD.currency.silver")).toLowerCase())}`;
  let copper = `{#} ${(String(game.i18n.localize("DoD.currency.copper")).toLowerCase())}`;
  let integration = {
    // The actor class type is the type of actor that will be used for the default item pile actor that is created on first item drop.
    "ACTOR_CLASS_TYPE": "character",

    // The item class type is the type of item that will be used for the default loot item
    "ITEM_CLASS_LOOT_TYPE": "",

    // The item class type is the type of item that will be used for the default weapon item
    "ITEM_CLASS_WEAPON_TYPE": "weapon",

    // The item class type is the type of item that will be used for the default equipment item
    "ITEM_CLASS_EQUIPMENT_TYPE": "item",

    // The item quantity attribute is the path to the attribute on items that denote how many of that item that exists
    "ITEM_QUANTITY_ATTRIBUTE": "system.quantity",

    // The item price attribute is the path to the attribute on each item that determine how much it costs
    "ITEM_PRICE_ATTRIBUTE": "system.cost",

    // Item filters actively remove items from the item pile inventory UI that users cannot loot, such as spells, feats, and classes
    "ITEM_FILTERS": [
      {
        "path": "type",
        "filters": "ability,kin,profession,skill,spell"
      }
    ],

    "PILE_DEFAULTS": {
      merchantColumns: [{
        label: "Rarity",
        path: "system.supply",
        formatting: "{#}",
        buying: true,
        selling: true,
        mapping: {
          common: "DoD.supplyTypes.common",
          uncommon: "DoD.supplyTypes.uncommon",
          rare: "DoD.supplyTypes.rare",
          unique: "DoD.supplyTypes.unique"
        }
      }]
    },

    // Item similarities determines how item piles detect similarities and differences in the system
    "ITEM_SIMILARITIES": ["name", "type"],

    // Currencies in item piles is a versatile system that can accept actor attributes (a number field on the actor's sheet) or items (actual items in their inventory)
    // In the case of attributes, the path is relative to the "actor.system"
    // In the case of items, it is recommended you export the item with `.toObject()` and strip out any module data
    "CURRENCIES": [
      {
        type: "attribute",
        name: "DoD.currency.gold",
        img: "icons/commodities/currency/coin-embossed-crown-gold.webp",
        abbreviation: gold,
        data: {
          path: "system.currency.gc",
        },
        primary: true,
        exchangeRate: 1
      },
      {
        type: "attribute",
        name: "DoD.currency.silver",
        img: "icons/commodities/currency/coin-engraved-moon-silver.webp",
        abbreviation: silver,
        data: {
          path: "system.currency.sc",
        },
        primary: false,
        exchangeRate: 0.1
      },
      {
        type: "attribute",
        name: "DoD.currency.copper",
        img: "icons/commodities/currency/coin-engraved-waves-copper.webp",
        abbreviation: copper,
        data: {
          path: "system.currency.cc",
        },
        primary: false,
        exchangeRate: 0.01
      }
    ],

    "VAULT_STYLES": [
      {
        path: "system.supply",
        value: "unique",
        styling: {
          "box-shadow": "inset 0px 0px 7px 0px rgba(255,191,0,1)"
        }
      },
      {
        path: "system.supply",
        value: "rare",
        styling: {
          "box-shadow": "inset 0px 0px 7px 0px rgba(0,136,255,1)"
        }
      },
      {
        path: "system.rarity",
        value: "uncommon",
        styling: {
          "box-shadow": "inset 0px 0px 7px 0px rgba(0,255,9,1)"
        }
      }
    ],

    // "SYSTEM_HOOKS": () => {
    // },

    // This function is an optional system handler that specifically transforms an item when it is added to actors
    // "ITEM_TRANSFORMER": async (_itemData) => {
    // },

    // "PRICE_MODIFIER_TRANSFORMER": ({
    //                                  _buyPriceModifier,
    //                                  _sellPriceModifier,
    //                                  _actor = false,
    //                                  _actorPriceModifiers = []
    //                                } = {}) => {
    // },

    // "ITEM_TYPE_HANDLERS": {},
    //
    // This function is an optional system handler that specifically transforms an item's price into a more unified numeric format
    // "ITEM_COST_TRANSFORMER": (_item, _currencies) => {
    // },
  };
  game.itempiles.API.addSystemIntegration(integration);
});
