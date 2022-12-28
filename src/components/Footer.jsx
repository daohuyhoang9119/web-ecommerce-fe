import { Link } from "react-router-dom";
export default function Footer() {
  return (
    <footer
      className="bg-dark bg-cover @@classList"
      style={{ backgroundImage: "url(/img/patterns/pattern-2.svg)" }}
    >
      <div className="py-12 border-bottom border-gray-700">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-3">
              {/* Heading */}
              <h4 className="mb-6 text-white">Frame Shop</h4>
              {/* Social */}
              <ul className="list-unstyled list-inline mb-7 mb-md-0">
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-youtube" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-twitter" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="list-inline-item">
                  <a href="#!" className="text-gray-350">
                    <i className="fab fa-medium" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Support</h6>
              {/* Links */}
              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <Link className="text-gray-300" to="/contact">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link className="text-gray-300" to="/faq">
                    FAQs
                  </Link>
                </li>
                <li>
                  <a
                    className="text-gray-300"
                    data-toggle="modal"
                    href="#modalSizeChart"
                  >
                    Size Guide
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Shop</h6>
              {/* Links */}
              <ul className="list-unstyled mb-7 mb-sm-0">
                <li>
                  <Link
                    className="text-gray-300"
                    to="/shop?categories=1789&sort=real_price.-1"
                  >
                    SmartPhone Shopping
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300"
                    to="/shop?categories=8594&sort=real_price.-1"
                  >
                    Moto's Shopping
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-300"
                    to="/shop?categories=1801&sort=real_price.-1"
                  >
                    Camera's Shopping
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Company</h6>
              {/* Links */}
              <ul className="list-unstyled mb-0">
                <li>
                  <Link to="/about" className="text-gray-300">
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300">
                    Terms &amp; Conditions
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300">
                    Privacy &amp; Cookie policy
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-6 col-sm">
              {/* Heading */}
              <h6 className="heading-xxs mb-4 text-white">Contact</h6>
              {/* Links */}
              <ul className="list-unstyled mb-0">
                <li>
                  <a className="text-gray-300" href="#!">
                    17520216
                  </a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">
                    17520216
                  </a>
                </li>
                <li>
                  <a className="text-gray-300" href="#!">
                    17520216@gm.uit.edu.vn
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="py-6">
        <div className="container">
          <div className="row">
            <div className="col">
              {/* Copyright */}
              <p className="mb-3 mb-md-0 font-size-xxs text-muted">
                © 2021 All rights reserved. Designed by NguyenAn.
              </p>
            </div>
            <div className="col-auto custom">
              {/* Payment methods */}
              <img
                className="footer-payment"
                src="/img/payment/mastercard.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/visa.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/amex.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/paypal.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/maestro.svg"
                alt="..."
              />
              <img
                className="footer-payment"
                src="/img/payment/klarna.svg"
                alt="..."
              />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
