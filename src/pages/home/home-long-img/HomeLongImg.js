import React from 'react'
import { Card } from 'react-bootstrap'
import pic from "../../../assets/pic1.jpg"
import pic2 from "../../../assets/pic2.jpg"
import g1 from "../../../assets/g1.gif"
import g2 from "../../../assets/g2.jpg"
import g3 from "../../../assets/g3.jpg"

const HomeLongImg = () => {
  return (
    <div className='long_imgs_main my-5'>
        <div className="container">
            <div className="mb-4 d-flex justify-content-between">
                <h1 className="header_label">Other Products </h1>
                <p to="#" style={{color: 'var(--grey)'}}>View All</p>
            </div>
            <div className='d-flex flex-wrap justify-content-between'>
                <Card className="p-0 rounded-0">
                    <Card.Img src={pic}  style={{height: '200px'}} />
                    <Card.Body className="pt-1 text-center">
                        <p className='mt-1' style={{fontSize: '14px'}}>lorem ispum is dummy</p>
                    </Card.Body>
                </Card>
                <Card className="p-0 rounded-0">
                    <Card.Img src={pic2} style={{height: '200px'}} />
                    <Card.Body className="pt-1 text-center">
                        <p className='mt-1' style={{fontSize: '14px'}}>lorem ispum is dummy</p>
                    </Card.Body>
                </Card>
            </div>
            <div className='bottom_wrapper d-flex gap-1 flex-wrap justify-content-between'>
                <Card className="p-0" style={{}}>
                    <Card.Img style={{height: '200px'}} className="img_wrap" src={g1} />
                    <Card.Body className="pt-1 text-center">
                        <p className='mt-1' style={{fontSize: '14px'}}>lorem ispum is dummy</p>
                    </Card.Body>
                </Card>
                <Card className="p-0" style={{}}>
                    <Card.Img style={{height: '200px'}} className="img_wrap" src={g2} />
                    <Card.Body className="pt-1 text-center">
                        <p className='mt-1' style={{fontSize: '14px'}}>lorem ispum is dummy</p>
                    </Card.Body>
                </Card>
                <Card className="p-0" style={{}}>
                    <Card.Img style={{height: '200px'}} className="img_wrap" src={g3} />
                    <Card.Body className="pt-1 text-center">
                        <p className='mt-1' style={{fontSize: '14px'}}>lorem ispum is dummy</p>
                    </Card.Body>
                </Card>
            </div>
        </div>
    </div>
  )
}

export default HomeLongImg