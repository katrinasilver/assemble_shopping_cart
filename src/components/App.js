import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import BillingShipping from './billingShipping'
import OrderComplete from './orderComplete'
import ReviewCart from './reviewCart'

class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="primary p-3">
            <div className="container">
              <Link className="text-white" to='/'>Assemble Store</Link>
            </div>
          </header>

          <Switch>
            <Route exact path='/' component={ReviewCart} />
            <Route exact path='/billing-details' component={BillingShipping} />
            <Route exact path='/order-complete' component={OrderComplete} />
          </Switch>
        </div>
      </BrowserRouter>
    )
  }
}

export default App
