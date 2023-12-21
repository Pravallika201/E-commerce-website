import React from 'react'
import './DescriptionBox.css'

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className='descriptionbox-navigator'>
            <div className='descriptionbox-nav-box'>Description</div>
            <div className='descriptionbox-nav-box fade'>Reviews (122)</div>
        </div>
        <div className='descriptionbox-description'>
            <p>To be precise, eCommerce websites include visually appealing designs
                 to highlight the products and services that you’ve to offer. Moreover,
                  these websites integrate other various sophisticated features. Such as 
                  filtering products, shipping methods, payment portals, and other services.</p>
            <p>To be precise, eCommerce websites include visually appealing designs to 
                highlight the products and services that you’ve to offer. Moreover, 
                these websites integrate other various sophisticated features. Such as filtering products.</p>
        </div>
    </div>
  )
}

export default DescriptionBox