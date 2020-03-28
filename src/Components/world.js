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
        <section className="world">
          <div className="wrapper">
            <h2 className="world-text">World</h2>

            <h2 className="caption">
              A Real time report of all the{" "}
              <span className="covid">COVID-19</span> patient around the globe
            </h2>
            {console.log(this.state.worldReport)}
            <div className="grid-col-3">
              <div className="table grid-col-2">
                <div className="title">
                  <h4>Total cases:</h4>
                  <h4>Total Deaths:</h4>
                  <h4>Total Recovered:</h4>
                </div>
                <div className="numbers">
                  <h4>{this.state.worldReport.cases}</h4>
                  <h4>{this.state.worldReport.deaths}</h4>
                  <h4>{this.state.worldReport.recovered}</h4>
                </div>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default World;
