import React from 'react'
import { Col, Row } from 'react-bootstrap'
import mc from "../../../assets/master_card.webp"
import mb from "../../../assets/mb.webp"
import paypal from "../../../assets/paypal.webp"

const Footer = () => {
  return (
    <>
    <div className="footer_main mt-5 bg-light py-3">
        <div className='container'>
            <Row>
                <Col>
                    <p className='mb-2'>lorem ipsum is dummy text</p>
                    <div className="d-flex gap-4">
                        <i class="fa fa-cc-mastercard" style={{color: 'red', fontSize:'25px'}} aria-hidden="true"></i>
                        <i class="fa fa-cc-visa" style={{color: 'blue', fontSize:'25px'}} aria-hidden="true"></i>
                        <i class="fa fa-cc-mastercard" style={{color: 'red', fontSize:'25px'}} aria-hidden="true"></i>
                        <i class="fa fa-cc-mastercard" style={{color: 'red', fontSize:'25px'}} aria-hidden="true"></i>
                    </div>
                    <div className="d-flex gap-5 my-5">
                        <i className="fa fa-facebook-official" style={{color: 'red', fontSize: '25px'}}></i>
                        <i className="fa fa-youtube" style={{color: 'red', fontSize: '25px'}}></i>
                        <i className="fa fa-facebook" style={{color: 'red', fontSize: '25px'}}></i>
                    </div>

                    <div>
                        <strong>Contact Us</strong>
                        <p className="my-2">Lorem ipsum is dummy</p>
                        <p>Tel :
                            <span style={{color: 'var(--grey)'}}> 123-543-656 </span>
                            <small>(lorem ipsum is dummym text)</small>
                        </p>
                    </div>
                </Col>
                <Col>
                    <strong>Our Products</strong>
                    <div className="mt-3 d-flex flex-column gap-1">
                        <a href="#" className="navlink">Home</a>
                        <a href="#" className="navlink">About</a>
                        <a href="#" className="navlink">Contact Us</a>
                        <a href="#" className="navlink">products</a>
                        <a href="#" className="navlink">Contact Us</a>
                        <a href="#" className="navlink">products</a>
                    </div>
                </Col>
                <Col>
                    <strong>Our Products</strong>
                    <div className="mt-3 d-flex flex-column gap-1">
                        <a href="#" className="navlink">Home</a>
                        <a href="#" className="navlink">About</a>
                        <a href="#" className="navlink">Contact Us</a>
                        <a href="#" className="navlink">products</a>
                        <a href="#" className="navlink">Contact Us</a>
                        <a href="#" className="navlink">products</a>
                    </div>
                </Col>
            </Row>
        </div>
    </div>
    <div className="footer_bottom py-3">
        <div className="container">
            <div className="d-flex justify-content-between">
                <small style={{color: 'var(grey)'}}>© 2022 Modelo Continente Hipermercados, S.A. Todos os direitos reservados</small>
                <div className="d-flex gap-3">
                    <i class="fa fa-cc-mastercard" style={{color: 'red', fontSize:'20px'}} aria-hidden="true"></i>
                    <i class="fa fa-cc-visa" style={{color: 'blue', fontSize:'20px'}} aria-hidden="true"></i>
                    <i class="fa fa-cc-mastercard" style={{color: 'red', fontSize:'20px'}} aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Footer