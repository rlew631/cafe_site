import {createUseStyles} from 'react-jss';
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

function Order() {
  const classes = useStyles();
  return (
    <div className={classes.main}>
      This is supposed to show the response from the catalog API: 
      {}
    </div>
  );
}

export default Order;