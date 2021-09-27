const express = require('express');
const app = express();
const port = 3001;
// square api stuff
import keys from "./keys.json"
import { Client, Environment } from 'square'

const client = new Client({
  environment: Environment.Sandbox,
  // accessToken: process.env.SQUARE_ACCESS_TOKEN,
  accessToken: keys.token
})

async function getItems(){
  try {
    var response
    // response.header("Access-Control-Allow-Origin", "*");
    // response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response = await client.catalogApi.searchCatalogItems({});
    response = await response.json()
    console.log(response);
    return response;
    // return response.data;

  } catch(error) {
    console.log(error);
    return {"error" : "PROBLEEMMMMM"}
  }
}

var req = getItems()
req.headers({
  "Access-Control-Allow-Origin" : "*",
  "Access-Control-Allow-Headers" : "Origin, X-Requested-With, Content-Type, Accept"});

