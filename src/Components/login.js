import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import './style.css';
import { Container,Row,Col,Form} from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faEye } from '@fortawesome/free-regular-svg-icons';
import { Button } from 'react-bootstrap';
import Vector102 from '../Images/Vector102.png'
import image1 from '../Images/image1.png'
import lc from '../Images/lc.jpg'

class login extends Component {
  render() {
    return (
      <div>
      <Container>
       <Row>
        <Col  style={{ padding: "150px 200px" }}>
        <h2 className='lh'>Login</h2>
         <Form>
          <Form.Group as={Col}  >
            <Form.Label className="mb-1">Email</Form.Label>
            <Form.Control className="mb-1" type='Email' placeholder='Enter Email'></Form.Control>
            <Form.Label className="mb-1">Password</Form.Label>
            <Form.Control className="mb-2"type='Password' placeholder='Enter Password'></Form.Control>
            {/* <FontAwesomeIcon icon={faEye}/> */}
            <Form.Group>
            <Form.Check label="Remember Me" inline/>
            <Form.Label inline className="mb-2" className="fp">Forgrt Password</Form.Label>
            </Form.Group>
            <Form.Group className="d-grid gap-2">
            <Button variant='dark' className="mb-2">Login</Button>
            </Form.Group>
            <Form.Group>
            <Form.Label >Do you have account?</Form.Label>
            <Form.Label className="mb-1"><b>SignUp</b></Form.Label>
            </Form.Group>
            <Form.Group>
            <img src={Vector102} alt="line" className="mb-1" width='45%'/>
            <Form.Label inline className="mb-1">or</Form.Label>
            <img src={Vector102}  className="mb-1" alt="line" width='45%' inline/>
            </Form.Group>
            <Form.Group className="d-grid gap-2">
            <Button variant="outline-dark"><img src={image1}  alt="google"  inline/>Google</Button>
            </Form.Group>            
          </Form.Group>         
         </Form>
        </Col>

        <Col>
        <Container style={{ padding: "20px 0px" }}>
        <img src={lc} alt="car" className='pic' />   
        </Container>
        
        
        </Col>
       </Row>
     </Container>
      </div>
    )
  }
}

export default login 