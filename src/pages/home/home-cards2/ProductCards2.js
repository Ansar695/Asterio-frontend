import React from 'react'
import { Card } from 'react-bootstrap'
import g1 from "../../../assets/g1.gif"
import g2 from "../../../assets/g2.jpg"
import g3 from "../../../assets/g3.jpg"

const ProductCards2 = () => {
  return (
    <div className='products_cards2_main my-5'>
        <div className="container">
            <div className="mb-4 d-flex justify-content-between">
                <h1 className="header_label">Other Products </h1>
                <p to="#" style={{color: 'var(--grey)'}}>View All</p>
            </div>
            <div className='d-flex gap-1 flex-wrap justify-content-between'>
                <Card className="p-0" style={{}}>
                    <Card.Img style={{height: '200px'}} className="img_wrap" src={g1} />
                    <Card.Body className="px-3">
                        <p className='mb-0' style={{color: 'var(--red)'}}>ENTRA</p>
                        <h5 className="fws-bold">Lorem Ipsum is dummy Text</h5>
                    </Card.Body>
                </Card>
                <Card className="p-0" style={{}}>
                    <Card.Img style={{height: '200px'}} className="img_wrap" src={g2} />
                    <Card.Body className="px-3">
                        <p className='mb-0' style={{color: 'var(--red)'}}>ENTRA</p>
                        <h5 className="fws-bold">Lorem Ipsum is dummy Text</h5>
                    </Card.Body>
                </Card>
                <Card className="p-0" style={{}}>
                    <Card.Img style={{height: '200px'}} className="img_wrap" src={g3} />
                    <Card.Body className="px-3">
                        <p className='mb-0' style={{color: 'var(--red)'}}>ENTRA</p>
                        <h5 className="fws-bold">Lorem Ipsum is dummy Text</h5>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default ProductCards2