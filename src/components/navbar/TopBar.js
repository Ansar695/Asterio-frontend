import React from 'react'

const TopBar = () => {
  return (
    <div className='top_nav_bar d-flex align-items-center w-100' style={{height: "40px"}}>
        <div className='container'>
            <div className='d-flex justify-content-end'>
                <span className='d-flex align-items-center'>
                    <div 
                        style={{width: '18px',color: 'white', height: '18px', borderRadius: '50%', background: 'red'}}
                        className='d-flex align-items-center justify-content-center mx-2'
                    ><i className="fa fa-question" aria-hidden="true"></i></div>
                    <span>Help</span>
                </span>
                <span className='d-flex align-items-center' style={{marginLeft: '3%'}}>
                    <div 
                        style={{color: 'red', fontSize: '18px'}}
                        className='mx-2'
                    ><i className="fa fa-map-marker" aria-hidden="true"></i></div>
                    <span>Delivery area</span>
                </span>
            </div>
        </div>
    </div>
  )
}

export default TopBar