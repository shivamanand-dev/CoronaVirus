import React from "react";
import WorldDeath from "./worldDeath";

class Death extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: []
    };
  }

  componentDidMount() {
    console.log("check");
    fetch("https://pomber.github.io/covid19/timeseries.json")
      .then(res => res.json())
      .then(res => this.setState({ cases: Object.entries(res) }));
  }

  render() {
    return this.state.cases ? (
      <>
        <div>
          if (this.state.cases)
          {this.state.cases.map(info => (
            <WorldDeath info={info} />
          ))}
        </div>

        {console.log(this.state.cases, "from death")}
      </>
    ) : (
      <>
        <p>loading...</p>
      </>
    );
  }
}

export default Death;
