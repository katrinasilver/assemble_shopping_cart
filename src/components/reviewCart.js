import React, { PureComponent } from 'react'
import Products from './Products'

export default class ReviewCart extends PureComponent {

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
            this.props.cart.map(item => 
              <Products 
                key={item.sku}
                {...item}
              />
            )
          }
          <tr>
            <th scope="row"></th>
            <td colSpan="1">Subtotal</td>
            <td>{ this.getTotal(this.props.cart)}</td>
          </tr>
          </tbody>
        </table>

        <button className="bg-primary">Checkout</button>
      </div>
    )
  }
}
