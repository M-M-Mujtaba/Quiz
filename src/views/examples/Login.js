import React from "react";
import axios from 'axios';
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
import { login, login_student } from "Provider/Auth";
import {} from "Provider/Auth";
import { Link } from "react-router-dom";


class Login extends React.Component {
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
      output:null, 
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

      
      // var formdata = new FormData();
      // formdata.append("email", this.state.userName);
      // formdata.append("password", this.state.password);

      // var requestOptions = {
      //   method: 'POST',
      //   body: formdata,
      //   redirect: 'follow',
      // };
      // fetch("http://127.0.0.1:5000/usignin", requestOptions)
      // .then((response) => response.json())
      // .then(({ results }) => {
      //   if(results.status){
      //     login("hello ballo", "false");
      //     this.goToHomePage();
      //   }
      //   else{
      //     this.goToHomePage();
      //   }


      // });
      var data = JSON.stringify({"email":this.state.userName,"password":this.state.password});

      console.log(data)
      var config = {
        method: 'post',
        url: 'http://127.0.0.1:5000/usignin',
        headers: { 
          'Content-Type': 'application/json'
        },
        data : data
      };
      var user = this.state.userName
      axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        if(response.data['status']){
          console.log(user)
          login(user, "false");
          window.location.href = "/";
          console.log("here")
        }
      })
      .catch(function (error) {
        console.log(error);
      });




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
          <Card className="bg-secondary shadow border-0">
            <CardBody className="px-lg-5 py-lg-5">
              <div className="text-center py-3">
                <img
                  alt="..."
                  src={require("assets/img/brand/logo.png")}
                  height="100px"
                  width="100%"
                />
              </div>
              <h1 className="text-center">User</h1>
              <div className="p-3" style={{ color: "#f5365c" }}>
                {this.state.errorText}
              </div>
              <Form role="form">
                <FormGroup className={"mb-3 " + this.state.userValid}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-single-02" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Username"
                      type="text"
                      onChange={(e) =>
                        this.setState({ userName: e.target.value })
                      }
                    />
                  </InputGroup>
                </FormGroup>
                <FormGroup className={this.state.passwordValid}>
                  <InputGroup className="input-group-alternative">
                    <InputGroupAddon addonType="prepend">
                      <InputGroupText>
                        <i className="ni ni-lock-circle-open" />
                      </InputGroupText>
                    </InputGroupAddon>
                    <Input
                      placeholder="Password"
                      type="password"
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
              <Link to="/auth/adminLogin">Login as an admin instead?</Link>
            </CardBody>
          </Card>
        </Col>
      </>
    );
  }
}

export default Login;
