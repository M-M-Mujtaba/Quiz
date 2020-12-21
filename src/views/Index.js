import React from "react";
import Header from "components/Headers/Header.js";
import 'bootstrap/dist/css/bootstrap.min.css';

import graph from "C:/Users/mujta/OneDrive/Documents/RugbyProject-main/src/assets/img/Extras/score.png"

import Select from 'react-select';




import {
  Container,
  Row,
  Col,
} from "reactstrap";

const Options = [
  { label: "Data Science", value: 1 },
  { label: "AI", value: 2 },
  { label: "Machine Learning", value: 3 },
];

const Options2 = [
  { label: "Overall", value: 1 },
  { label: "Quiz 1", value: 2 },
  { label: "Quiz 2", value: 3 },
];




class Index extends React.Component {


  render() {
    return (
      <>
        <Header />
        {/* Page content */}

          <Container fluid>
            <Row className="justify-content-md-left">
                  <Col lg="5" md="8" xs="6">
                    <div  style = {{color:'bg-secondary'}}>
                        <Select options={ Options } />
                    </div>
                   <br></br><br></br><br></br><br></br>
                    <div>

                    <Select options={ Options2 } />

                    </div>
                    <br></br><br></br><br></br>
                    <h4>Average : 7.6</h4>
                    <img src={graph} className="user-graph" alt="graph"></img>
                  </Col>
                  
            </Row>
          </Container>
      </>
    );
  }
}

export default Index;
