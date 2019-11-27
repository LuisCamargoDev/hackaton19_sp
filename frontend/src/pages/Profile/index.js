import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Button } from "reactstrap";
import profile from "../../profile.png";

import axios from "axios";

import { Col, Row, Container } from "reactstrap";
export default class Profile extends Component {
  constructor() {
    super();
    this.state = {
      user: "",
      tempValue: 0,
      balance: 0
    };
    this.setWithdrawal = this.setWithdrawal.bind(this);
    this.withdrawal = this.withdrawal.bind(this);
    this.share =this.share.bind(this);
  }

  share(e){
    e.preventDefault();
    alert(`Estamos enviando um link para voce compartilhar para este numero : ${this.state.user.data.telefone}`);
    this.props.history.push("/home");
  }

  async withdrawal(e) {
    e.preventDefault();
    alert('Em breve voce irá receber o deposito na sua conta... <3');
    localStorage.setItem('userBalance',0);
    localStorage.setItem('cartValue',0);
    this.props.history.push("/home");
    
  }

  async setWithdrawal(e) {
    e.preventDefault();
    let userBalance = this.getActualCartValue();
    this.setActualUserBalance(userBalance);  
    this.setState({
      tempValue: 0.0,
      balance: userBalance
    });
  }

  async setActualUserBalance(value) {
    localStorage.setItem("userBalance", value);
  }

  getActualCartValue() {
    let actual = localStorage.getItem("cartValue");
    if (actual == null || actual == "null") {
      actual = 0;
    } else {
      actual = parseInt(actual);
    }
    return actual;
  }

  async componentDidMount() {
    const token = localStorage.getItem("token");

    /* Retorna as empresas existentes */
    const user = await fetch("http://localhost:3333/users/actual", {
      headers: new Headers({ Authorization: `Bearer ${token}` })
    })
      .then(response => {
        return response.json();
      })
      .catch(err => console.log(err));
    let cartValue = this.getActualCartValue();    
    this.setState({
      user,
      tempValue: cartValue      
    });
  }
  render() {
    return (
      <Container className="Profile">
        <div className="header_profile">
          <Link to="/home" className="link_profile float-left">
            Back
          </Link>
          <Link to="/logout" className="link_profile float-right">
            Logout
          </Link>
        </div>
        {this.state.user ? (
          <div className="body_profile">
            <div>
              <Link to="/profile">
                <img src={profile} className="logoProfile_profile" alt="Logo" />
              </Link>
              <br></br>
              <span className="email_profile">
                {this.state.user.data.email}
              </span>
              <br></br>
              <span className="phone_profile">
                {this.state.user.data.telefone}
              </span>
            </div>

            <div>
              <Row className="Info">
                <Col xs="6" className="">
                  <Col className="text-left">
                    <span style={{ fontSize: "1.3em" }}>
                      Saldo Disponivel:{" "}
                    </span>
                    <br></br>
                    <span className="space-rigth">
                      {" "}
                      R$ {this.state.balance}
                    </span>
                    <Button color="success" type="submit" onClick={this.withdrawal}>
                      {" "}
                      Saque{" "}
                    </Button>
                  </Col>
                  <br></br>
                  <Col className="text-left">
                    <span style={{ fontSize: "1.3em" }}> Saldo Pendente </span>
                    <br></br>
                    <span className="space-rigth">
                      {" "}
                      R${this.state.tempValue}
                    </span>
                    <Button color="warning" onClick={this.setWithdrawal}>
                      {" "}
                      Confirmar{" "}
                    </Button>
                  </Col>
                </Col>
                <Col xs="6" className="card text-center">
                  <span style={{ fontSize: "1.5em", marginTop: "3vh" }}>
                    Indique <br></br>e ganhe R$100
                  </span>
                  <Button color="info" onClick={this.share}> Compartilhe </Button>
                </Col>
              </Row>
            </div>
          </div>
        ) : (
          "hi"
        )}
      </Container>
    );
  }
}
