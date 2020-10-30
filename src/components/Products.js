import React from "react"
import Title from "./Title"
import Product from "./Product"
import { Link } from "gatsby"
export const Products = ({ products, title }) => {
  return (
    <section className="section">
      <Title title={title} />
      <div className="section-center blogs-center">
        {products.map(product => {
          return <Product key={product.node.id} {...product.node} />
        })}
      </div>
    </section>
  )
}
export default Products
