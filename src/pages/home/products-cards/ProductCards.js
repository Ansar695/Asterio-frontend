import React from 'react'
import { Card } from 'react-bootstrap'
import g1 from "../../../assets/g1.gif"
import g2 from "../../../assets/g2.jpg"
import g3 from "../../../assets/g3.jpg"

const ProductCards = () => {
  return (
    <div className='products_cards_main my-5'>
        <div className="container">
            <div className="mb-4 d-flex justify-content-between">
                <h1 className="header_label">Other Products </h1>
                <p to="#" style={{color: 'var(--grey)'}}>View All</p>
            </div>
            <div className='d-flex gap-1 flex-wrap justify-content-between'>
                <Card className="p-0 rounded-0">
                    <img src={g1} className="img_wrap" alt="" />
                </Card>
                <Card className="p-0 rounded-0">
                    <img src={g2} className="img_wrap" alt="" />
                </Card>
                <Card style={{minWidth: '40%'}} className="inner_card_wrapper p-0 rounded-0">
                    <div style={{width: '210px', height: '150px'}}>
                        <img src={g1} className="img_wrap" alt="" />
                    </div>
                    <div style={{width: '210px', height: '150px'}}>
                        <img src={g3} className="img_wrap" alt="" />
                    </div>
                    <div style={{width: '210px', height: '150px'}}>
                        <img src={g2} className="img_wrap" alt="" />
                    </div>
                    <div style={{width: '210px', height: '150px'}}>
                        <img src={g3} className="img_wrap" alt="" />
                    </div>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default ProductCards