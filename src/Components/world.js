import React from "react";

class World extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      worldReport: []
    };
  }
  componentDidMount() {
    console.log("check");
    fetch("https://corona.lmao.ninja/all")
      .then(res => res.json())
      .then(res => this.setState({ worldReport: res }));
  }
  render() {
    return (
      <>
        <section className="wrapper">
          <h2 className="world">World</h2>
          <h2 className="caption">
            A Real time report of all the{" "}
            <span className="covid">COVID-19</span> patient around the globe
          </h2>
          {console.log(this.state.worldReport)}
          <div className="table">
            <ul>
              <li>
                <h4>
                  <span className="title">Total Cases: </span>
                  {this.state.worldReport.cases}
                </h4>
              </li>
              <li>
                <h4>Total Deaths: {this.state.worldReport.deaths}</h4>
              </li>
              <li>
                <h4>Total Recovered: {this.state.worldReport.recovered}</h4>
              </li>
            </ul>
          </div>
        </section>
      </>
    );
  }
}

export default World;
