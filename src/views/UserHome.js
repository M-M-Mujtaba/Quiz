import { logout } from "Provider/Auth";
import React, { Component } from "react";





import {
  Container,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";

import { Link } from "react-router-dom";
import logo from "../assets/img/brand/logo.png";

export class UserHome extends Component {

  render() {
    return (
          <Container fluid className="user-bg">
            <Row className="justify-content-center pt-3">
              <img src={logo} className="user-logo" alt="logo"></img>

              <div
                className="user-logout"
                onClick={() => {
                  logout();
                  window.location.href = "/";
                }}
              >
                <i className="ni ni-button-power text-danger float-left m-2"></i>
                <h2 className="float-left d-none d-sm-block">Logout</h2>
              </div>
            </Row>


                <Row className="justify-content-md-center">
                  <Col lg="10" md="8" xs="6">
                    <FormGroup>
                      <Label for="exampleSelect">Class Name</Label>
                      <Input
                        type="select"
                        
                        name="select"
                        id="exampleSelect"
                      >
                       
                          <option value="Math">
                            Math
                          </option>
                          <option value="Science">
                            Science
                          </option>
                          <option value="Chem">
                            Chem
                          </option>
                          <option value="Bio">
                            Bio
                          </option>

                      </Input>
                    </FormGroup>
                  </Col>
                  <Col className="my-auto" lg="2" md="4" xs="6">

                      <Button
                        color="default"
                        type="button"
                        className="mt-1"
                        onClick={this.fetchDetails}
                      >
                        Fetch Class
                      </Button>
                  </Col>
                </Row>

                <Row >
                  <Col lg="4" xl ="3" md="6" xs="12">
        <Card className="m-2">
          <CardImg
            alt="..."
            src= "https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png"          
            top
          />
          <CardBody>
            <CardTitle>Quiz 1</CardTitle>
            <CardText>
                <h3>7/10</h3>
            </CardText>

          </CardBody>
        </Card>
        </Col>

        <Col lg="4" xl ="3" md="6" xs="12">
        <Card className="m-2">
          <CardImg
            alt="..."
            src= "https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png"          
            top
          />
          <CardBody>
            <CardTitle>Quiz 2</CardTitle>
            <CardText>
                Timing:   19/12 7: 30 pm<br></br>
                Duration: 30 min

            </CardText>
            <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}

            >
                <Link to="/User/attempt">Attempt</Link>
            </Button>
          </CardBody>
        </Card>
        </Col>

        <Col lg="4" xl ="3" md="6" xs="12">
        <Card className="m-2">
          <CardImg
            alt="..."
            src= "https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png"          
            top
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
            Timing:   27/12 7: 30 pm<br></br>
            Duration: 30 min
            </CardText>
            <Button
              disabled
              color="secondary"
              href="#pablo"

              onClick={e => e.preventDefault()}
            >
              Attempt
            </Button>
          </CardBody>
        </Card>
        </Col>
      </Row>

          </Container>

    );
  }
}

export default UserHome;
