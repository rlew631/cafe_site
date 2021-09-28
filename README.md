The code for calling the square API is currently in `server/index_old.js`
look at this for getting the product images along with the current query for the inventory:
https://developer.squareup.com/reference/square/objects/CatalogImage

Gotta ditch all the mfg site stuff and update to do cafe site stuff.

Add firebase and deploy... see [this link](https://dev.to/ting682/e-commerce-payments-using-firebase-nodejs-and-square-api-40jn)

The app is run by opening a terminal instance and running `$ node server/index.js` and `$ npm start` in a seperate terminal. This can be streamlined by modifying the scripts in package.json. See: https://rajputankit22.medium.com/run-a-react-app-with-an-express-server-5251c7537292
