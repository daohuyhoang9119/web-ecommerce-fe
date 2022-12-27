import { Link } from "react-router-dom";
export default function BestPick() {
  return (
    <section className="pt-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            {/* Preheading */}
            <h6 className="heading-xxs mb-3 text-gray-400">New Collection</h6>
            {/* Heading */}
            <h2 className="mb-4">Best Picks 2022</h2>
            {/* Subheading */}
            <p className="mb-10 text-gray-500">
              Appear, dry there darkness they're seas, dry waters thing fly
              midst. Beast, above fly brought Very green.
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
            {/* Card */}
            <div
              className="card mb-7 text-white"
              style={{
                minHeight: "400px",
                backgroundImage: "url(/img/img7.jpeg)",
              }}
            >
              {/* Background */}
              <div className="card-bg">
                <div
                  className="card-bg-img bg-cover"
                  style={{
                    backgroundImage: "url(/img/products/img7.jpeg)",
                  }}
                />
              </div>
              {/* Body */}
              <div className="card-body my-auto text-center">
                {/* Heading */}
                <h4 className="mb-0">Iphone Collection</h4>
                {/* Link */}
                <Link
                  className="btn btn-link stretched-link text-reset"
                  to="/shop?categories=1801&sort=real_price.-1"
                >
                  Shop Now <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
            {/* Card */}
            <div className="card mb-7 text-body" style={{ minHeight: "400px" }}>
              {/* Background */}
              <div className="card-bg">
                <div
                  className="card-bg-img bg-cover"
                  style={{
                    backgroundImage: "url(/img/img9.jpg)",
                  }}
                />
              </div>
              {/* Body */}
              <div className="card-body my-auto px-md-10 text-center text-md-left">
                {/* Circle */}
                <div className="card-circle card-circle-lg card-circle-right">
                  <strong>save</strong>
                  <span className="font-size-h4 font-weight-bold">30%</span>
                </div>
                {/* Heading */}
                <h4 className="mb-0">Let's Go</h4>
                {/* Link */}
                <Link
                  className="btn btn-link stretched-link px-0 text-reset"
                  to="/shop?categories=1801&sort=real_price.-1"
                >
                  Shop Now <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 col-lg-8 d-flex flex-column">
            {/* Card */}
            <div
              className="card mb-7 mb-md-0 text-body"
              style={{ minHeight: "400px" }}
            >
              {/* Background */}
              <div className="card-bg">
                <div
                  className="card-bg-img bg-cover"
                  style={{
                    backgroundImage: "url(/img/img9.webp)",
                  }}
                />
              </div>
              {/* Body */}
              <div className="card-body my-auto px-md-10 text-center text-md-left">
                {/* Heading */}
                <h4 className="mb-0">IPhone</h4>
                {/* Link */}
                <Link
                  className="btn btn-link stretched-link px-0 text-reset"
                  to="/shop?categories=17166&sort=real_price.-1"
                >
                  Shop Now <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-5 col-lg-4 d-flex flex-column">
            {/* Card */}
            <div className="card text-white" style={{ minHeight: "400px" }}>
              {/* Background */}
              <div className="card-bg">
                <div
                  className="card-bg-img bg-cover"
                  style={{
                    backgroundImage: "url(/img/img10.jpeg)",
                  }}
                />
              </div>
              {/* Body */}
              <div className="card-body my-auto text-center">
                {/* Heading */}
                <h4 className="mb-0">NoW</h4>
                {/* Link */}
                <Link
                  className="btn btn-link stretched-link text-reset"
                  to="/shop?categories=1801&sort=real_price.-1"
                >
                  Shop Now <i className="fe fe-arrow-right ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
