import { Component } from "react";
import "./IPAddress.css";

class IPAddress extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.ip}</h1>
        <p>(this is blah blah)</p>
      </div>
    );
  }
}

export default IPAddress;
