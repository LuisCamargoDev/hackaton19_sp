import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ModalExample = (props) => {
  const [modal, setModal] = useState(false);    
  const toggle = () => setModal(!modal);

  const state = {
    success: false,
    message: "",
    email: "",
    password: ""
  };
  const handleInputChange = e => {
    this.setState({
      [e.target.name]:  e.target.value
    });
  };

  const signIn = e => {
    e.preventDefault();
    alert('whoa!');
  }
  return (
    <div className= "toggleBtn float-right">
      <Button color="success" onClick={toggle}> + </Button>
      <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Room Register</ModalHeader>
        <ModalBody>
          <Form onSubmit={signIn}>   
            <FormGroup style={{color: 'red'}} >              
              <Input                            
                  className="inputLogin"
                  type="text"              
                  id="room"
                  name="room"                
                  placeholder="Spot Name"
              />
            </FormGroup>
            <FormGroup>              
              <Input                            
                className="inputLogin"
                type="text"              
                id="limitStudents"
                name="limitStudents"                
                placeholder="Max Qtd"
              />
            </FormGroup> 
            <FormGroup>              
              <Input                            
                className="inputLogin"
                type="text"              
                id="period"
                name="period"                                
                placeholder="Day Espace"
              />
            </FormGroup>                            
          </Form>        
        </ModalBody>
        <ModalFooter>
          <Button color="success" type="submit" onClick={handleInputChange}>Criar</Button>{' '}
          <Button color="danger" onClick={toggle}>Cancelar</Button>
        </ModalFooter>
      </Modal>
    </div>
  );
}

export default ModalExample;
