The app is run by opening a terminal instance and running `$ node server/index.js` and `$ npm start` in a seperate terminal. This can be streamlined by modifying the scripts in package.json. See: https://rajputankit22.medium.com/run-a-react-app-with-an-express-server-5251c7537292

The code for calling the square API is currently in `server/index.js`

__To-do:__
- look at [this](https://developer.squareup.com/reference/square/objects/CatalogImage) for getting the product images along with the current query for the inventory
- Align the price on the cards on the bottom
- Gotta ditch all the mfg site stuff and update to do cafe site stuff.
- Add firebase and deploy... see [this link](https://dev.to/ting682/e-commerce-payments-using-firebase-nodejs-and-square-api-40jn)
- talk to henry about design stuff. Maybe have the coffee have a "stats" card or some other gimmicky thing
- add "isloading" to the top of the order page. see [this vid](https://youtu.be/sfmL6bGbiN8?t=976)
- figure out global hooks for item inventory count, price summation etc. going to need a state or status for each item in the cart. could also have all items present but hidden if qty is 0
- header is eclipsed by order items when scrolling down
- cart needs to stay fixed in top position when scrolling down

