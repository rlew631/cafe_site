import React, { Component } from 'react';
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

function makeCards(data){
  // console.log(data);
  return(data.map((d) =>
    <li>{d}</li>
  ));
}

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
        This is supposed to show the response from the catalog API: 
        <p className="App-intro">{JSON.stringify(this.state.data)}</p>
      </div>
    );
  }
}

export default Order;