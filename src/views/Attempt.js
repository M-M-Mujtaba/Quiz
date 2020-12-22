import React, { Component } from 'react'
import { Container } from "reactstrap";
import Header from "components/Headers/Header.js";
import logo from "../assets/img/brand/logo.png";
import { logout } from "Provider/Auth";
import{
    Button,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    Row,
    Col,
    Form,
    FormGroup,
    Input,
    button
  } from "reactstrap"

export class Attempt extends React.Component {
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
            <Form>

            <Row>
                  Q1 how are you doing?      </Row>
                  <Row>
                          <Col lg="2">
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="customRadio1"
                                  name="custom-radio-1"
                                  type="radio"
                                />
                                <label className="custom-control-label" htmlFor="customRadio1">
                                  Not so Great
                                </label>
                                </div>
                            </Col>
                            <Col lg="2">
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  defaultChecked
                                  id="customRadio2"
                                  name="custom-radio-1"
                                  type="radio"
                                />     
                                <label className="custom-control-label" htmlFor="customRadio2">
                                  May Be a little Great
                                </label>
                              </div>      
                    </Col>
                </Row>
                <Row>
                <Col lg="2">
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="customRadio3"
                                  name="custom-radio-1"
                                  type="radio"
                                />
                                <label className="custom-control-label" htmlFor="customRadio3">
                                  Really Great(Lie)
                                </label>
                                </div>
                            </Col>
                            <Col lg="2">
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  defaultChecked
                                  id="customRadio4"
                                  name="custom-radio-1"
                                  type="radio"
                                />     
                                <label className="custom-control-label" htmlFor="customRadio4">
                                  Lifen't
                                </label>
                              </div>      
                    </Col>




                </Row>
                <Row>
                  Q1 How do you want to go out?      </Row>
                  <Row>
                      <Input
                          id="exampleFormControlTextarea1"
                          placeholder="Answer ..."
                          rows="3"
                          type="textarea"
                        />
                        </Row>
            <Row>
                  Q1 Draw your life as a form of art      </Row>
                  <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Upload file
                          </Button>
                          <Row></Row>
                          <br></br> <br></br> <br></br>
                          <Row>
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Submit Quiz
                          </Button>
                          </Row>
          </Form>
          </Container>
        )
    }
}

export default Attempt
