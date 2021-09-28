// see this link for square + firebase + express: https://dev.to/ting682/e-commerce-payments-using-firebase-nodejs-and-square-api-40jn
// see this link too: https://www.section.io/engineering-education/how-to-setup-nodejs-express-for-react/

const cors = require('cors')
const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const bodyParser = require('body-parser');
// import { v4 as uuidv4 } from 'uuid'
// square api stuff
let data = require('../keys.json')
const { Client, Environment, ApiError } = require('square');
// import { Client, Environment } from 'square'

//initializing the square api client
const client = new Client({
  // environment: Environment.Sandbox,
  environment: Environment.Production,
  accessToken: data.token
})

async function getItems(){
  try {
    var response
    // doesn't seem like these header things are needed now that express is working
    // response.header("Access-Control-Allow-Origin", "*");
    // response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response = await client.catalogApi.searchCatalogItems({});
    response = JSON.parse(response.body).items
    console.log(response);
    return response;

  } catch(error) {
    console.log(error);
    return {"error" : "PROBLEEMMMMM"}
  }
}

items = getItems()

// not sure about this section from some sample code
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// This displays message that the server running and listening to
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});

// create a GET route
app.get('/express_backend', (req, res) => { //Line 9
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
  // res.send({ express: items });
});















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

