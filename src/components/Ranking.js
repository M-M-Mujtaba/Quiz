import { getToken } from "Provider/Auth";
import React, { Component } from "react";
import { Table } from "react-bootstrap";

import {
  Row,
  Col,
  Form,
  Spinner,
  Label,
  Input,
  FormGroup,
  Button,
} from "reactstrap";

export class Ranking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoadingRank: false,
      isRankAvailable: false,
      p1: 1,
      p2: 1,
      p3: 1,
      p4: 1,
      p5: 1,
      position: 1,
      ranks: [],
      positionNames: [
        "Loosehead Prop",
        "Hooker",
        "Tighthead Prop",
        "2nd Row",
        "Flanker",
        "No. 8",
        "Scrum Half",
        "Fly half",
        "Winger",
        "Center",
        "Fullback",
      ],
      aramValues: [
        "Games",
        "Starts",
        "gametime",
        "carry",
        "carryAvg",
        "mtrs",
        "mtrsAvg",
        "triesTotal",
        "offloads",
        "tackleBreaks",
        "tackleBreaksAvg",
        "lineBreaks",
        "lineBreaksAvg",
        "passes",
        "kicks",
        "tackles",
        "missedTackles",
        "tacklesPercentage",
        "tosWon",
        "tosConceded",
        "pensConceded",
        "goalKick",
        "goalKickMissed",
        "goalKickPercentage",
        "losThrows",
        "losLost",
        "losThrowsPercentage",
        "losTakes",
        "losTakesLost",
        "losTakesPercentage",
        "losSteals",
      ],
    };
    this.fetchRanking = this.fetchRanking.bind(this);
  }
  fetchRanking() {
    this.mounted = true;

    this.setState({
      isLoadingRank: true,
    });
    var myHeaders = new Headers();
    myHeaders.append("Authorization", "Bearer " + getToken());
    var formdata = new FormData();
    formdata.append("p1", this.state.p1);
    formdata.append("p2", this.state.p2);
    formdata.append("p3", this.state.p3);
    formdata.append("p4", this.state.p4);
    formdata.append("p5", this.state.p5);
    formdata.append("position", this.state.position);

    var requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: formdata,
      redirect: "follow",
    };

    fetch(
      "http://www.backrowstats.co.uk/user/rankPlayerStatsTop20",
      requestOptions
    )
      .then((response) => response.json())
      .then((result) => {
        var formatedData = [];
        for (var obj in result) {
          formatedData.push({
            year: parseInt(obj.substring(2, 4)) - 1 + "/" + obj.substring(2, 4),
            data: result[obj],
          });
        }
        if (this.mounted) {
          this.setState({
            isLoadingRank: false,
            isRankAvailable: true,
            ranks: formatedData.reverse(),
          });
        }
      })
      .catch((error) => {
        alert("Please make sure you have an internet connection.");
        if (this.mounted) {
          this.setState({
            isLoadingRank: false,
            isRankAvailable: false,
          });
        }
      });
  }
  componentWillUnmount() {
    this.mounted = false;
  }
  render() {
    return (
      <>
        <Row>
          <Col>
            <FormGroup className="my-3">
              <Label for="exampleSelectp1">Parameter 1</Label>
              <Input
                type="select"
                name="select"
                id="exampleSelectp1"
                onChange={(e) => this.setState({ p1: e.target.value })}
              >
                {this.state.aramValues.map((item, key) => (
                  <option key={key} value={key + 1}>
                    {item}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="my-3">
              <Label for="exampleSelectp2">Parameter 2</Label>
              <Input
                type="select"
                name="select"
                id="exampleSelectp2"
                onChange={(e) => this.setState({ p2: e.target.value })}
              >
                {this.state.aramValues.map((item, key) => (
                  <option key={key} value={key + 1}>
                    {item}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
          <Col>
            <FormGroup className="my-3">
              <Label for="exampleSelectp3">Parameter 3</Label>
              <Input
                type="select"
                name="select"
                id="exampleSelectp3"
                onChange={(e) => this.setState({ p3: e.target.value })}
              >
                {this.state.aramValues.map((item, key) => (
                  <option key={key} value={key + 1}>
                    {item}
                  </option>
                ))}
              </Input>
            </FormGroup>
          </Col>
        </Row>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
            this.fetchRanking();
          }}
        >
          <Row>
            <Col>
              <FormGroup className="my-3">
                <Label for="exampleSelectp4">Parameter 4</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelectp4"
                  onChange={(e) => this.setState({ p4: e.target.value })}
                >
                  {this.state.aramValues.map((item, key) => (
                    <option key={key} value={key + 1}>
                      {item}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="my-3">
                <Label for="exampleSelectp5">Parameter 5</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelectp5"
                  onChange={(e) => this.setState({ p5: e.target.value })}
                >
                  {this.state.aramValues.map((item, key) => (
                    <option key={key} value={key + 1}>
                      {item}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
            <Col>
              <FormGroup className="my-3">
                <Label for="exampleSelectp5">Position</Label>
                <Input
                  type="select"
                  name="select"
                  id="exampleSelectp6"
                  onChange={(e) => this.setState({ position: e.target.value })}
                >
                  {this.state.positionNames.map((item, key) => (
                    <option key={key} value={key + 1}>
                      {item}
                    </option>
                  ))}
                </Input>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col className="text-center">
              {this.state.isLoadingRank ? (
                <Spinner animation="border" className="mt-5" />
              ) : (
                <Button color="default" type="submit" className="mt-5">
                  Fetch Ranking
                </Button>
              )}
            </Col>
          </Row>
        </Form>
        {this.state.isRankAvailable && (
          <>
            {this.state.ranks.map((item, key) => (
              <React.Fragment key={key}>
                <h2 className="text-center mt-2">{item.year}</h2>
                <div className="ranking-table">
                  <Table
                    striped
                    bordered
                    hover
                    responsive
                    className="bg-white mb-4"
                  >
                    <thead>
                      <tr>
                        <th>#</th>
                        <th>playername</th>
                        <th>club</th>
                        <th>position</th>
                        <th>games</th>
                        <th>gametime</th>
                        <th>carries</th>
                        <th>mtrsAvg</th>
                        <th>triesTotal</th>
                        <th>tackles%</th>
                        <th>tosWon</th>
                        <th>score</th>
                      </tr>
                    </thead>
                    <tbody>
                      {item.data.map((obj, i) => (
                        <tr key={i}>
                          <td>{i + 1}</td>
                          {obj.map((obj2, j) => (
                            <td key={j}>{obj2}</td>
                          ))}
                        </tr>
                      ))}
                    </tbody>
                  </Table>
                </div>
              </React.Fragment>
            ))}
          </>
        )}
      </>
    );
  }
}

export default Ranking;
