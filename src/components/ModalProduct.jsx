import React from "react";
import { numberWithCommas } from "../utils/format";

import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
export default function ModalProduct() {
  let { productDetail } = useSelector((state) => state.product);

  return (
    <div
      className="modal fade"
      id="modalProduct"
      tabIndex={-1}
      role="dialog"
      aria-hidden="true"
    >
      <div
        className="modal-dialog modal-dialog-centered modal-xl"
        role="document"
      >
        <div className="modal-content">
          {/* Close */}
          <button
            type="button"
            className="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <i className="fe fe-x" aria-hidden="true" />
          </button>
          {/* Content */}
          <div className="container-fluid px-xl-0">
            <div className="row align-items-center mx-xl-0">
              <div className="col-12 col-lg-6 col-xl-5 py-4 py-xl-0 px-xl-0">
                {/* Image */}
                {productDetail.images && (
                  <img
                    className="img-fluid"
                    src={productDetail?.images[0].large_url}
                    alt="..."
                  />
                )}
                {/* Button */}
              </div>
              <div className="col-12 col-lg-6 col-xl-7 py-9 px-md-9">
                {/* Heading */}
                <h4 className="mb-3">{productDetail.name}</h4>
                {/* Price */}
                <div className="mb-7">
                  <span className="h5">
                    {productDetail.real_price &&
                      numberWithCommas(productDetail.real_price)}
                  </span>
                  <span className="font-size-sm">(In Stock)</span>
                </div>
                {/* Form */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
