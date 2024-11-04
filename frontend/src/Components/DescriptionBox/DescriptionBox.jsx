import React from 'react'
import "./DescriptionBox.css"

const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">Description</div>
            <div className="descriptionbox-nav-box fade">Reviews(122)</div>
        </div>
        <div className="descriptionbox-description">
            <p>Step into the world of style with SHOPPER, your go-to destination for the latest trends in fashion. We offer a curated collection of clothing for men, women, and children, from timeless basics to bold statement pieces. No matter your style, we have something to help you express yourself and feel confident.</p>
            <p>
            <span>Our Collections:</span>
            <span>Women’s Fashion: From chic dresses and tops to denim, outerwear, and accessories.
            </span>
            <span>Men’s Fashion: Classic shirts, trendy jeans, comfortable activewear, and everything in between.
            </span>
            <span>Kids' Collection: Adorable, durable styles for your little ones, suited for play and everyday wear.
            </span>
            <span>Accessories: Complete your look with our range of bags, shoes, jewelry, and more.
            </span>
            </p>
        </div>
      
    </div>
  )
}

export default DescriptionBox
