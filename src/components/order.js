import {createUseStyles} from 'react-jss';
import { Client, Environment } from 'square'
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  // CardSubtitle,
  Container,
  Row,
  Col
} from 'reactstrap';

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
  accessToken: process.env.SQUARE_ACCESS_TOKEN,
})

// try {
//   const response = await client.catalogApi.searchCatalogItems({});

//   console.log(response.result);
// } catch(error) {
//   console.log(error);
// }

function Order() {
  const classes = useStyles();
  return (
    <Container className={classes.main}>
      
      
    </Container>
  );
}

export default Order;