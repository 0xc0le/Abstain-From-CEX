import React from "react";
import { formatCurrency } from "../utils/currency";

class CexStats extends React.Component {
  // Constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      DataisLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://api.llama.fi/protocols")
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          items: json,
          DataisLoaded: true,
        });
      });
  }
  render() {
    const { DataisLoaded, items } = this.state;
    if (!DataisLoaded)
      return (
        <div>
          <h1> Loading.... </h1>{" "}
        </div>
      );

    const cexs = items.filter((item) => item.category === "CEX");

    const total = cexs
      .map((item) => item.tvl)
      .reduce((a, b) => {
        return a + b;
      }, 0);

    return (
      <div>
        <h1>{formatCurrency(total)}</h1>
      </div>
    );
  }
}

export default CexStats;
