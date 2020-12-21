import React, { Component } from "react";
import {
  Row,
  Col,
  FormGroup,
  Input,
  CardFooter,
  Label,
  Spinner,
  Button,
  Card,
  CardTitle,
  Form,
} from "reactstrap";
import { getToken } from "Provider/Auth";
export class EditMemberShip extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      recieved: false,
      success: false,
      id: props.clubID,
      name: props.clubname,
      budget: props.budget,
      status: props.statusCode.toString(),
      endDate:
        props.endDate.split("-")[2] +
        "-" +
        props.endDate.split("-")[1] +
        "-" +
        props.endDate.split("-")[0],
      errorText: "",
    };
    this.submitForm = this.submitForm.bind(this);
  }
  submitForm(e) {
    this.mounted = true;
    e.preventDefault();

    this.setState({
      isLoading: true,
    });
    var endDateFormated =
      this.state.endDate.split("-")[2] +
      "-" +
      this.state.endDate.split("-")[1] +
      "-" +
      this.state.endDate.split("-")[0];
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getToken());

    var formdata = new FormData();
    formdata.append("clubID", this.state.id);
    formdata.append("clubName", this.state.name);
    formdata.append("budget", this.state.budget);
    formdata.append("statusCode", this.state.status);
    formdata.append("endDate", endDateFormated);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch("http://www.backrowstats.co.uk/admin/editClub", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        if ("updated" === result.message) {
          if (this.mounted) {
            this.setState({
              isLoading: false,
              success: true,
              recieved: true,
            });
          }
        } else if (this.mounted) {
          this.setState({
            isLoading: false,
            recieved: true,
            success: false,
          });
        }
      })
      .catch((error) => {
        if (this.mounted) {
          this.setState({
            isLoading: false,
            recieved: true,
            success: false,
          });
        }
      });
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <Card className="bg-white">
        <CardTitle>
          <h1 className="text-center pt-3">Edit membership</h1>
        </CardTitle>
        <Form className="p-4" onSubmit={this.submitForm}>
          <div className="" style={{ color: "#f5365c", textAlign: "center" }}>
            {this.state.errorText}
          </div>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="clubname">Username</Label>
                <Input
                  className="form-control-alternative"
                  id="clubname"
                  value={this.state.name}
                  onChange={(e) => this.setState({ name: e.target.value })}
                  placeholder="Username"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="budget">Budget</Label>
                <Input
                  className="form-control-alternative"
                  value={this.state.budget}
                  onChange={(e) => this.setState({ budget: e.target.value })}
                  id="budget"
                  placeholder="Budget"
                  type="text"
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row>
            <Col md="6">
              <FormGroup>
                <Label for="exampleSelect">Status</Label>
                <Input
                  type="select"
                  value={this.state.status}
                  onChange={(e) => this.setState({ status: e.target.value })}
                  name="select"
                  id="exampleSelect"
                >
                  <option value="1">Pending</option>
                  <option value="0">Complete</option>
                </Input>
              </FormGroup>
            </Col>
            <Col md="6">
              <FormGroup>
                <Label for="exampleDate">End Date</Label>
                <Input
                  type="date"
                  name="date"
                  value={this.state.endDate}
                  onChange={(e) => this.setState({ endDate: e.target.value })}
                  id="exampleDate"
                  placeholder="date placeholder"
                  required
                />
              </FormGroup>
            </Col>
          </Row>

          <CardFooter className="text-center">
            {this.state.recieved ? (
              this.state.success ? (
                <div className="p-1" style={{ color: "#2dce89" }}>
                  Member edited successfully.
                </div>
              ) : (
                <div className="p-1" style={{ color: "#f5365c" }}>
                  Something went wrong please try again later.
                </div>
              )
            ) : null}
            {this.state.isLoading ? (
              <Spinner animation="border" variant="primary" />
            ) : (
              <Button color="default" type="submit">
                Submit
              </Button>
            )}
          </CardFooter>
        </Form>
      </Card>
    );
  }
}

export default EditMemberShip;
