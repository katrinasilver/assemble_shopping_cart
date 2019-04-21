import React, { PureComponent } from 'react'
import ReviewCart from './reviewCart'

class App extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      cart : [
        { sku: 38094374, unitPrice: 24.0, name: "Red Shirt", quantity: 2 }, 
        { sku: 38094375, unitPrice: 24.0, name: "Blue Shirt", quantity: 1 }, 
        { sku: 38094321, unitPrice: 12.0, name: "Blue socks", quantity: 4 }
      ]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="primary">Assemble Store</header>
        {
          this.state.cart.map(item =>
            <ReviewCart key={item.sku} id={item.sku} {...item} />
          )
        }
      </div>
    )
  }
}

export default App;
