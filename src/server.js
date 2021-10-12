const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

let data = require('./keys.json')
const { Client, Environment, ApiError } = require('square');

const client = new Client({
  environment: Environment.Production,
  accessToken: data.token
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

function cartItems(catalogData) {
  arr = catalogData.map(d => {
    return {
      'name': d.item_data.name,
      'visibility': d.item_data.ecom_visibility,
      'description': d.item_data.description,
      //image returns an Array with the urls or undefined if no images
      'image': d.item_data.ecom_image_uris,
      'price': d.item_data.variations[0].item_variation_data.price_money.amount/100,
      'quantity': 0
      }
    }
  )
  // return arr.filter(d => d.item_data.ecom_visibility == 'VISIBLE');
  return arr
}

app.get('/express_backend_catalog_items', async (req, res) => {
  try {
    // var response
    var response = cartItems(
      await JSON.parse(
        (await client.catalogApi.searchCatalogItems({})).body
      ).items
    );

    // console.log(response)
    console.log("Sent catalog data")
  }
  catch(error) {
    console.log(error);
    response = {"error" : "PROBLEEMMMMM"}
  }
  res.send(response)
});