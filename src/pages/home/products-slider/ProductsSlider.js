import React, { useState } from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Button, Card } from 'react-bootstrap';
import { NavLink } from "react-router-dom"
import p1 from "../../../assets/p1.jpg"

const ProductsSlider = () => {
    const[data, setData] = useState([
        {id: 1},
        {id: 1},
        {id: 1},
        {id: 1},
        {id: 1},
        {id: 1},
        {id: 1},
        {id: 1},
    ])

    const responsive = {
        0: {
            items: 1,
        },
        524: {
            items: 2,
            itemsFit: 'cover',
        },
        824: {
            items: 3,
            itemsFit: 'cover',
        },
        1024: {
            items: 4,
            itemsFit: 'cover',
        },
        1424: {
            items: 5,
            itemsFit: 'cover',
        }
      }

    const items = [];

    
    data&&data.map((d) => {
        items.push(<Card className="p-2" key={d.id}>
        <Card.Img variant="top" src={p1} />
        <Card.Body className='p-2'>
            <Card.Title>Card Title</Card.Title>
            <Card.Text className="py-0 my-0">
                Some quick example text to build.
            </Card.Text>
            <small>Weight 150g</small>

            <div className="my-4 py-2">
                <h5 className="my-0" style={{color: 'var(--red)'}}>5.99$</h5>
                <small>3.99$/kg</small><br />
                <small>Recommended RRP 7.75$/unit</small>
            </div>

            <div className='d-flex justify-content-between'>
                <span>
                    <i class="fa fa-file-text-o" style={{color: "red",fontSize: '30px'}} aria-hidden="true"></i>
                    {/* <i className="fa fa-camera" style={{color: "red",fontSize: '30px'}}></i> */}
                </span>
                <Button variant="danger" className="btn_add_to_cart">Cart</Button>
            </div>
        </Card.Body>
    </Card>)
    })

  return (
    <div className='products_slider_main my-5'>
        <div className='container'>
            <div className='mb-3 d-flex justify-content-between'>
                <h1 className="header_label">Our Products</h1>
                <p to="#" style={{color: 'var(--grey)'}}>View All</p>
            </div>
            <AliceCarousel responsive={responsive} mouseTracking items={items} />
        </div>
    </div>
  )
}

export default ProductsSlider