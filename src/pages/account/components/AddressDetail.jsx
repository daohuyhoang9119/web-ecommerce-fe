export default function AddressDetail() {
  return (
    <form>
      <div className="row">
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="firstName">First Name *</label>
            <input
              className="form-control"
              id="firstName"
              type="text"
              placeholder="First Name"
              required
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="lastName">Last Name *</label>
            <input
              className="form-control"
              id="lastName"
              type="text"
              placeholder="Last Name"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="emailAddress">Email Address *</label>
            <input
              className="form-control"
              id="emailAddress"
              type="email"
              placeholder="Email Address"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="companyName">Company Name</label>
            <input
              className="form-control"
              id="companyName"
              type="text"
              placeholder="Company Name"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="country">Country *</label>
            <input
              className="form-control"
              id="country"
              type="text"
              placeholder="Country"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="addressLineOne">Address Line 1 *</label>
            <input
              className="form-control"
              id="addressLineOne"
              type="text"
              placeholder="Address Line 1"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="addressLineTwo">Address Line 2</label>
            <input
              className="form-control"
              id="addressLineTwo"
              type="text"
              placeholder="Address Line 2"
              required
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="townCity">Town / City *</label>
            <input
              className="form-control"
              id="townCity"
              type="text"
              placeholder="Town / City"
              required
            />
          </div>
        </div>
        <div className="col-12 col-md-6">
          <div className="form-group">
            <label htmlFor="zipPostcode">ZIP / Postcode *</label>
            <input
              className="form-control"
              id="zipPostcode"
              type="text"
              placeholder="ZIP / Postcode"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <label htmlFor="mobilePhone">Mobile Phone *</label>
            <input
              className="form-control"
              id="mobilePhone"
              type="tel"
              placeholder="Mobile Phone"
              required
            />
          </div>
        </div>
        <div className="col-12">
          <div className="form-group">
            <div className="custom-control custom-checkbox mb-3">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultDeliveryAddress"
              />
              <label
                className="custom-control-label"
                htmlFor="defaultDeliveryAddress"
              >
                Default delivery address
              </label>
            </div>
            <div className="custom-control custom-checkbox mb-0">
              <input
                type="checkbox"
                className="custom-control-input"
                id="defaultShippingAddress"
              />
              <label
                className="custom-control-label"
                htmlFor="defaultShippingAddress"
              >
                Default shipping address
              </label>
            </div>
          </div>
        </div>
      </div>
      {/* Button */}
      <button className="btn btn-dark" type="submit">
        Add Address
      </button>
    </form>
  );
}
