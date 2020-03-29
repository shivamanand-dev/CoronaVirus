import React from "react";
import Country from "./country";
import { Count, Graph } from "./graph";
// import Count from "./count";

class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: [],
      searchedCountry: []
    };
    this.searchCountryName = React.createRef(null);
  }
  handleSearch = () => {
    var temp = this.state.cases.filter(country =>
      country.country
        .toLowerCase()
        .includes(this.searchCountryName.current.value.toLowerCase())
    );
    this.setState({ searchedCountry: temp });
    console.log(temp, "temp");
  };
  handleSearchBox = () => {
    this.searchCountryName.current.value = null;
    this.setState({ searchedCountry: null });
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

          {/* <div class="field has-addons">
            <div class="control">
              <input
                class="input"
                ref={this.searchCountryName}
                type="text"
                placeholder="Find a country"
              />
            </div>
            <div className="open">
              <button>
                <a class="button" onClick={this.handleSearch}>
                  Search
                </a>
              </button>
            </div>
            {this.state.searchedCountry ? (
              <div class="close">
                <button>
                  <a class="button" onClick={this.handleSearchBox}>
                    Show All
                  </a>
                </button>
              </div>
            ) : (
              ""
            )}
          </div> */}

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
              //   <Graph info={country} />
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
