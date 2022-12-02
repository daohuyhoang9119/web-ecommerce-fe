import { Link, useRouteMatch } from "react-router-dom";
import { numberWithCommas } from "../../../utils/format";
import React from "react";

export default function OrderItem({ order }) {
  const { url } = useRouteMatch();

  const render = (arr = []) => {
    let temp = [];
    arr.map((e, i) => {
      if (i < 4) temp.push(e);
    });
    return temp;
  };

  let dataRender = render(order?.listCart);
  return (
    <div className="card card-lg mb-5 border">
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
                  {order?._id}
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">Shipped date:</h6>
                {/* Text */}
                <p className="mb-lg-0 font-size-sm font-weight-bold">
                  <time dateTime="2019-10-01">{order.day}</time>
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">Status:</h6>
                {/* Text */}
                <p className="mb-0 font-size-sm font-weight-bold">
                  {order.status}
                </p>
              </div>
              <div className="col-6 col-lg-3">
                {/* Heading */}
                <h6 className="heading-xxxs text-muted">Order Amount:</h6>
                {/* Text */}
                <p className="mb-0 font-size-sm font-weight-bold">
                  {order?.amount && numberWithCommas(order?.amount)}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="card-footer">
        <div className="row align-items-center">
          <div className="col-12 col-lg-6">
            <div className="form-row mb-4 mb-lg-0">
              {dataRender?.map((e) => (
                <img src={e.images[0].small_url} className="img" />
              ))}
              {order?.listCart.length > 4 ? (
                <div className="col-3">
                  {/* Image */}
                  <div className="embed-responsive embed-responsive-1by1 bg-light">
                    <a
                      className="embed-responsive-item embed-responsive-item-text text-reset"
                      href="#!"
                    >
                      <div className="font-size-xxs font-weight-bold">
                        +{order?.listCart.length - 3} <br /> more
                      </div>
                    </a>
                  </div>
                </div>
              ) : (
                ""
              )}
            </div>
          </div>
          <div className="col-12 col-lg-6">
            <div className="form-row">
              <div className="col-6">{/* Button */}</div>
              <div className="col-6">
                {/* Button */}
                <Link
                  className="btn btn-sm btn-block btn-outline-dark"
                  to={`${url}/${order._id}`}
                >
                  Order Details
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
