import React, { Component } from 'react';
import {createUseStyles} from 'react-jss';
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


// const useStyles = createUseStyles({
//   main: {
//     paddingTop: 90
//   },
//   cardCol: {
//     paddingBottom: "2em"
//   },
//   card: {
//     height:"100%",
//   },
//   services: {
//     textAlign: 'left'
//   },
//   statement: {
//     textAlign: 'left'
//   }
// });

// const makeCards = () => {
//   // console.log(data);
//   return(
//     data.map((d) =>
//       <Card>
//         <CardBody>
//           <CardTitle tag="h3">d.item_data.name</CardTitle>
//           <CardText>
//             {d.item_data.description}
//             < br />
//             {d.item_data.variations.item_variation_data.price_money.amount}
//           </CardText>
//         </CardBody>
//       </Card>
//     )
//   );
// }

// renderItems(arr) {
//   if(arr){
//         return arr.map(({id, name}) => {
//              return (
//                  <li className="list-group-item"
//             key={id}
//             onClick={() => this.props.onItemSelected(id)}>
//                     {name}
//                 </li>
//             );
//         });
//      }
//   }

function makeCards(arr){ if(arr){
    return( arr.map((d) => {
      // console.log(d.item_data.variations.item_variation_data)
      return(
        <Card>
          <CardBody>
            <CardTitle tag="h3">{d.item_data.name}</CardTitle>
            <CardText>
              {d.item_data.description}
              < br />
              {/* {d.item_data.variations.item_variation_data.price_money.amount} */}
            </CardText>
          </CardBody>
        </Card>
      );
    })
  )
}};

class Order extends Component {
  state = {
      data: null
    };
  
  componentDidMount() {
    this.callBackendAPI()
      // this one works importing the square data
      .then(res => this.setState({ data: res }))

      //this one works logging the square data
      // .then(res => console.log(res))

      .catch(err => console.log(err));
  }
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    return body;
  };

  // const classes = useStyles();
  //main part of the app
  render() {
    return (
      <div>
        <br /><br /><br /><br /><br /><br />
        From the catalog API: 
        {makeCards(this.state.data)}
      </div>
    );
  }
}

export default Order;