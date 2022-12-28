import { Link } from "react-router-dom";

export default function Slider() {
  return (
    <section>
      <div
        className="row no-gutters d-block d-lg-flex flickity flickity-lg-none"
        data-flickity='{"watchCSS": true}'
      >
        {/* Item */}
        <div
          className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
          style={{ backgroundImage: "url(/img/img6.jpeg)" }}
        >
          <div
            className="card bg-dark-5 bg-hover text-white text-center"
            style={{ minHeight: "470px" }}
          >
            <div className="card-body mt-auto mb-n11 py-8">
              {/* Heading */}
              <h1 className="mb-0 font-weight-bolder">Apple</h1>
            </div>
            <div className="card-body mt-auto py-8">
              {/* Button */}
              <Link
                className="btn btn-white stretched-link"
                to="/shop?categories=1789&sort=real_price.-1"
              >
                Shop Apple <i className="fe fe-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
        {/* Card */}
        <div
          className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
          style={{ backgroundImage: "url(/img/img2.webp)" }}
        >
          <div
            className="card bg-dark-5 bg-hover text-white text-center"
            style={{ minHeight: "470px" }}
          >
            <div className="card-body mt-auto mb-n11 py-8">
              {/* Heading */}
              <h1 className="mb-0 font-weight-bolder">Samsung</h1>
            </div>
            <div className="card-body mt-auto py-8">
              {/* Button */}
              <Link
                className="btn btn-white stretched-link"
                to="/shop?categories=8594&sort=real_price.-1"
              >
                Shop Samsung <i className="fe fe-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
        {/* Card */}
        <div
          className="col-12 col-md-6 col-lg-4 d-flex flex-column bg-cover"
          style={{ backgroundImage: "url(/img/img3.png)" }}
        >
          <div
            className="card bg-dark-5 bg-hover text-white text-center"
            style={{ minHeight: "470px" }}
          >
            <div className="card-body mt-auto mb-n11 py-8">
              {/* Heading */}
              <h1 className="mb-0 font-weight-bolder">Xiaomi</h1>
            </div>
            <div className="card-body mt-auto py-8">
              {/* Button */}
              <Link
                className="btn btn-white stretched-link"
                to="/shop?categories=1801&sort=real_price.-1"
              >
                Shop Xiaomi <i className="fe fe-arrow-right ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
