import React from "react";
import { Bar, Line, Pie } from "react-chartjs-2";

class Graph extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cases: []
    };
  }
  componentDidMount() {
    fetch;
    "https://corona.lmao.ninja/countries"
      .then(res => res.json())
      .then(res => this.setState({ cases: res }));
  }
  render() {}
}

export default Graph;
