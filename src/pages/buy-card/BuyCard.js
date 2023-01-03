import React from 'react'
import "./buycard.css"
import { Breadcrumb, Button, Carousel } from 'react-bootstrap'
import Navbar from '../../components/navbar/Navbar'
import pic from "../../assets/pro1.jpg"
import perPic from "../../assets/pvpr.webp"

const BuyCard = () => {
  return (
    <div className='buy_card_main'>
    <Navbar />
        <div className='container'>
        <Breadcrumb className="mt-4">
            <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
            <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                lorem ipsum
            </Breadcrumb.Item>
            <Breadcrumb.Item active>Buy Product</Breadcrumb.Item>
        </Breadcrumb>
        <div className='cart_box_wrapper d-flex justify-content-between gap-4'>
            <div className='left my-3 w-50'>
                <Carousel>
                    <Carousel.Item>
                        <img
                        style={{width: '100%', height: '100%'}}
                        src={pic}
                        alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        style={{width: '100%', height: '100%'}}
                        src={pic}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        style={{width: '100%', height: '100%'}}
                        src={pic}
                        alt="Third slide"
                        />
                    </Carousel.Item>
                    </Carousel>
            </div>
            <div className='right p-4 w-50'>
                <div className='w-100 d-flex justify-content-between'>
                    <div>
                        <h1 className="fw-semibold" style={{fontSize: '22px'}}>Lorem ipsum is aq dummy text</h1>
                        <p className='my-0'>Lenor</p>
                        <p>emb. 510 gr</p>
                    </div>
                    <div>
                        <img src={perPic} alt="" />
                    </div>
                </div>
                <p className='mt-5 mb-4'>Intensificador Perfume Pérolas Unstoppables Fresh
                Intensificador Perfume Pérolas Unstoppables Fresh
                Intensificador Perfume Pérolas Unstoppables Fresh</p>

                <div className="d-flex">
                    <div>
                        <h1 className='mb-0 fw-semibold' style={{color: 'var(--red)', fontSize: '22px'}}>
                            $ 9,99 <span className='fw-normal'>/un</span>
                        </h1>
                        <p className='my-0' style={{fontSize: '18px'}}>€19,59 /kg</p>
                        <p style={{fontSize: '14px'}}>PVP Recomendado: €19,99/un</p>
                    </div>
                    <div className='mx-3'>
                    <i className="pt-2 fa fa-file-text-o" style={{color: "red",fontSize: '30px'}} aria-hidden="true"></i>
                     <Button className="btn px-4 mx-3">CARRINHO</Button>
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default BuyCard