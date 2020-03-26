import React from "react";

class Cases extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: null
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
          <div>
            <h1>Country</h1>
          </div>
          {console.log(this.state.cases.china)}
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
