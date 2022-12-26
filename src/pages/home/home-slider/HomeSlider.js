import React from 'react'
import { Button, Carousel } from 'react-bootstrap'
import bg1 from "../../../assets/bg1.jpg"
import bg2 from "../../../assets/bg2.jpg"
import bg3 from "../../../assets/bg3.jpg"

const HomeSlider = () => {
  return (
    <div className='slider_main'>
        <Carousel>
            <Carousel.Item>
                <img
                className="img_wrap"
                src={bg1}
                alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    <Button className="bg-" variant="danger">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="img_wrap"
                src={bg2}
                alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Buy one Get One Free</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Button className="bg-" variant="danger">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                className="img_wrap"
                src={bg3}
                alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                    <Button className="bg-" variant="danger">Learn More</Button>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    </div>
  )
}

export default HomeSlider