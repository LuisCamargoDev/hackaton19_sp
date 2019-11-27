import React, { Component } from "react";
import Menu from '../../components/Menu';

import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

// import Header from "../../components/Header";
// import axios from "axios";

import Product from '../../components/Product';
import Company from '../../components/Company';
import ModalCreate from "../../components/ModalCreate";

export default class Home extends Component {
    
    render() {
        return (
            <div className="Home">
                <Menu/>
                <ModalCreate/>                
                <Company/> 
                {/* <Product/> */}
            </div>
        );
    }
}