import React from "react";
import Country from "./country";
import { Count, Graph } from "./graph";
// import Count from "./count";

class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      searchedCountry: ""
    };
    // this.searchCountryName = React.createRef(null);
  }

  // Search

  onChange = e => {
    var temp = this.state.cases.filter(country =>
      country.country.toLowerCase().includes(e.target.value.toLowerCase())
    );
    this.setState({ searchedCountry: temp });
    console.log(temp, "temp");
  };

  componentDidMount() {
    fetch("https://corona.lmao.ninja/countries")
      .then(res => res.json())
      .then(res => this.setState({ cases: res }));
  }

  render() {
    return this.state.cases ? (
      <>
        {console.log(this.state.searchedCountry)}
        <section className="wrapper">
          {console.log(this.state.cases)}
          <div className="graph">
            {this.state.cases.map(country => (
              <Count info={country} />
              //   <Graph info={country} />
            ))}
            <Graph />
          </div>

          {/* search */}

          <div className="search">
            <input
              label="searchCountry"
              placeholder="Search Country"
              onChange={this.onChange}
            />
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
              </tr>
            </thead>
            {/* {this.state.cases.map(country => (
              <Country info={country} />
              //   <Graph info={country} />
            ))} */}

            {this.state.searchedCountry
              ? this.state.searchedCountry.map(country => (
                  <Country info={country} />
                ))
              : this.state.cases.map(country => <Country info={country} />)}
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
