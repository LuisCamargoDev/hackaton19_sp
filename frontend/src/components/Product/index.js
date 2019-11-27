import React, { Component } from "react";
//import { Link } from "react-router-dom";
import { Col, Row, Button, Container } from "reactstrap";

export default class Product extends Component {
    constructor() {
        super();
        this.state = {
          productArr: "",        
        };
        this.setValueCart = this.setValueCart.bind(this);
      }
    
  setValueCart(e, valor,porcentagem){
    e.preventDefault();
    let actual = localStorage.getItem("cartValue");
    if (actual == null || actual == "null"){
      actual = 0;
    } else {
      actual = parseInt(actual);
    }           
    let temp = (valor * porcentagem)/100;              
    let total = temp+actual;      
    localStorage.setItem("cartValue", total);
      }

    // Send product-value, to localstorage
      async componentDidMount(){
        let saldo = 0;
        localStorage.setItem("userBalance", saldo);
        const token = localStorage.getItem("token");       

        /* Retorna os produtos existentes */
        const products = await fetch("http://localhost:3333/product", {
          headers: new Headers({ Authorization: `Bearer ${token}` })
        })
          .then(response => {
            return response.json();
          })
          .catch(err => console.log(err));

    
        this.setState({
            productArr: products,
        });
        
      }
    render(){
        return(
            <Container className="Product">
                <div className="header">
                    <h3 className="title_m">Produtos mais vendidos</h3>
                </div>
                <div className="body">
                    <Row>
                        {this.state.productArr.data?
                                this.state.productArr.data.map(product => (
                                    <Col xs="2" className="card" key={product.id}>
                                        <div className="bodyProduct">
                                             <img src={product.file_img} className="logoProfile" alt="Logo" />
                                             {product.nome}
                                        </div>
                                        <div className="bodyProduct">     

                                        <span>R$ {product.valor}</span>                           
                                            {/* <img src={amerProd} className="prod" alt="Logo" /> */}                                            
                                            <h4><span className="green">{product.porcentagem}% </span> de volta</h4>
                                        </div>  
                                        <Button color="success" onClick={(e) => this.setValueCart(e,product.valor,product.porcentagem)}>Comprar</Button>               
                                    </Col>
                                ))                            
                        :
                        'Vazio'
                        }                     
                    </Row>
                </div>  
            </Container> 
        );
    }
}