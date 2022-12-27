import React from 'react'
import "./subscribe.css"
import { Button, Col, Form } from 'react-bootstrap'

const SubsCribe = () => {
  return (
    <div className='subscribe_main py-4'>
        <div className='container'>
            <div className='d-flex align-items-center justify-content-between'>
                <Col><h2 style={{fontSize: '20px'}}>Lorem ipsum is dummy text</h2></Col>
                <Col xs={7}>
                    <div className='d-flex gap-4 align-items-center justify-content-between'>
                        <Form.Control 
                            type='text'
                            placeholder="Get in Touch"
                        />
                        <Button className="px-4" variant="outline-danger">
                            SUBSCRIBE
                        </Button>
                    </div>
                </Col>
            </div>
        </div>
    </div>
  )
}

export default SubsCribe