// see this link for square + firebase + express: https://dev.to/ting682/e-commerce-payments-using-firebase-nodejs-and-square-api-40jn
// see this link too: https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/

const cors = require('cors')
const express = require('express');
const app = express();
// const port = 3001;
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const { Client, Environment, ApiError } = require('square');
// import { v4 as uuidv4 } from 'uuid'
// square api stuff
import keys from "../src/keys.json"
import { Client, Environment } from 'square'

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// This displays message that the server running and listening to
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' }); //Line 10
});

const client = new Client({
  environment: Environment.Sandbox,
  // accessToken: process.env.SQUARE_ACCESS_TOKEN,
  accessToken: keys.token
})

async function getItems(){
  // const request = unirest("GET", "https://twinword-word-associations-v1.p.rapidapi.com/associations/");
  // request.query({ "entry": req.params.word });
  const request = await client.catalogApi.searchCatalogItems({});
  request.headers({
    "Access-Control-Allow-Origin" : "*",
    "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"
  });
  request.end(function (response) {
    if (response.error) throw new Error(response.error);
    response = await response.json();
    return response;
  });
};













// async function getItems(){
//   try {
//     var response
//     // response.header("Access-Control-Allow-Origin", "*");
//     // response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
//     response = await client.catalogApi.searchCatalogItems({});
//     response = await response.json()
//     console.log(response);
//     return response;
//     // return response.data;

//   } catch(error) {
//     console.log(error);
//     return {"error" : "PROBLEEMMMMM"}
//   }
// }

// var req = getItems()
// req.headers({
//   "Access-Control-Allow-Origin" : "*",
//   "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"});

