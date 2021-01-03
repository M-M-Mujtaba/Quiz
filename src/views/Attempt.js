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
    constructor(props){
      super(props);
      this.state = {
        questions: [],
        index: 3,
        time: {}, 
        seconds: 10,


      }
      this.timer = 0;
      this.startTimer = this.startTimer.bind(this);
      this.countDown = this.countDown.bind(this);
    }
    secondsToTime(secs){
      let hours = Math.floor(secs / (60 * 60));
  
      let divisor_for_minutes = secs % (60 * 60);
      let minutes = Math.floor(divisor_for_minutes / 60);
  
      let divisor_for_seconds = divisor_for_minutes % 60;
      let seconds = Math.ceil(divisor_for_seconds);
  
      let obj = {
        "h": hours,
        "m": minutes,
        "s": seconds
      };
      return obj;
    }
    componentDidMount(){
      this.mounted = true;

      var requestOptions = {
        method: 'GET',
        redirect: 'follow'
      };

      fetch("http://127.0.0.1:5000/AttemptQuiz/?quiz=1", requestOptions)
        .then(response => response.json())
        .then(result => {console.log(result)
          this.setState({questions: result.Result,})
          console.log(this.state.questions)
        
        })
        .catch(error => console.log('error', error));
      let timeLeftVar = this.secondsToTime(this.state.seconds);
      this.setState({ time: timeLeftVar });
    }
    componentWillUnmount(){
      this.mounted = false;
    }
    startTimer() {
      if (this.timer == 0 && this.state.seconds > 0) {
        this.timer = setInterval(this.countDown, 1000);
      }
    }
    countDown() {
      // Remove one second, set state so a re-render happens.
      let seconds = this.state.seconds - 1;
      this.setState({
        time: this.secondsToTime(seconds),
        seconds: seconds,
      });
      
      // Check if we're at zero.
      if (seconds == 0) { 
        clearInterval(this.timer);
        window.alert("Your time is over")
        window.location.href = "/";
      }
    }

    render() {


        return (
    <Container fluid className="user-bg">
      <div>
        <Row>
          {this.startTimer()}
          Time Left:  {this.state.time.m} minutes and  {this.state.time.s} seconds


        </Row>
        </div>
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
            {this.state.questions.slice(this.state.index, this.state.index+1).map((item, i)=>(
              
              <div>
                            <Row>
                  Q{this.state.index+1} {item.question}     </Row>
                  <Row>
                          <Col >
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id={"custom-radio-1" + this.state.index}
                                  name={"custom-radio-" + this.state.index}
                                  type="radio"
                                />
                                <label className="custom-control-label" htmlFor={"custom-radio-1" + this.state.index}>
                                  {item.option_a}
                                </label>
                                </div>
                            </Col>
                            <Col >
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id={"custom-radio-2" + this.state.index}
                                  name={"custom-radio-" + this.state.index}
                                  type="radio"
                                />     
                                <label className="custom-control-label" htmlFor={"custom-radio-2" + this.state.index}>
                                {item.option_b}
                                </label>
                              </div>      
                    </Col>
                </Row>
                <Row>
                <Col >
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id={"custom-radio-3" + this.state.index}
                                  name={"custom-radio-" + this.state.index}
                                  type="radio"
                                />
                                <label className="custom-control-label" htmlFor={"custom-radio-3" + this.state.index}>
                                {item.option_c}
                                </label>
                                </div>
                            </Col>
                            <Col >
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id={"custom-radio-4" + this.state.index}
                                  name={"custom-radio-" + this.state.index}
                                  type="radio"
                                />     
                                <label className="custom-control-label" htmlFor={"custom-radio-4" + this.state.index}>
                                {item.option_d}
                                </label>
                              </div>      
                    </Col>
              </Row>
   
               </div>
            ))}
           
              <Row>
               
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => {
                              this.setState({index:0})
                          }}
                          >
                            Frist
                          </Button>
                          &nbsp;&nbsp;
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => {
                              var ind = this.state.index;
                              if (ind > 0){
                              this.setState({index:ind -1})
                              }
                            }}
                          >
                            Previous
                          </Button>
                          &nbsp;&nbsp;
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => {

                              var ind = this.state.index;
                              var max = this.state.questions.length - 1
                              if (ind < max){
                              this.setState({index:ind + 1})
                              }
                            }}
                          >
                            Next
                          </Button>
                          &nbsp;&nbsp;
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => {


                              var max = this.state.questions.length - 1

                              this.setState({index:max})

                            }}
                          >
                            Last
                          </Button>
                        </Row>
                        <br></br> <br></br>
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
