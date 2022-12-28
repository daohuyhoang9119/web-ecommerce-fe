import OrderCart from "./OrderCart";
import Payment from "./Payment";
import Title from "./Title";
import { useSelector, useDispatch } from "react-redux";
import useFormValidate from "../../core/ReactHook/useFormValidate";
import Below from "./Below";
import cartApi from "../../api/cartApi";
import { Redirect, useHistory } from "react-router";
import { clearCart } from "../../redux/action/cart";
export default function CheckOut() {
  let $ = window.$;
  let history = useHistory();
  const { listCart, num } = useSelector((state) => state.cart);
  let dispatch = useDispatch();
  const { form, inputChange, error, setForm, onSubmit } = useFormValidate(
    {
      firstName: "",
      lastName: "",
      email: "",
      companyName: "",
      shipping: "",
      shipping_different: false,
      zip: "",
      city: "",
      country: "",
      payment: "card",
      zip_different: "",
      city_different: "",
      country_different: "",
      num_card: "",
      name_card: "",
      cvv_card: "",
    },
    {
      rule: {
        firstName: {
          required: true,
          pattern: "name",
        },
        num_card: {
          required: true,
        },
        name_card: {
          required: true,
        },
        cvv_card: {
          required: true,
        },
        lastName: {
          required: true,
          pattern: "name",
        },
        email: {
          required: true,
          pattern: "email",
        },
        companyName: {
          required: true,
          pattern: "name",
        },
        zip: {
          required: true,
        },
        city: {
          required: true,
        },
        country: {
          required: true,
        },
        zip_different: {
          required: true,
        },
        city_different: {
          required: true,
        },
        country_different: {
          required: true,
        },
      },
      message: {
        firstName: {
          required: "Please fill your FirstName",
        },
        lastName: {
          required: "Please fill your LastName",
        },
        companyName: {
          required: "Please fill your CompanyName",
        },
        email: {
          required: "Please fill your email",
        },
      },
    }
  );
  let time = $.date("m-d-Y h:i:s");

  async function handleSubmit(e) {
    e.preventDefault();
    let exclude = {};
    if (!form.shipping_different) {
      exclude = {
        zip_different: 1,
        city_different: 1,
        country_different: 1,
      };
    }
    if (form.payment !== "credit") {
      exclude = {
        ...exclude,
        num_card: 1,
        name_card: 1,
        cvv_card: 1,
      };
    }
    let err = onSubmit({ exclude });
    if (Object.keys(err).length === 0) {
      console.log(form);
      console.log(listCart);
      let res = await cartApi.order({ ...form, day: time });

      if (res.data) {
        dispatch(clearCart());
        history.push(`/order-complete/${res.data._id}`);
      }
    }
  }

  return (
    <>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb */}
              <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="shopping-cart.html">
                    Shopping Cart
                  </a>
                </li>
                <li className="breadcrumb-item active">Checkout</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <Title />
          <div className="row">
            <div className="col-12 col-md-7">
              {/* Form */}
              <form>
                {/* Heading */}
                <h6 className="mb-7">Billing Details</h6>
                {/* Billing details */}
                <div className="row mb-9">
                  <div className="col-12 col-md-6">
                    {/* First Name */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingFirstName">
                        First Name *
                      </label>
                      <input
                        name="firstName"
                        className={`form-control form-control-sm ${
                          error?.firstName ? "error" : ""
                        }`}
                        placeholder="First Name"
                        required
                        value={form.firstName}
                        onChange={inputChange}
                        type="text"
                      />
                      <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                        {error?.firstName}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* Last Name */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingLastName">
                        Last Name *
                      </label>
                      <input
                        name="lastName"
                        type="text"
                        className={`form-control form-control-sm ${
                          error?.lastName ? "error" : ""
                        }`}
                        placeholder="Last Name"
                        required
                        value={form.lastName}
                        onChange={inputChange}
                      />
                      <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                        {error?.lastName}
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Email */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingEmail">Email *</label>
                      <input
                        className={`form-control form-control-sm ${
                          error?.email ? "error" : ""
                        }`}
                        id="checkoutBillingEmail"
                        type="text"
                        placeholder="Email"
                        required
                        value={form.email}
                        name="email"
                        onChange={inputChange}
                      />
                      <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                        {error?.email}
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Company Name */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingCompany">
                        Company name *
                      </label>
                      <input
                        className={`form-control form-control-sm ${
                          error?.companyName ? "error" : ""
                        }`}
                        id="checkoutBillingCompany"
                        type="text"
                        name="companyName"
                        value={form.companyName}
                        onChange={inputChange}
                        placeholder="Company name (optional)"
                      />
                      <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                        {error?.companyName}
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Country */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingCountry">Country *</label>
                      <input
                        className={`form-control form-control-sm ${
                          error?.country ? "error" : ""
                        }`}
                        id="checkoutBillingCountry"
                        type="text"
                        placeholder="Country"
                        value={form.country}
                        onChange={inputChange}
                        name="country"
                      />
                      <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                        {error?.country}
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Address Line 1 */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingAddress">
                        Address Line 1 *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="checkoutBillingAddress"
                        type="text"
                        placeholder="Address Line 1"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Address Line 2 */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingAddressTwo">
                        Address Line 2
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="checkoutBillingAddressTwo"
                        type="text"
                        placeholder="Address Line 2 (optional)"
                      />
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* Town / City */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingTown">Town / City *</label>
                      <input
                        className={`form-control form-control-sm ${
                          error?.city ? "error" : ""
                        }`}
                        id="checkoutBillingTown"
                        type="text"
                        placeholder="Town / City"
                        value={form.city}
                        onChange={inputChange}
                        name="city"
                      />
                      <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                        {error?.city}
                      </p>
                    </div>
                  </div>
                  <div className="col-12 col-md-6">
                    {/* ZIP / Postcode */}
                    <div className="form-group">
                      <label htmlFor="checkoutBillingZIP">
                        ZIP / Postcode *
                      </label>
                      <input
                        className={`form-control form-control-sm ${
                          error?.zip ? "error" : ""
                        }`}
                        id="checkoutBillingZIP"
                        type="text"
                        placeholder="ZIP / Postcode"
                        value={form.zip}
                        onChange={inputChange}
                        name="zip"
                      />
                      <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                        {error?.zip}
                      </p>
                    </div>
                  </div>
                  <div className="col-12">
                    {/* Mobile Phone */}
                    <div className="form-group mb-0">
                      <label htmlFor="checkoutBillingPhone">
                        Mobile Phone *
                      </label>
                      <input
                        className="form-control form-control-sm"
                        id="checkoutBillingPhone"
                        type="tel"
                        placeholder="Mobile Phone"
                        required
                      />
                    </div>
                  </div>
                </div>
                {/* Heading */}
                <h6 className="mb-7">Shipping Details</h6>
                {/* Shipping details */}
                <div className="table-responsive mb-6">
                  <table className="table table-bordered table-sm table-hover mb-0">
                    <tbody>
                      <tr>
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              className="custom-control-input"
                              id="checkoutShippingStandard"
                              name="shipping"
                              type="radio"
                              value={8}
                              checked={form.shipping == 8}
                              onChange={inputChange}
                            />
                            <label
                              className="custom-control-label text-body text-nowrap"
                              htmlFor="checkoutShippingStandard"
                            >
                              Standard Shipping
                            </label>
                          </div>
                        </td>
                        <td>Delivery in 5 - 7 working days</td>
                        <td>$8.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              className="custom-control-input"
                              id="checkoutShippingExpress"
                              name="shipping"
                              type="radio"
                              value={12}
                              checked={form.shipping == 12}
                              onChange={inputChange}
                            />
                            <label
                              className="custom-control-label text-body text-nowrap"
                              htmlFor="checkoutShippingExpress"
                            >
                              Express Shipping
                            </label>
                          </div>
                        </td>
                        <td>Delivery in 3 - 5 working days</td>
                        <td>$12.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              className="custom-control-input"
                              id="checkoutShippingShort"
                              name="shipping"
                              type="radio"
                              value={18}
                              checked={form.shipping == 18}
                              onChange={inputChange}
                            />
                            <label
                              className="custom-control-label text-body text-nowrap"
                              htmlFor="checkoutShippingShort"
                            >
                              1 - 2 Shipping
                            </label>
                          </div>
                        </td>
                        <td>Delivery in 1 - 2 working days</td>
                        <td>$18.00</td>
                      </tr>
                      <tr>
                        <td>
                          <div className="custom-control custom-radio">
                            <input
                              className="custom-control-input"
                              id="checkoutShippingFree"
                              name="shipping"
                              type="radio"
                              value={0}
                              checked={form.shipping == 0}
                              onChange={inputChange}
                            />
                            <label
                              className="custom-control-label text-body text-nowrap"
                              htmlFor="checkoutShippingFree"
                            >
                              Free Shipping
                            </label>
                          </div>
                        </td>
                        <td>
                          Living won't the He one every subdue meat replenish
                          face was you morning firmament darkness.
                        </td>
                        <td>$0.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                {/* Address */}
                <div className="mb-9">
                  {/* Checkbox */}
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="checkoutShippingAddress"
                      type="checkbox"
                      name="shipping_different"
                      onChange={inputChange}
                      value={form.shipping_different}
                    />
                    <label
                      className="custom-control-label font-size-sm"
                      data-toggle="collapse"
                      data-target="#checkoutShippingAddressCollapse"
                      htmlFor="checkoutShippingAddress"
                    >
                      Ship to a different address?
                    </label>
                  </div>
                  {/* Collapse */}
                  <div
                    className="collapse"
                    id="checkoutShippingAddressCollapse"
                  >
                    <div className="row mt-6">
                      <div className="col-12">
                        {/* Country */}
                        <div className="form-group">
                          <label htmlFor="checkoutShippingAddressCountry">
                            Country *
                          </label>
                          <input
                            className={`form-control form-control-sm ${
                              error?.country_different ? "error" : ""
                            }`}
                            id="checkoutShippingAddressCountry"
                            type="text"
                            placeholder="Country"
                            value={form.country_different}
                            onChange={inputChange}
                            name="country_different"
                          />
                          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                            {error?.country_different}
                          </p>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* Address Line 1 */}
                        <div className="form-group">
                          <label htmlFor="checkoutShippingAddressLineOne">
                            Address Line 1 *
                          </label>
                          <input
                            className="form-control form-control-sm"
                            id="checkoutShippingAddressLineOne"
                            type="text"
                            placeholder="Address Line 1"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        {/* Address Line 2 */}
                        <div className="form-group">
                          <label htmlFor="checkoutShippingAddressLineTwo">
                            Address Line 2
                          </label>
                          <input
                            className="form-control form-control-sm"
                            id="checkoutShippingAddressLineTwo"
                            type="text"
                            placeholder="Address Line 2 (optional)"
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        {/* Town / City */}
                        <div className="form-group">
                          <label htmlFor="checkoutShippingAddressTown">
                            Town / City *
                          </label>
                          <input
                            className={`form-control form-control-sm ${
                              error?.city_different ? "error" : ""
                            }`}
                            id="checkoutShippingAddressTown"
                            type="text"
                            placeholder="Town / City"
                            value={form.city_different}
                            onChange={inputChange}
                            name="city_different"
                          />
                          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                            {error?.city_different}
                          </p>
                        </div>
                      </div>
                      <div className="col-6">
                        {/* Town / City */}
                        <div className="form-group">
                          <label htmlFor="checkoutShippingAddressZIP">
                            ZIP / Postcode *
                          </label>
                          <input
                            className={`form-control form-control-sm ${
                              error?.zip_different ? "error" : ""
                            }`}
                            id="checkoutShippingAddressZIP"
                            type="text"
                            placeholder="ZIP / Postcode"
                            value={form.zip_different}
                            onChange={inputChange}
                            name="zip_different"
                          />
                          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                            {error?.zip_different}
                          </p>
                        </div>
                      </div>
                      <div className="col-12">
                        {/* Button */}
                        <button
                          className="btn btn-sm btn-outline-dark"
                          type="submit"
                        >
                          Save Address
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Heading */}
                <h6 className="mb-7">Payment</h6>
                {/* List group */}
                <div className="list-group list-group-sm mb-7">
                  <div className="list-group-item">
                    {/* Radio */}
                    <div className="custom-control custom-radio">
                      {/* Input */}
                      <input
                        className="custom-control-input"
                        id="checkoutPaymentCard"
                        name="payment"
                        type="radio"
                        data-toggle="collapse"
                        data-action="show"
                        data-target="#checkoutPaymentCardCollapse"
                        value="credit"
                        onChange={inputChange}
                        checked={form.payment == "credit"}
                      />
                      {/* Label */}
                      <label
                        className="custom-control-label font-size-sm text-body text-nowrap"
                        htmlFor="checkoutPaymentCard"
                      >
                        Credit Card{" "}
                        <img
                          className="ml-2"
                          src="/img/brands/color/cards.svg"
                          alt="..."
                        />
                      </label>
                    </div>
                  </div>
                  <div
                    className="list-group-item collapse py-0"
                    id="checkoutPaymentCardCollapse"
                  >
                    {/* Form */}
                    <div className="form-row py-5">
                      <div className="col-12">
                        <div className="form-group mb-4">
                          <label
                            className="sr-only"
                            htmlFor="checkoutPaymentCardNumber"
                          >
                            Card Number
                          </label>
                          <input
                            className={`form-control form-control-sm ${
                              error?.num_card ? "error" : ""
                            }`}
                            id="checkoutPaymentCardNumber"
                            type="text"
                            placeholder="Card Number *"
                            name="num_card"
                            value={form.num_card}
                            onChange={inputChange}
                          />
                          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                            {error?.num_card}
                          </p>
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group mb-4">
                          <label
                            className="sr-only"
                            htmlFor="checkoutPaymentCardName"
                          >
                            Name on Card
                          </label>
                          <input
                            className={`form-control form-control-sm ${
                              error?.name_card ? "error" : ""
                            }`}
                            id="checkoutPaymentCardName"
                            type="text"
                            placeholder="Name on Card *"
                            name="name_card"
                            value={form.name_card}
                            onChange={inputChange}
                          />
                          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                            {error?.name_card}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group mb-md-0">
                          <label
                            className="sr-only"
                            htmlFor="checkoutPaymentMonth"
                          >
                            Month
                          </label>
                          <select
                            className="custom-select custom-select-sm"
                            id="checkoutPaymentMonth"
                          >
                            <option>January</option>
                            <option>February</option>
                            <option>March</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="form-group mb-md-0">
                          <label
                            className="sr-only"
                            htmlFor="checkoutPaymentCardYear"
                          >
                            Year
                          </label>
                          <select
                            className="custom-select custom-select-sm"
                            id="checkoutPaymentCardYear"
                          >
                            <option>2017</option>
                            <option>2018</option>
                            <option>2019</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="input-group input-group-merge">
                          <input
                            className={`form-control form-control-sm ${
                              error?.cvv_card ? "error" : ""
                            }`}
                            id="checkoutPaymentCardCVV"
                            type="text"
                            placeholder="CVV *"
                            name="cvv_card"
                            value={form.cvv_card}
                            onChange={inputChange}
                          />{" "}
                          <div className="input-group-append">
                            <span
                              className="input-group-text"
                              data-toggle="popover"
                              data-placement="top"
                              data-trigger="hover"
                              data-content="The CVV Number on your credit card or debit card is a 3 digit number on VISA, MasterCard and Discover branded credit and debit cards."
                            >
                              <i className="fe fe-help-circle" />
                            </span>
                          </div>
                          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
                            {error?.cvv_card}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="list-group-item">
                    {/* Radio */}
                    <div className="custom-control custom-radio">
                      {/* Input */}
                      <input
                        className="custom-control-input"
                        id="checkoutPaymentPaypal"
                        name="payment"
                        type="radio"
                        data-toggle="collapse"
                        data-action="hide"
                        data-target="#checkoutPaymentCardCollapse"
                        value="card"
                        onChange={inputChange}
                        checked={form.payment == "card"}
                      />
                      {/* Label */}
                      <label
                        className="custom-control-label font-size-sm text-body text-nowrap"
                        htmlFor="checkoutPaymentPaypal"
                      >
                        <img src="/img/brands/color/paypal.svg" alt="..." />
                      </label>
                    </div>
                  </div>
                </div>
                {/* Notes */}
                <textarea
                  className="form-control form-control-sm mb-9 mb-md-0 font-size-xs"
                  rows={5}
                  placeholder="Order Notes (optional)"
                  defaultValue={""}
                />
              </form>
            </div>
            <div className="col-12 col-md-5 col-lg-4 offset-lg-1">
              {/* Heading */}
              <h6 className="mb-7">Order Items ({num})</h6>
              {/* Divider */}
              <hr className="my-7" />
              {/* List group */}
              <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x mb-7">
                {listCart.map((e) => (
                  <OrderCart key={e._id} {...e} />
                ))}
              </ul>
              {/* Card */}
              <Payment />
              <div className="col-12 col-md-5 col-lg-4 offset-lg-1"></div>{" "}
              <p className="mb-7 font-size-xs text-gray-500">
                Your personal data will be used to process your order, support
                your experience throughout this website, and for other purposes
                described in our privacy policy.
              </p>
              {/* Button */}
              <button onClick={handleSubmit} className="btn btn-block btn-dark">
                Place Order
              </button>
              {/* Disclaimer */}
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <Below />
    </>
  );
}
