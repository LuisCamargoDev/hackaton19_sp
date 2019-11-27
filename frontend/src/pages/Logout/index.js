import { Component } from "react";
//import {Form, FormGroup, Label, Input, Button, Alert} from 'reactstrap';

export default class Logout extends Component {
  componentWillMount() {
    localStorage.removeItem("token");
    this.props.history.push("/");
  }

  render() {
    return null;
  }
}