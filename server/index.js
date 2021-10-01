// see this link for square + firebase + express: https://dev.to/ting682/e-commerce-payments-using-firebase-nodejs-and-square-api-40jn
// see this link too: https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/

// const cors = require('cors')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;

// square api stuff
let data = require('../keys.json')
const { Client, Environment, ApiError } = require('square');

//initializing the square api client
const client = new Client({
  environment: Environment.Production,
  accessToken: data.token
})

// This displays message that the server running and listening to
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// This gets the catalog items from square
// async function getItems(){
//   try {
//     var response
//     response = await client.catalogApi.searchCatalogItems({});
//     // response = JSON.parse(response.body).items
//     console.log(response);
//     return response;

//   } catch(error) {
//     console.log(error);
//     return {"error" : "PROBLEEMMMMM"}
//   }
// }

// create a GET route
// app.get('/express_backend', (req, res) => {
//   // default message
//   // res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });

//   // response from square
//   const items = await getItems()
//   console.log(items)
//   res.send(items);
// });

// https://masteringjs.io/tutorials/express/promises
// https://stackoverflow.com/questions/66301281/how-to-get-the-return-value-of-a-async-function-that-returns-a-promise
// this one works
// app.get('/express_backend_catalog_items', async (req, res) => {
//   try {
//     var response
//     response = await client.catalogApi.searchCatalogItems({});
//     // console.log(response);
//     console.log("sent catalog data")
//   } catch(error) {
//     console.log(error);
//     response = {"error" : "PROBLEEMMMMM"}
//   }
//   res.send(JSON.parse(response.body).items)
// });

app.get('/express_backend_catalog_items', async (req, res) => {
  try {
    var response
    response = await JSON.parse((await client.catalogApi.searchCatalogItems({})).body).items;
    // console.log(response);
    console.log("sent catalog data")
  } catch(error) {
    console.log(error);
    response = {"error" : "PROBLEEMMMMM"}
  }
  res.send(response)
});