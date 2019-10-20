import React, {Component} from "react";
import { Modal, Button, Form} from "react-bootstrap";
import axios from "axios";


class Btns extends Component {
    state={
        show:false,
        email:""
    }
    handleRedo=()=>{
        window.location.assign("/")
    }

    handleClose=()=> {
        this.setState({ show: false });
      }
    
    handleShow=()=> {
        this.setState({ show: true });
    }

    handleInputChange=(e)=>{

        const{name, value}=e.target
        this.setState({[name]:value})
    }

    handleSendEmail=(e)=>{
        
        let requestBody = {
            email: this.state.email,
            results: this.props.results
        }
        console.log(requestBody)
        //get to the sendEmail routes
        
        axios.post("/api/email",requestBody)
        .then(res=>{
            console.log(res.data)
            this.handleClose()
        })
    }

    render(){
    
    return (<div className="mt-2 mb-5 text-center">
          <Button className="mx-2" size="lg" variant="outline-dark" onClick={this.handleRedo}><i className="fas fa-redo mr-2"></i>Try again!</Button>  
          <Button className="mx-2" size="lg" variant="outline-dark" onClick={this.handleShow}><i className="far fa-envelope mr-2"></i>Email me the list!</Button> 
          <Modal show={this.state.show} onHide={this.handleClose} centered>
            <Modal.Header closeButton>
            </Modal.Header>
            <Modal.Body>
                <Form.Group controlId="exampleForm.ControlInput1">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" placeholder="name@example.com" name="email" onChange={this.handleInputChange}/>
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-secondary" onClick={this.handleClose}>
                Close
                </Button>
                <Button variant="outline-dark" onClick={this.handleClose} onClick={this.handleSendEmail}>
                Send
                </Button>
            </Modal.Footer>
        </Modal>
    </div>)
    
    }
}

export default Btns