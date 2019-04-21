import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'
import Billing from './Billing'
import Shipping from './Shipping'

export default class BillingShipping extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      billing: [
        // add fields here
      ],
      shipping: [
        // add fields here
      ]
    }
  }

  render() {
    return (
      <div className="container mt-5">
        <h1>Checkout</h1>

        <div className="main row">

          <Billing />
          <Shipping />
        </div>

        <Link to={`/order-complete`} className="btn-primary btn">Place Order</Link>
      </div>
    )
  }
}
