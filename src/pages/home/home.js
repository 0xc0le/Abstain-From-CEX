import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "../../components/header";
import Timeline from "../../components/timeline";

export default class home extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Timeline />
      </div>
    );
  }
}
