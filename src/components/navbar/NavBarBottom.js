import React, { useState } from 'react'
import { Button, Form, InputGroup, Offcanvas } from 'react-bootstrap'
import { NavLink } from 'react-router-dom' 

const NavBarBottom = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className='bottom_bar_main sticky-top py-1' sticky="top">

        <Offcanvas show={show} onHide={handleClose} placement={"end"} name={"end"}>
          <Offcanvas.Header className='mb-0' closeButton>
            <Offcanvas.Title>Lorem ipsum is dummy text</Offcanvas.Title>
          </Offcanvas.Header>
          <hr className='mt-0' />
          <Offcanvas.Body className="text-center mt-5">
            <h2 className='mb-4' style={{fontSize: '20px'}}>Lorem ipsum is a dummy text</h2>
            <p>Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.</p>
            <Button variant="danger" className="px-4 mt-3">Cart Button</Button>
          </Offcanvas.Body>
        </Offcanvas>

        <div className='container'>
            <div className='d-flex align-items-center justify-content-between'>
                <div className='d-flex align-items-center'>    
                    <h3>eCommerce</h3>
                    <InputGroup className="mx-4 my-3">
                        <Form.Control aria-label="Amount (to the nearest dollar)" />
                        <InputGroup.Text><i className='fa fa-search' style={{color: 'var(--red)'}}></i></InputGroup.Text>
                    </InputGroup>
                </div>
                <div className='d-flex align-items-center'>
                    <NavLink to="/login" className='navlink d-flex mx-4' style={{color: 'var(--red)'}}>
                        <i className='fa fa-camera mt-1 mx-2'></i>
                        <span>Login/Register</span>
                    </NavLink>
                    <span>
                        <Button className='btn_cart ' onClick={handleShow}>
                            <i 
                                className='fa fa-camera' 
                                style={{marginRight: '8px', color: 'var(--red)'}}
                            ></i>
                            <strong>29.99$</strong>
                        </Button>
                    </span>
                </div>
            </div>

            <div className='bottom_menus py-2 d-flex align-items-center'>
                <NavLink to='#' className='navlink'>Products</NavLink>
                <NavLink to='#' className='navlink'>Products</NavLink>
                <NavLink to='#' className='navlink'>Products</NavLink>
                <NavLink to='#' className='navlink'>Products</NavLink>
                <NavLink to='#' className='navlink'>Products</NavLink>
                <NavLink to='#' className='navlink'>Products</NavLink>
                <NavLink to='#' className='navlink'>Products</NavLink>
                <NavLink to='#' className='navlink'>Products</NavLink>
            </div>
        </div>
    </div>
  )
}

export default NavBarBottom