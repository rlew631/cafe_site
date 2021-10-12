The app is run by opening a terminal instance and running `$ node src/server.js` and `$ npm start` in a seperate terminal. This can be streamlined by modifying the scripts in package.json. See: https://rajputankit22.medium.com/run-a-react-app-with-an-express-server-5251c7537292

__To-do:__
- find something that works better than the global items or merge the cart/order page so they share the same state information
- Gotta ditch all the mfg site stuff and update to do cafe site stuff.
- talk to henry about design stuff. Maybe have the coffee have a "stats" card or some other gimmicky thing
- figure out global hooks for item inventory count, price summation etc. going to need a state or status for each item in the cart. could also have all items present but hidden if qty is 0
- cart shouldn't overlap menu items when resizing window smaller
- put in a function that maps `itemData` to a series of cards/buttons
  - after that figure out how to update the quantities individually from the "add to cart" prompt and hide them if qty is 0

fix the issue where you can remove items from the cart when qty is zero and it prevents you from removing other items. This should probably use the global variables and load them if not available. This will help with overwriting the quantity values when switching between pages.

