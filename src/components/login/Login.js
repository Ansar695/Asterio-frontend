import React, { useState } from 'react'
import "./login.css"
import Navbar from '../navbar/Navbar';
import { Button, Form } from 'react-bootstrap';

const Login = () => {
    const[active, setActive] = useState(1)
  return (
    <div>
        <Navbar />
        <div className='login_bg d-flex flex-column align-items-center justify-content-center'>
            <div className='login_card p-4 d-flex flex-column align-items-center'>
                <div style={{width: '70%'}} className='d-flex mb-4 pb-2'>
                    <span
                        onClick={()=>setActive(1)} 
                        className={`py-2 navlink ${active===1?'active': ''}`}>login</span>
                    <span
                        onClick={()=>setActive(2)} 
                        className={`py-2 navlink ${active===2?'active': ''}`}>register</span>
                </div>

                {active===1?
                    <>
                        <div className="w-100 d-flex flex-column align-items-center">
                            <Form.Control type="text" className="mb-3" placeholder='* Email' />
                            <Form.Control type="text" className="mb-3" placeholder='* Password' />
                            <div style={{width: '70%'}} className='d-flex justify-content-between align-items-center'>
                            <Form.Check 
                                    type="checkbox"
                                    id={`default-checkbox`}
                                    label={` remember me`}
                                />
                                <p className='my-0'>recover password</p>
                            </div>
                            <Button className="login_btn py-2 px-5 mt-4">LOG IN</Button>
                        </div>
                    </>:
                    <>
                        <div className='d-flex justify-content-between gap-4'>
                            <div className="w-50">
                                <strong>Lorem ipsum </strong>
                                <Form.Control type="text" className="mb-3" placeholder='* Email' />
                                <Form.Control type="text" className="mb-3" placeholder='* Password' />
                            </div>
                            <div className="w-50">
                                <strong>Lorem ipsum </strong>
                                <Form.Control type="text" className="mb-3" placeholder='* Email' />
                                <Form.Control type="text" className="mb-3" placeholder='* Password' />
                            </div>
                        </div>
                    </>
                }


                <small style={{color: 'var(--silver)', marginTop: '3rem'}}>This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.</small>
            </div>
        </div>
    </div>
  )
}

export default Login