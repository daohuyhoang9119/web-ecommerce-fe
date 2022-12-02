import React from "react";

export default function Des({ description }) {
  return (
    <section className="pt-11">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Nav */}
            <div className="nav nav-tabs nav-overflow justify-content-start justify-content-md-center border-bottom">
              <a
                className="nav-link active"
                data-toggle="tab"
                href="#descriptionTab"
              >
                Description
              </a>
              <a className="nav-link" data-toggle="tab" href="#sizeTab">
                Size &amp; Fit
              </a>
              <a className="nav-link" data-toggle="tab" href="#shippingTab">
                Shipping &amp; Return
              </a>
            </div>
            {/* Content */}
            <div className="tab-content">
              <div className="tab-pane fade show active" id="descriptionTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    <div className="row">
                      <div className="col-12">
                        {/* Text */}
                        <p
                          className="text-gray-500"
                          dangerouslySetInnerHTML={{ __html: description }}
                        ></p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="sizeTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    <div className="row">
                      <div className="col-12 col-md-6">
                        {/* Text */}
                        <p className="mb-4">
                          <strong>Fitting information:</strong>
                        </p>
                        {/* List */}
                        <ul className="mb-md-0 text-gray-500">
                          <li>
                            Upon seas hath every years have whose subdue
                            creeping they're it were.
                          </li>
                          <li>Make great day bearing.</li>
                          <li>For the moveth is days don't said days.</li>
                        </ul>
                      </div>
                      <div className="col-12 col-md-6">
                        {/* Text */}
                        <p className="mb-4">
                          <strong>Model measurements:</strong>
                        </p>
                        {/* List */}
                        <ul className="list-unstyled text-gray-500">
                          <li>Height: 1.80 m</li>
                          <li>Bust/Chest: 89 cm</li>
                          <li>Hips: 91 cm</li>
                          <li>Waist: 65 cm</li>
                          <li>Model size: M</li>
                        </ul>
                        {/* Size */}
                        <p className="mb-0">
                          <img
                            src="/img/icons/icon-ruler.svg"
                            alt="..."
                            className="img-fluid"
                          />
                          <a
                            className="text-reset text-decoration-underline ml-3"
                            data-toggle="modal"
                            href="#modalSizeChart"
                          >
                            Size chart
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="shippingTab">
                <div className="row justify-content-center py-9">
                  <div className="col-12 col-lg-10 col-xl-8">
                    {/* Table */}
                    <div className="table-responsive">
                      <table className="table table-bordered table-sm table-hover">
                        <thead>
                          <tr>
                            <th>Shipping Options</th>
                            <th>Delivery Time</th>
                            <th>Price</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>Standard Shipping</td>
                            <td>Delivery in 5 - 7 working days</td>
                            <td>$8.00</td>
                          </tr>
                          <tr>
                            <td>Express Shipping</td>
                            <td>Delivery in 3 - 5 working days</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>1 - 2 day Shipping</td>
                            <td>Delivery in 1 - 2 working days</td>
                            <td>$12.00</td>
                          </tr>
                          <tr>
                            <td>Free Shipping</td>
                            <td>
                              Living won't the He one every subdue meat
                              replenish face was you morning firmament darkness.
                            </td>
                            <td>$0.00</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    {/* Caption */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
