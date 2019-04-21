import React from 'react';

const Shipping = props => {
  return (
    <section className="payment col-sm-12 col-md-6 col-lg-6 mt-4">
      <form>
        <div className="form-group">
          <label htmlFor="inputName">Full Name</label>
          <input type="text" className="form-control" id="inputName" placeholder="Full name" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress">Address</label>
          <input type="text" className="form-control" id="inputAddress" placeholder="1234 Main St" />
        </div>
        <div className="form-group">
          <label htmlFor="inputAddress2">Apartment/suite/etc</label>
          <input type="number" className="form-control" id="inputAddress2" placeholder="Apartment/suite/etc" />
        </div>
        <div className="form-row">
          <div className="form-group col-md-12">
            <label htmlFor="inputCity">City</label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputState">Country</label>
            <select id="inputState" className="form-control">
              <option>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputState">State</label>
            <select id="inputState" className="form-control" placeholder="State">
              <option>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="form-group col-md-12">
            <label htmlFor="inputZip">Zip</label>
            <input type="number" className="form-control" id="inputZip" placeholder="Zip code"/>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Shipping