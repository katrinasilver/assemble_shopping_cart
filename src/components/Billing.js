import React from 'react';

const Billing = props => {
  return (
    <section className="payment col-sm-12 col-md-6 col-lg-6 mt-4">
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Name on Card</label>
          <input type="text" className="form-control" id="inputName" placeholder="Name on Card" />
        </div>
        <div className="form-group">
          <label htmlFor="inputCard">Card Number</label>
          <input type="number" className="form-control" id="inputCard" placeholder="XXXX XXXX XXXX XXXX" />
        </div>
        <div className="form-group">
          <label htmlFor="inputMonth">Expiration Date</label>
          <input type="date" className="form-control" id="inputMonth" />
          {/* <div className="form-group col-md-4">
            <input type="date" className="form-control" id="inputYear" placeholder="YYYY" />
          </div> */}
        </div>
        <div className="form-group">
          <label htmlFor="inputcvv">CVV</label>
          <input type="number" className="form-control" id="inputcvv" placeholder="CVV" />
        </div>
      </form>
    </section>
  )
}

export default Billing