import React from "react";
import Country from "./country";

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

          <table class="table is-bordered">
            <thead>
              <tr className="table-data">
                <th>Country</th>
                <th>Total Case</th>
                <th>TodayCase</th>
                <th>Total Deaths</th>
                <th>TodayDeaths</th>
                <th>Recovered</th>
                <th>Active</th>
                <th>Critical</th>
                <th>CasePerOneMillion</th>
                <th>DeathPerOneMillion</th>
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
