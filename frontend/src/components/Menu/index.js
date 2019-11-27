import React, { Component } from 'react';
import { Row, Col } from 'reactstrap';
import { Link } from "react-router-dom";

import profile from '../../profile.png';

export default class Menu extends Component {
    // pegar o token
    // pegar o usuario logado atual
    //pegar o valor do saldo
    constructor() {
        super();
        this.state = {
          value: "",          
        };
      }
    
      async componentWillMount() {
        let actual = localStorage.getItem("userBalance");        
        if (actual == null || actual == "null"){
          actual = 0;
        } else {
          actual = parseInt(actual);
        }  
        this.setState({
          value:actual
        })
      }
    render(){  
        
        return(            
                <div className="MenuHome">
                        <Row>
                            <Col xs="3"><h1 className="title">2 Brains</h1></Col>
                            <Col xs="3"></Col>                    
                            <Col xs="3"></Col>
                            <Col xs="3">
                                <div>
                                    <Link to="/profile">
                                        <img src={profile} className="logoProfile" alt="Logo" />
                                    </Link>
                                    <br></br>                                                                          
                                </div>  
                            </Col>
                        </Row>      
                </div>
            )
        }
  }
  
  