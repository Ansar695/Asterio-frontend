import React from 'react'
import img1 from "../../../assets/img1.jpg"
import img2 from "../../../assets/img2.jpg"

const HomeRounded = () => {
  return (
    <div className='highlighted_main'>
        <div className='container'>
            <div className="mb-4 d-flex justify-content-between">
                <h1 className="header_label">Highlighted </h1>
                <p to="#" style={{color: 'var(--grey)'}}>View All</p>
            </div>
            <div className='d-flex gap-4 flex-wrap align-items-center'>
                <div className="text-center">
                    <div className='rounded_cricle'>
                        <img src={img1} className="img_wrap" alt="" />
                    </div>
                    <p className='mt-3'>Test Products</p>
                </div>
                <div className="text-center">
                    <div className='rounded_cricle'>
                        <img src={img2} className="img_wrap" alt="" />
                    </div>
                    <p className='mt-3'>Test Products</p>
                </div>
                <div className="text-center">
                    <div className='rounded_cricle'>
                        <img src={img1} className="img_wrap" alt="" />
                    </div>
                    <p className='mt-3'>Test Products</p>
                </div>
                <div className="text-center">
                    <div className='rounded_cricle'>
                        <img src={img2} className="img_wrap" alt="" />
                    </div>
                    <p className='mt-3'>Test Products</p>
                </div>
                <div className="text-center">
                    <div className='rounded_cricle'>
                        <img src={img2} className="img_wrap" alt="" />
                    </div>
                    <p className='mt-3'>Test Products</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default HomeRounded