export default function PaymentMethod() {
  return (
    <>
      <form>
        <div className="form-group card card-sm border">
          <div className="card-body">
            <div className="custom-control custom-radio">
              <input
                className="custom-control-input collapsed"
                id="checkoutPaymentCard"
                name="payment"
                type="radio"
                defaultChecked
              />
              <label
                className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap"
                htmlFor="checkoutPaymentCard"
              >
                I want to add Debit / Credit Card{" "}
                <img
                  className="ml-2"
                  src="/img/brands/color/cards.svg"
                  alt="..."
                />
              </label>
            </div>
          </div>
        </div>
        <div className="form-group card card-sm border">
          <div className="card-body">
            <div className="custom-control custom-radio">
              <input
                className="custom-control-input"
                id="checkoutPaymentPaypal"
                name="payment"
                type="radio"
              />
              <label
                className="custom-control-label d-flex justify-content-between font-size-sm text-body text-nowrap"
                htmlFor="checkoutPaymentPaypal"
              >
                I want to add PayPall{" "}
                <img src="/img/brands/color/paypal.svg" alt="..." />
              </label>
            </div>
          </div>
        </div>
        <button className="btn btn-dark custom" type="submit">
          Continue <i className="fe fe-arrow-right ml-2" />
        </button>
      </form>
      <h6 className="mb-7">Add Debit / Credit Card</h6>
      <form>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="cardNumber">Card Number *</label>
              <input
                className="form-control"
                id="cardNumber"
                type="text"
                placeholder="Card Number"
                required
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className="form-group">
              <label htmlFor="nameOnCard">Name on Card *</label>
              <input
                className="form-control"
                id="nameOnCard"
                type="text"
                placeholder="Name on Card"
                required
              />
            </div>
          </div>
          <div className="col-12">
            <label>Expiry Date *</label>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label className="sr-only" htmlFor="paymentMonth">
                Month
              </label>
              <select className="custom-select" id="paymentMonth" required>
                <option selected disabled value>
                  Month *
                </option>
                <option>January</option>
                <option>February</option>
                <option>March</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <label className="sr-only" htmlFor="paymentCardYear">
                Year
              </label>
              <select className="custom-select" id="paymentCardYear" required>
                <option selected disabled value>
                  Year *
                </option>
                <option>2017</option>
                <option>2018</option>
                <option>2019</option>
              </select>
            </div>
          </div>
          <div className="col-12 col-md-4">
            <div className="form-group">
              <div className="input-group input-group-merge">
                <input
                  className="form-control"
                  id="paymentCardCVV"
                  type="text"
                  placeholder="CVV *"
                  required
                />
                <div className="input-group-append">
                  <span
                    className="input-group-text"
                    data-toggle="popover"
                    data-placement="top"
                    data-trigger="hover"
                    data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards."
                    data-original-title
                    title
                  >
                    <i className="fe fe-help-circle" />
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="form-group">
              <div className="custom-control custom-checkbox mb-3">
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="defaultPaymentMethod"
                />
                <label
                  className="custom-control-label"
                  htmlFor="defaultPaymentMethod"
                >
                  Default payment method
                </label>
              </div>
            </div>
          </div>
        </div>
        <button className="btn btn-dark" type="submit">
          Add Card
        </button>
      </form>
    </>
  );
}
