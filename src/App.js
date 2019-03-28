import React, { Component } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { Player } from "./Player";
import { Team } from "./Team";
import { PlayerTeam } from "./PlayerTeam";

const PLAYERS = ["Kien", "Thuan", "Hung"];
const TEAMS = ["Juve", "ManC", "Spain", "Bayenr", "Barca"];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { playerTeam: [] };
  }
  getRandomInt = max => {
    return Math.floor(Math.random() * Math.floor(max));
  };

  startTournament = () => {
    const teams = [...TEAMS];
    const playerTeam = PLAYERS.reduce((out, player) => {
      const randomTeamIndex = this.getRandomInt(teams.length);
      const randomTeam = teams[randomTeamIndex];
      teams.splice(randomTeamIndex, 1);
      return out.concat({ player: player, team: randomTeam });
    }, []);
    this.setState({ playerTeam });
  };

  render() {
    return (
      <div className="App">
        <Container>
          <Row>
            <Col>
              <Player items={PLAYERS} />
            </Col>
            <Col>
              <Team items={TEAMS} />
            </Col>
            <Col>
              <PlayerTeam items={this.state.playerTeam} />
            </Col>
          </Row>
          <Row>
            <Col>
              <Button onClick={this.startTournament}>Start Tournament</Button>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
