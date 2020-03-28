import React from "react";
import Country from "./country";
import { Count, Graph } from "./graph";
// import Count from "./count";

class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: []
    };
  }
  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries")
      .then(res => res.json())
      .then(res => this.setState({ cases: res }));
  }

  render() {
    return this.state.cases ? (
      <>
        <section className="wrapper">
          {console.log(this.state.cases)}
          <div>
            {this.state.cases.map(country => (
              <Count info={country} />
              //   <Graph info={country} />
            ))}
            <Graph />
          </div>

          <table class="wrapper vitamins">
            <thead>
              <tr className="table-data">
                <th>Country</th>
                <th>Total Case</th>
                <th>Today Case</th>
                <th>Total Deaths</th>
                <th>Today Deaths</th>
                <th>Recovered</th>
                <th>Active</th>
                <th>Critical</th>
              </tr>
            </thead>
            {this.state.cases.map(country => (
              <Country info={country} />
            ))}
          </table>
        </section>
      </>
    ) : (
      <>
        <div className="wrapper">loading...</div>
      </>
    );
  }
}

export default Cases;
