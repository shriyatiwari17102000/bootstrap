import React from "react";
import { Card, Col, Container,Form,  Row, Button } from "react-bootstrap";

const ReactForm = () => {
return (
    <div>
    <Container className="mt-3">
        <Row>
            <Col xs= {4} >
                <Card className="shadow-lg" >
                    <Card.Header className="p-3" style = {{backgroundColor : '#2196f39c'}} >
                        <h4>Form</h4>
                    </Card.Header>
                    <Card.Body style={{backgroundColor:"#4a444412"}}>
                            
                        <Form>
                           

                            <Form.Group className="mb-3">
                                <Form.Control type = "text" placeholder= "Username" />
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type = "email" placeholder= "Email"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Form.Control type = "password" placeholder= "Password"/>
                            </Form.Group>
                            <Form.Group className="mb-3">
                                <Button style = {{backgroundColor : '#2196f39c'}} type="submit">Submit</Button>
                                </Form.Group> 
                               
                        </Form>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    </div>
)
}

export default ReactForm;