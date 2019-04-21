import React, { PureComponent } from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import BillingShipping from './BillingShipping'
import OrderComplete from './OrderComplete'
import ReviewCart from './ReviewCart'

class App extends PureComponent {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="bg-primary p-3">
            <div className="container text-white">Assemble Store</div>
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
