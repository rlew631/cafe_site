The app is run by opening a terminal instance and running `$ node src/server.js` and `$ npm start` in a seperate terminal. This can be streamlined by modifying the scripts in package.json. See: https://rajputankit22.medium.com/run-a-react-app-with-an-express-server-5251c7537292

__To-do:__
- look at [this](https://developer.squareup.com/reference/square/objects/CatalogImage) for getting the product images along with the current query for the inventory
- Align the price on the cards on the bottom
- Gotta ditch all the mfg site stuff and update to do cafe site stuff.
- Add firebase and deploy... see [this link](https://dev.to/ting682/e-commerce-payments-using-firebase-nodejs-and-square-api-40jn)
- talk to henry about design stuff. Maybe have the coffee have a "stats" card or some other gimmicky thing
- add "isloading" to the top of the order page. see [this vid](https://youtu.be/sfmL6bGbiN8?t=976)
- figure out global hooks for item inventory count, price summation etc. going to need a state or status for each item in the cart. could also have all items present but hidden if qty is 0
- cart shouldn't overlap menu items when resizing window smaller
- put in a function that maps `itemData` to a series of cards/buttons
  - after that figure out how to update the quantities individually from the "add to cart" prompt and hide them if qty is 0

figure out how to get the "add to cart" buttons on the order page working in the cart
fix the issue where you can remove items from the cart when qty is zero and it prevents you from removing other items
figure out how to change the state so it hides the items when qty is zero (after making it so you can add the items from the home page)


