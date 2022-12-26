import React from 'react'
import { Button, Form, InputGroup } from 'react-bootstrap'
import { NavLink } from 'react-bootstrap' 

const NavBarBottom = () => {
  return (
    <div className='bottom_bar_main sticky-top py-1' sticky="top">
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
                    <NavLink to="#" className='navlink d-flex mx-4' style={{color: 'var(--red)'}}>
                        <i className='fa fa-camera mt-1 mx-2'></i>
                        <span>Login/Register</span>
                    </NavLink>
                    <span>
                        <Button className='btn_cart '>
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