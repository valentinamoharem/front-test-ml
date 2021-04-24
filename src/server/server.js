const express = require('express');
const cors = require('cors');
const fetch = require("node-fetch");

const app = express();
const PORT = 3001;

app.use(cors({
  origin: 'http://localhost:3000'
}));

app.get("/", (req, res) => res.send("Server successfully connected"));

// ENDPOINT 1 
// URL: /items?search=
// REQUEST: /api/items?q=​:query 
// API: https://api.mercadolibre.com/sites/MLA/search?q=​:query

app.get("/api/items", async function (req, res) {
  const q = req.query.q;

  const api_url = encodeURI(`https://api.mercadolibre.com/sites/MLA/search?q=​` + q);
  const fetch_response = await fetch(api_url);
  const json = await fetch_response.json();

  const items = [];
  json.results.slice(0,5).map(r => {
    items.push(
        {
          "id": r.id,
          "title": r.title,
          "price": {
            "currency": r.currency_id,
            "amount": r.price,
            "decimals": r.price // fix
          },
          "picture": r.thumbnail,
          "condition": r.condition,
          "free_shipping": r.shipping.free_shipping
        }
    )
  })

  const custom_response = {
    author: {
      name: "Valentina",
      lastname: "Moscato"
    },
    categories: json.available_filters["category"],
    items: items
  }

  res.send(custom_response);
})

// ENDPOINT 2
// URL: /items/:id 
// REQUEST: /api/items/​:id 
// APIs: https://api.mercadolibre.com/items/​:id / https://api.mercadolibre.com/items/​:id​/description

app.get("/api/items/:id", async function (req, res) {
  const id = req.params.id;
  const api_url = encodeURI(`https://api.mercadolibre.com/items/​` + id);
  const api_url_description = encodeURI(`https://api.mercadolibre.com/items/​` + id + `/description`);
  const fetch_response = await fetch(api_url);
  const fetch_response_description = await fetch(api_url_description);
  const json = await fetch_response.json();
  const json_description = await fetch_response_description.json();

  const custom_response = {
    author: {
      name: "Valentina",
      lastname: "Moscato"
    },
    categories: json.available_filters["category"],
    item: {
        "id": json.id,
        "title": json.title,
        "price": {
        "currency": json.currency_id,
        "amount": json.price,
        "decimals": json.price, // fix
        },
        "picture": json.pictures[0].url,
        "condition": json.condition,
        "free_shipping": json.shipping.free_methods[0].rule.free_shipping_flag,
        "sold_quantity": json.sold_quantity,
        "description": json_description.description,
      }
  }

  res.send(custom_response);
})


app.listen(PORT, () => console.log(`Server listening on ${PORT}`));