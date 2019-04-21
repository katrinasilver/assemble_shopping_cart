import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Products from './Products'

export default class ReviewCart extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      cart : [
        { sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2, image: "https://epicsports.cachefly.net/variants/70998/6026/300/gildan-heavy-cotton-adult-t-shirts.jpg" }, 
        { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1, image: "https://epicsports.cachefly.net/variants/70998/6026/300/gildan-heavy-cotton-adult-t-shirts.jpg" }, 
        { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4, image: "https://epicsports.cachefly.net/variants/70998/6026/300/gildan-heavy-cotton-adult-t-shirts.jpg" }
      ]
    }
  }

  getTotal = (products) => 
    products.reduce(( total, price ) => total + price.unitPrice , 0)
    .toLocaleString('en-IN', {style: 'currency', currency: 'USD'}).replace('US', '')

  render() {
    return (
      <div className="container mt-5">
        <table className="table table-borderless">
          <thead>
            <tr>
              <th scope="col">Your Cart</th>
              <th scope="col">Quantity</th>
              <th scope="col">Price</th>
            </tr>
          </thead>
          <tbody>
          {
            this.state.cart.map(item => 
              <Products 
              key={item.sku}
              {...item}
              />
              )
            }
          <tr>
            <th scope="row"></th>
            <td colSpan="1">Subtotal</td>
            <td>{ this.getTotal(this.state.cart)}</td>
          </tr>
          </tbody>
        </table>
        <Link to={`/billing-details`} className="btn-primary btn">Checkout</Link>
      </div>
    )
  }
}
