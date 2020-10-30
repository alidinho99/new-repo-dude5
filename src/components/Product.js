import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { Link } from "gatsby"
const Product = ({
  id,
  productName,
  category,
  description,
  price,
  productImage,
}) => {
  return (
    <Link to={`/`} className="blog" key={id}>
      <article>
        {productImage && (
          <Image fluid={productImage.fluid} className="blog-img" />
        )}
        <div className="blog-card">
          <h4>{productName}</h4>
          <p>{description}</p>
          <div className="blog-footer">
            <p>{category}</p>
            <p>KD {price}</p>
            <button
              className="btn snipcart-add-item"
              data-item-id={id}
              data-item-name={productName}
              data-item-price={price}
              data-item-image={productImage.fluid.src}
              data-item-url="https://qualitykw.netlify.app/"
              data-item-custom1-name="Frame color"
              data-item-custom1-options="Black|Brown[+100.00]|Gold[+300.00]"
              data-item-max-quantity="3"
            >
              add to cart
            </button>
          </div>
        </div>
      </article>
    </Link>
  )
}

Product.propTypes = {
  category: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  productImage: PropTypes.object.isRequired,
}

export default Product
