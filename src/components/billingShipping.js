import React, { PureComponent } from 'react'
import { Link } from 'react-router-dom'

export default class BillingShipping extends PureComponent {

  render() {
    return (
      <div className="container mt-5">
        Hello from Billing
        <Link to={`/order-complete`} className="btn-primary btn">Place Order</Link>
      </div>
    )
  }
}
