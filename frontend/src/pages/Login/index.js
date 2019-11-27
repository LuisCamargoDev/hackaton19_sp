import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup, Label, Input, Button, Alert } from "reactstrap";
// import Header from "../../components/Header";
import axios from "axios";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      message: "",
      email: "",
      password: ""
    };
  }


  handleInputChange = e => {
    this.setState({
      [e.target.name]:  e.target.value
    });
  };

  signIn = e => {
    e.preventDefault();
    const { email, password } = this.state;
    
    const session = {
      email,
      password
    };

    axios
      .post("http://localhost:3333/login", session)
      .then(response => {
        this.setState({ success: true });
        this.setState({ message: "Signing In.." });

        const { token } = response.data;
        localStorage.setItem("token", token);
        this.props.history.push("/home");
        return;
      })
      .then(token => token)
      .catch(err => {
        console.log(err);
        this.setState({ message: "Invalid LogIn.." });
      });
  };

  render() {
    return (
      <div className="Login">
        <h1 className="title_g">TWO BRAINS</h1>
        {this.state.success ? (
          <Alert color="success">{this.state.message}</Alert>
        ) : this.state.message !== "" ? (
          <Alert color="danger">{this.state.message}</Alert>
        ) : (
          ""
        )}
        <Form onSubmit={this.signIn} className="loginForm">
          <FormGroup>
            <Input                            
              className="inputLogin"
              type="email"              
              id="email"
              name="email"
              onChange={this.handleInputChange}
              placeholder="Email"
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="inputLogin"
              type="password"
              id="password"
              name="password"
              onChange={this.handleInputChange}
              placeholder="Password"
            />
          </FormGroup>
          <FormGroup>
            <Button className="btn-login" color="success" type="submit">
              ENTRAR
            </Button>
          </FormGroup>
          <hr/>          
        </Form>
      </div>
    );
  }
}