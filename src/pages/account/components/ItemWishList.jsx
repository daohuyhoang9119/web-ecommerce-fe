import React from "react";
import { numberWithCommas } from "../../../utils/format";

export default function ItemWishList({
  discount_rate,
  images,
  name,
  real_price,
  price,
}) {
  return (
    <div className="col-6 col-md-4">
      <div className="card mb-7">
        {/* Image */}
        <div className="card-img">
          {/* Action */}
          <button className="btn btn-xs btn-circle btn-white-primary card-action card-action-right">
            <i className="fe fe-x" />
          </button>
          {/* Badge */}
          <span className="badge badge-dark card-badge card-badge-left text-uppercase">
            {discount_rate}%
          </span>
          {/* Button */}
          <button
            className="btn btn-xs btn-block btn-dark card-btn"
            data-toggle="modal"
            data-target="#modalProduct"
          >
            <i className="fe fe-eye mr-2 mb-1" /> Quick View
          </button>
          {/* Image */}
          <img className="card-img-top" src={images[0].medium_url} alt="..." />
        </div>
        {/* Body */}
        <div className="card-body font-weight-bold text-center">
          <a className="text-body" href="product.html">
            {name}
          </a>{" "}
          <br />
          <span>
            <span className="font-size-xs text-gray-350 text-decoration-line-through">
              {numberWithCommas(price)} VND}
            </span>
            <span className="text-primary">{numberWithCommas(real_price)}</span>
          </span>
        </div>
      </div>
    </div>
  );
}
