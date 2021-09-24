import React from "react";
import {createUseStyles} from 'react-jss';
import {Button, Container, Row, Col } from "reactstrap";
import copy from '../copy.json';

const useStyles = createUseStyles({
  main: {
    paddingTop: 90
  },
  info: {
    "align-self": "center",
    flexWrap: "nowrap",
    paddingBottom: "0.5em"
  },
  colKey: {
    textAlign: 'left',
    flexBasis: "40%",
    flexGrow: 0
  },
  colValue: {
    textAlign: 'left',
  }
});

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: ""
    };
  }

  render() {
    const { status } = this.state;
    return (
      <section className="paralax-mf footer-paralax bg-image sect-mt4 route">
        <h2>Send A Message</h2>
        <div>
          <form
            action="https://formspree.io/f/xvodwvwz"
            method="POST"
            className="contactForm"
            onSubmit={this.submitForm}
          >
            <Row>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Your Name"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 4 chars"
                  />
                  <div className="validation"></div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control"
                    name="_replyto"
                    id="email"
                    placeholder="Your Email"
                    data-rule="email"
                    data-msg="Please enter a valid email"
                  />
                  <div className="validation"></div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control"
                    name="_subject"
                    id="subject"
                    placeholder="Subject"
                    data-rule="minlen:4"
                    data-msg="Please enter at least 8 chars"
                  />
                  <div className="validation"></div>
                </div>
              </div>
              <div className="col-md-12 mb-3">
                <div className="form-group">
                  <textarea
                    className="form-control"
                    name="message"
                    rows="5"
                    data-rule="required"
                    data-msg="Please write something for us"
                    placeholder="Message"
                  ></textarea>
                  <div className="validation"></div>
                </div>
              </div>
              <Col md="12">
                {status === "SUCCESS" ? <Button type="submit" className="button button-a button-big button-rouded">Your message has been sent!</Button> : <Button type="submitted" className="button button-a button-big button-rouded">Send Message</Button>}
                {status === "ERROR" && <Button type="failed" className="button button-a button-big button-rouded">There was an error, please contact us at Shop@getpressta.com</Button>}
              </Col>
            </Row>
          </form>
        </div>
      </section>
    );
  }
  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}

function Contact() {
  const classes = useStyles();
  return(
    <Container className={classes.main}>
      <Row>
        <Col lg={{size: 4, offset: 1}} md="7" className={classes.info}>
          <h2>Contact Us</h2>
          <Row className={classes.info}>
            <Col className={classes.colKey}>Email: </Col>
            <Col className={classes.colValue}>{copy.Contact.Email}</Col>
          </Row>
          <Row className={classes.info}>
            <Col className={classes.colKey}>Phone: </Col>
            <Col className={classes.colValue}>{copy.Contact.Phone}</Col>
          </Row>
          <Row className={classes.info}>
            <Col className={classes.colKey}>Address: </Col>
            <Col className={classes.colValue}>
              73 Converse St.<br/>San Francisco,<br/>CA 94103
            </Col>
          </Row>
        </Col>
        <Col lg="6" md="5">
          <ContactForm />
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;