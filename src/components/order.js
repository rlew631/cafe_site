import { Component,
  createContext,
  // useContext
} from 'react';
import {
  Container,
  Row,
  Col
} from 'reactstrap';
import { makeCardsMUI } from './ordering';

class Order extends Component {
  state = {
      data: null
    };
  
    // fetching the GET route from the Express server which matches the GET route from server.js
  callBackendAPI = async () => {
    const response = await fetch('/express_backend_catalog_items');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message) 
    }
    console.log(body)
    return body;
  };

  componentDidMount = async () => {
    this.callBackendAPI()
    // import and pass the square data
    .then(res => {
      this.setState({ data: res })
      global.itemData = res // this can be accessed across files
    })
    .catch(err => console.log(err));
  }
  // main part of page
  render() {
    return (
      <Container className="main">
        <Row>
          {/* {makeCardsMUI(this.state.data)} */}
          {makeCardsMUI(global.itemData)}
          {/* {makeCardsMUI(this.state.data)} */}
        </Row>
      </Container>
    );
  }
}

export default Order;