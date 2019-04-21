import React from 'react'
import { Link } from 'react-router-dom'

const Products = props => {
  return (
    <section className="container mt-5">
      <h1>Order Complete</h1>
      <p>Hooray! Way to order those products</p>
      <Link to={`/`} className="primary btn text-center">Go Home</Link>
    </section>
  )
}

export default Products