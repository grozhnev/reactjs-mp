import React from "react";

class HelloProps extends React.Component {
    render() {
      return <h1>Hello, {this.props.name}</h1>;
    }
  }

export default HelloProps