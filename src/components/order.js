import {createUseStyles} from 'react-jss';
import { Client, Environment } from 'square'
// import {
//   Card,
//   CardImg,
//   CardText,
//   CardBody,
//   CardTitle,
//   // CardSubtitle,
//   Container,
//   Row,
//   Col
// } from 'reactstrap';
import keys from "../keys.json"

const useStyles = createUseStyles({
  main: {
    paddingTop: 90
  },
  cardCol: {
    paddingBottom: "2em"
  },
  card: {
    height:"100%",
  },
  services: {
    textAlign: 'left'
  },
  statement: {
    textAlign: 'left'
  }
});

const client = new Client({
  environment: Environment.Sandbox,
  // accessToken: process.env.SQUARE_ACCESS_TOKEN,
  accessToken: keys.token
})


async function getItems(){
  try {
    var response
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    response = await client.catalogApi.searchCatalogItems({});

    // console.log(response.result);
    
    return response.data;
  } catch(error) {
    return {"error" : "PROBLEEMMMMM"}
    // console.log(error);
  }
}
let response = getItems()

// try {
//   const response = await client.catalogApi.searchCatalogItems({});

//   console.log(response.result);
// } catch(error) {
//   console.log(error);
// }

function Order() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      This is supposed to show the response from the catalog API: 
      {JSON.stringify(response, null, 2) }
    </div>
  );
}

export default Order;