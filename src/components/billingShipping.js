import React, { PureComponent } from 'react'

export default class BillingShipping extends PureComponent {

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
