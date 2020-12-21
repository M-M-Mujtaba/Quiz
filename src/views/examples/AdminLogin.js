import React, { Component } from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  Spinner,
  FormGroup,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Col,
} from "reactstrap";
import { login } from "Provider/Auth";
import {} from "Provider/Auth";
import { Link } from "react-router-dom";

export class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",
      checked: true,
      requestGoing: false,
      userValid: "",
      passwordValid: "",
      errorText: "",
    };
    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.goToHomePage = this.goToHomePage.bind(this);
  }
  goToHomePage() {
    window.location.href = "/";
  }

  handleClick(event) {
    event.preventDefault();
    if (this.state.userName.length !== 0 && this.state.password.length !== 0) {
      this.setState({
        passwordValid: "",
        userValid: "",
      });
      login("hallo ballo", "true");
      this.goToHomePage();
      return;
    }
    if (this.state.password.length === 0)
      this.setState({
        passwordValid: "has-danger",
      });
    else
      this.setState({
        passwordValid: "",
      });
    if (this.state.userName.length === 0)
      this.setState({
        userValid: "has-danger",
      });
    else
      this.setState({
        userValid: "",
      });
  }
  render() {
    return (
      <>
        <Col lg="5" md="7">
          <Card className="bg-dark shadow border-0" >
            <CardBody className="bg-dark px-lg-5 py-lg-5" >
              <div className="text-center py-3">
                <img
                  alt="..."
                  src={require("assets/img/brand/logo.png")}
                  height="100px"
                  width="100%"
                />
              </div>
              <h1 className="text-center">Admin</h1>
              <div className="p-3" style={{ color: "#f5365c" }}>
                {this.state.errorText}
              </div>
              <Form role="form">
                <FormGroup className={"bg-dark mb-3 " + this.state.userValid}>
                  <InputGroup className="bg-dark input-group-alternative" style={{backgroundColor: 'black'}}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText style={{backgroundColor: 'black'}}>
                        <i className="ni ni-single-02" style={{backgroundColor: 'black'}} />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      type="text"
                      style={{backgroundColor: 'black'}}
                      onChange={(e) =>
                        this.setState({ userName: e.target.value })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className={this.state.passwordValid}>
                  <InputGroup className="bg-dark input-group-alternative" style={{backgroundColor: 'black'}}>
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText style={{backgroundColor: 'black'}} >
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
                      style={{backgroundColor: 'black'}}
                      onChange={(e) =>
                        this.setState({ password: e.target.value })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <div className="custom-control custom-control-alternative custom-checkbox">
                  <input
                    className="custom-control-input"
                    id=" customCheckLogin"
                    type="checkbox"
                    checked={this.state.checked}
                    onChange={(e) => {
                      this.setState({ checked: e.target.checked });
                    }}
                  />
                  <label
                    className="custom-control-label"
                    htmlFor=" customCheckLogin"
                  >
                    <span className="text-muted">Remember me</span>
                  </label>
                </div>
                <div className="text-center">
                  {this.state.requestGoing === true ? (
                    <Spinner
                      className="my-4"
                      animation="border"
                      variant="primary"
                    />
                  ) : (
                    <Button
                      className="my-4"
                      color="primary"
                      type="submit"
                      onClick={this.handleClick}
                    >
                      Sign in
                    </Button>
                  )}
                </div>
              </Form>
              <Link to="/auth/login">Login as a user instead?</Link>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default AdminLogin;
