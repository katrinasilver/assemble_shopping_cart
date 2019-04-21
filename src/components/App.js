import React, { PureComponent } from 'react'
import ReviewCart from './ReviewCart'

class App extends PureComponent {
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

  render() {
    return (
      <div className="App">
        <header className="bg-primary p-3">
          <div className="container text-white">Assemble Store</div>
        </header>
        <section className="cart container">
          <ReviewCart cart={this.state.cart} />
        </section>
      </div>
    )
  }
}

export default App;
