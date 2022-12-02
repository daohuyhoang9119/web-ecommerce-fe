import { useSelector } from "react-redux";
import { numberWithCommas } from "../../../utils/format";
import { useRouteMatch } from "react-router";
import { Link } from "react-router-dom";
export default function OrderDetail() {
  let { order } = useSelector((state) => state.user);

  let { slug } = useRouteMatch().params;

  let dataRender = order.find((e) => e._id === slug);

  return (
    <>
      {/* Order */}
      <div className="card card-lg mb-5 bdataRender">
        <div className="card-body pb-0">
          {/* Info */}
          <div className="card card-sm">
            <div className="card-body bg-light">
              <div className="row">
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">Order No:</h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    {dataRender._id}
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                  {/* Text */}
                  <p className="mb-lg-0 font-size-sm font-weight-bold">
                    <time dateTime="2021-10-01">Today</time>
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">Status:</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    Awating Delivery
                  </p>
                </div>
                <div className="col-6 col-lg-3">
                  {/* Heading */}
                  <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm font-weight-bold">
                    {dataRender.amount && numberWithCommas(dataRender.amount)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="card-footer">
          {/* Heading */}
          <h6 className="mb-7">Order Items ({dataRender.listCart.length})</h6>
          {/* Divider */}
          <hr className="my-5" />
          {/* List group */}
          <ul className="list-group list-group-lg list-group-flush-y list-group-flush-x">
            {dataRender.listCart.map((e, i) => (
              <Link to={`/shop/${e.slug}`} className="list-group-item" key={i}>
                <div className="row align-items-center">
                  <div className="col-4 col-md-3 col-xl-2">
                    {/* Image */}
                    <a href="product.html">
                      <img
                        src={e.images[0].medium_url}
                        alt="..."
                        className="img-fluid"
                      />
                    </a>
                  </div>
                  <div className="col">
                    {/* Title */}
                    <p className="mb-4 font-size-sm font-weight-bold">
                      <a className="text-body" href="product.html">
                        {e.name} x {e.numCart}
                      </a>{" "}
                      <br />
                      <span className="text-muted">
                        {numberWithCommas(e.real_price)}
                      </span>
                    </p>
                    {/* Text */}
                    {/* <div className="font-size-sm text-muted">
                      Size: M <br />
                      Color: Red
                    </div> */}
                  </div>
                </div>
              </Link>
            ))}
          </ul>
        </div>
      </div>
      {/* Total */}
      <div className="card card-lg mb-5 bdataRender">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">Order Total</h6>
          {/* List group */}
          <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
            <li className="list-group-item d-flex">
              <span>Subtotal</span>
              <span className="ml-auto">
                {dataRender.amount && numberWithCommas(dataRender.amount)}
              </span>
            </li>
            <li className="list-group-item d-flex">
              <span>Tax</span>
              <span className="ml-auto">$0.00</span>
            </li>
            <li className="list-group-item d-flex">
              <span>Shipping</span>
              <span className="ml-auto">$0.00</span>
            </li>
            <li className="list-group-item d-flex font-size-lg font-weight-bold">
              <span>Total</span>
              <span className="ml-auto">
                {dataRender.amount && numberWithCommas(dataRender.amount)}
              </span>
            </li>
          </ul>
        </div>
      </div>
      {/* Details */}
      <div className="card card-lg bdataRender">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">Billing &amp; Shipping Details</h6>
          {/* Content */}
          <div className="row">
            <div className="col-12 col-md-4">
              {/* Heading */}
              <p className="mb-4 font-weight-bold">Shipping Address:</p>
              <p className="mb-7 mb-md-0 text-gray-500">
                {dataRender.city} <br />
                {dataRender.phone} <br />
                {dataRender.firstName} {dataRender.lastName} <br />
                {dataRender.address1} <br />
              </p>
            </div>
            <div className="col-12 col-md-4">
              {/* Heading */}
              <p className="mb-4 font-weight-bold">Shipping Method:</p>
              <p className="mb-7 text-gray-500">
                Standart Shipping <br />
                (5 - 7 days)
              </p>
              {/* Heading */}
              <p className="mb-4 font-weight-bold">Payment Method:</p>
              <p className="mb-0 text-gray-500">{dataRender.paymentMethod}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
