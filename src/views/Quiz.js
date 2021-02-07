import React from "react";
import Header from "components/Headers/Header.js";
import Select from 'react-select';
import 'react-day-picker/lib/style.css';
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

  import logo from "../assets/img/brand/logo.png";
  import EditIcon from '@material-ui/icons/Edit';
  import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';


  const quizez = ['Quiz1  "12/09" 30 min', 'Quiz2 "17/09" 15 min', 'Quiz3 "11/10" 45 min']

  const MCQs = [  { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 }, 
  { label: "4", value: 4 },
  { label: "5", value: 5 },
  { label: "6", value: 6 },
  { label: "7", value: 7 },
  { label: "8", value: 8 },
  { label: "9", value: 9 },
  { label: "10", value: 10 }]
  const Sub = [ 
      { label: "1", value: 1 },
  { label: "2", value: 2 },
  { label: "3", value: 3 }, 
  { label: "4", value: 4 },
  { label: "5", value: 5 },
]

const Attach = [ 
  { label: "1", value: 1 },
{ label: "2", value: 2 },
{ label: "3", value: 3 }, 
{ label: "4", value: 4 },
{ label: "5", value: 5 },
]

const Easy = [{ label: "1", value: 1 },
{ label: "2", value: 2 },
{ label: "3", value: 3 }, 
{ label: "4", value: 4 },
{ label: "5", value: 5 },
{ label: "6", value: 6 },
{ label: "7", value: 7 },
{ label: "8", value: 8 },
{ label: "9", value: 9 },
{ label: "10", value: 10 },
{ label: "11", value: 11 },
{ label: "12", value: 12 },
{ label: "13", value: 13 }, 
{ label: "14", value: 14 },
{ label: "15", value: 15 }]

const quiz = [{ label: "1", value: 1 },
{ label: "2", value: 2 },
{ label: "3", value: 3 }, 
{ label: "4", value: 4 },
{ label: "5", value: 5 },
{ label: "6", value: 6 },
{ label: "7", value: 7 },
{ label: "8", value: 8 },
{ label: "9", value: 9 },
{ label: "10", value: 10 },
{ label: "11", value: 11 },
{ label: "12", value: 12 },
{ label: "13", value: 13 }, 
{ label: "14", value: 14 },
{ label: "15", value: 15 },
{ label: "16", value: 16 },
{ label: "17", value: 17 },
{ label: "18", value: 18 },
{ label: "19", value: 19 },
{ label: "20", value: 20 },
{ label: "21", value: 21 },
{ label: "22", value: 22 },
{ label: "23", value: 23 }, 
{ label: "24", value: 24 },
{ label: "25", value: 25 },
{ label: "26", value: 26 },
{ label: "27", value: 27 },
{ label: "28", value: 28 },
{ label: "29", value: 29 },
{ label: "30", value: 30 }

]

export class Quiz extends React.Component {
    render() {
        return (
            <>
              <Header />
              {/* Page content */}
      
                <Container fluid>
                <Row className="justify-content-center pt-3">
              <img src={logo} className="user-logo" alt="logo"></img>

             
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
                  <Col lg="4" xl ="4" md="6" xs="12">
        <div>
        <Card className="m-2">
          <CardImg
            alt="..."
            src= "https://webengage.com/blog/wp-content/uploads/sites/4/2018/04/How-to-Use-an-Interactive-Quiz-to-Boost-Your-Online-Conversions.png"          
            top
          />
          <CardBody>
            <CardTitle>Quizez Assigned</CardTitle>
            <CardText>
            
            {quizez.map((quizez) =>
                <li>{quizez}  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <EditIcon style={{ color: 'yellow' }}/> &nbsp; &nbsp;  <RemoveCircleIcon style={{ color: 'red' }}/></li>
            )}
            </CardText>
           
          </CardBody>
        </Card>
        </div>
        </Col>
        <Col  lg="4" xl ="4" md="6" xs="12">
            <div>
            MCQs
            <Select options = {MCQs}  />
            <br></br><br></br>
            Subjective
            <Select options = {Sub}  />
            <br></br><br></br>
            Attachments
            <Select options = {Attach}  />
            <br></br><br></br>
            </div>
            <label for="Quizday">Quizday:</label>
                <input type="date" id="quizday" name="quizday"/>
                <br></br><br></br>
                <form action="/action_page.php">
                    <label for="appt">Select a time:</label>
                    <input type="time" id="appt" name="appt"/>
                </form>
        </Col>
        <Col lg="4" xl ="4" md="6" xs="12">

        <div>
            Easy
            <Select options = {Easy}  />
            <br></br>
            Medium
            <Select options = {Easy}  />
            <br></br>
            Hard
            <Select options = {Easy}  />
            <br></br>
            Quiz Time
            <Select options = {quiz}  />
            <br></br>
        </div>

        <Button
              color="primary"
              href="#pablo"
              onClick={e => e.preventDefault()}
            >
              Assign Quiz
            </Button>
        
        </Col>
      </Row>

                </Container>
            </>
          );
        
    }
}

export default Quiz
