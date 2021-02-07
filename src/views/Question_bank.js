import React from "react";
import { Container } from "reactstrap";
import Header from "components/Headers/Header.js";

import{
  Button,
  Card,
  CardBody,
  CardTitle,
  CardText,
  Row,
  Col,
  Form,
  FormGroup,
  Input,
  button
} from "reactstrap"

import EditIcon from '@material-ui/icons/Edit';
import RemoveCircleIcon from '@material-ui/icons/RemoveCircle';

const Question = ['how many Aaaaas in this ? ', 'how many Bbbbbs in this ? ', 'how many Cccccs in this ? ','Can you count to 3 and  4?', 'Can you count to 5 and  6?', 'Can you count to 7 and  8?','Can you count back to 3 ?','Can you count back to 5 ?','Can you count back to 4 ?']
const color = ['green', ' yellow', 'red']
export class Question_bank extends React.Component {
    render() {
        return (
            <>
              <Header />
              {/* Page content */}
      
                <Container fluid>
                  <Row className="justify-content-md-left">
                    <Col>
                      <Card style={{ width: "25rem" ,height:"40rem"}}>
                        <CardBody>
                          <CardTitle>Question List</CardTitle>
                          <CardText>
                          {Question.map((Questions) =>
                          <li><p>{Questions}  &nbsp; &nbsp; &nbsp; &nbsp;&nbsp; &nbsp; <EditIcon style={{ color: 'yellow' }}/> &nbsp; &nbsp;  <RemoveCircleIcon style={{ color: 'red' }}/> </p></li>

                          )}
                          </CardText>
                          <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Add Questions
                          </Button>
                        </CardBody>
                    </Card>
                    
                    
                    </Col>
                      <Col>
                      <Form>
                        <Row>
                      <Input
                          id="exampleFormControlTextarea1"
                          placeholder="Question ..."
                          rows="5"
                          type="textarea"
                        />
                        </Row>
                        <br></br> <br></br>
                        <Row>
                          <Col md="6">
                            <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="customRadio1"
                                  name="custom-radio-1"
                                  type="radio"
                                />
                                <label className="custom-control-label" htmlFor="customRadio1">
                                  Easy
                                </label>
                              </div>
                              <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  defaultChecked
                                  id="customRadio2"
                                  name="custom-radio-1"
                                  type="radio"
                                />     
                                <label className="custom-control-label" htmlFor="customRadio2">
                                  Medium
                                </label>
                              </div>      
                              <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="customRadio3"
                                  name="custom-radio-1"
                                  type="radio"
                                />
                                <label className="custom-control-label" htmlFor="customRadio3">
                                  Hard
                                </label>
                              </div>                                            
                          </Col>
                          <Col md="6">
                          <FormGroup>
                          <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  defaultChecked
                                  id="customRadio4"
                                  name="custom-radio-2"
                                  type="radio"
                                />
                                <label className="custom-control-label" htmlFor="customRadio4">
                                  MCQ
                                </label>
                              </div>
                              <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="customRadio5"
                                  name="custom-radio-2"
                                  type="radio"
                                />     
                                <label className="custom-control-label" htmlFor="customRadio5">
                                  Subjective
                                </label>
                              </div>      
                              <div className="custom-control custom-control-alternative custom-radio mb-3">
                                <input
                                  className="custom-control-input"
                                  id="customRadio6"
                                  name="custom-radio-2"
                                  type="radio"
                                />
                                <label className="custom-control-label" htmlFor="customRadio6">
                                  Attachment
                                </label>
                              </div>                                             
                                </FormGroup>
                          </Col>
                        </Row>
                        <Row>
                      <Input
                          id="exampleFormControlTextarea2"
                          placeholder="Option 1 ..."
                          rows="1"
                          type="textarea"
                        />
                        </Row>
                        <br></br>
                        <Row>
                      <Input
                          id="exampleFormControlTextarea3"
                          placeholder="Option 2 ..."
                          rows="1"
                          type="textarea"
                        />
                        </Row>
                        <br></br>
                        <Row>
                      <Input
                          id="exampleFormControlTextarea4"
                          placeholder="Option 3 ..."
                          rows="1"
                          type="textarea"
                        />
                        </Row>
                        <br></br>
                        <Row>
                      <Input
                          id="exampleFormControlTextarea5"
                          placeholder="Option 4 ..."
                          rows="1"
                          type="textarea"
                        />
                        </Row>
                        <br></br>
                        <Button
                            color="primary"
                            href="#pablo"
                            onClick={e => e.preventDefault()}
                          >
                            Create Quiz
                          </Button>
   </Form>
                    </Col>

                  </Row>
                </Container>
            </>
          );
    }
}

export default Question_bank
