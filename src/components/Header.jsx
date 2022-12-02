import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { useTranslate } from "../core/Translate";
export default function Header() {
  const { login } = useSelector((state) => state.user);
  const { num } = useSelector((state) => state.cart);
  let { lang, t, setLang } = useTranslate();

  function changeLang(lang) {
    setLang(lang);
  }

  return (
    <>
      {/* Sidebar */}
      {/* Size Chart */}
      <div
        className="modal fade"
        id="modalSizeChart"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div
          className="modal-dialog modal-dialog-centered modal-lg"
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
            {/* Header*/}
            <div className="modal-header line-height-fixed font-size-lg">
              <strong className="mx-auto">Size Chart</strong>
            </div>
            {/* Body */}
            <div className="modal-body border-bottom">
              {/* Header */}
              <div className="d-flex mb-7">
                {/* Heading */}
                <h5 className="mb-0">Clothing</h5>
                {/* Toggles */}
                <div
                  className="btn-group btn-group-toggle ml-auto"
                  data-toggle="buttons"
                >
                  <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                    <input
                      type="radio"
                      name="modalSizeChartUnitOne"
                      defaultChecked
                    />{" "}
                    IN
                  </label>
                  <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                    <input type="radio" name="modalSizeChartUnitOne" /> CM
                  </label>
                </div>
              </div>
              {/* Table */}
              <div className="table-responsive">
                <table className="table table-bordered table-sm table-hover mb-0">
                  <thead>
                    <tr>
                      <th>Size</th>
                      <th>US</th>
                      <th>Bust</th>
                      <th>Waist</th>
                      <th>Hips</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>XS</td>
                      <td>2</td>
                      <td>32</td>
                      <td>24 - 25</td>
                      <td>33 - 34</td>
                    </tr>
                    <tr>
                      <td>S</td>
                      <td>4</td>
                      <td>34 - 35</td>
                      <td>26 - 27</td>
                      <td>35 - 26</td>
                    </tr>
                    <tr>
                      <td>M</td>
                      <td>6</td>
                      <td>36 - 37</td>
                      <td>28 - 29</td>
                      <td>38 - 40</td>
                    </tr>
                    <tr>
                      <td>L</td>
                      <td>8</td>
                      <td>38 - 29</td>
                      <td>30 - 31</td>
                      <td>42 - 44</td>
                    </tr>
                    <tr>
                      <td>XL</td>
                      <td>10</td>
                      <td>40 - 41</td>
                      <td>32 - 33</td>
                      <td>45 - 47</td>
                    </tr>
                    <tr>
                      <td>XXL</td>
                      <td>12</td>
                      <td>42 - 43</td>
                      <td>34 - 35</td>
                      <td>48 - 50</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            {/* Body */}
            <div className="modal-body">
              {/* Header */}
              <div className="d-flex mb-7">
                {/* Heading */}
                <h5 className="mb-0">Shoes</h5>
                {/* Toggles */}
                <div
                  className="btn-group btn-group-toggle ml-auto"
                  data-toggle="buttons"
                >
                  <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 active">
                    <input
                      type="radio"
                      name="modalSizeCharUnitTwo"
                      defaultChecked
                    />{" "}
                    IN
                  </label>
                  <label className="btn btn-xxs btn-circle btn-outline-dark font-size-xxxs rounded-0 ml-2">
                    <input type="radio" name="modalSizeCharUnitTwo" /> CM
                  </label>
                </div>
              </div>
              {/* Tables */}
              <div className="row">
                <div className="col-12 col-lg-6">
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm table-hover mb-lg-0">
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>US</th>
                          <th>Foot Length</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>36</td>
                          <td>5</td>
                          <td>22.8</td>
                        </tr>
                        <tr>
                          <td>26.5</td>
                          <td>5.5</td>
                          <td>23.1</td>
                        </tr>
                        <tr>
                          <td>37</td>
                          <td>6</td>
                          <td>23.5</td>
                        </tr>
                        <tr>
                          <td>37.5</td>
                          <td>6.</td>
                          <td>23.5</td>
                        </tr>
                        <tr>
                          <td>38</td>
                          <td>7</td>
                          <td>24.1</td>
                        </tr>
                        <tr>
                          <td>38.5</td>
                          <td>7.5</td>
                          <td>24.5</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                <div className="col-12 col-lg-6">
                  {/* Table */}
                  <div className="table-responsive">
                    <table className="table table-bordered table-sm table-hover mb-0">
                      <thead>
                        <tr>
                          <th>Size</th>
                          <th>US</th>
                          <th>Foot Length</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>36</td>
                          <td>5</td>
                          <td>22.8</td>
                        </tr>
                        <tr>
                          <td>39</td>
                          <td>8</td>
                          <td>24.1</td>
                        </tr>
                        <tr>
                          <td>40</td>
                          <td>9</td>
                          <td>25.4</td>
                        </tr>
                        <tr>
                          <td>40.5</td>
                          <td>9.5</td>
                          <td>25.7</td>
                        </tr>
                        <tr>
                          <td>41</td>
                          <td>10</td>
                          <td>26.0</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Wait List */}
      <div
        className="modal fade"
        id="modalWaitList"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered" role="document">
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
            {/* Header*/}
            <div className="modal-header line-height-fixed font-size-lg">
              <strong className="mx-auto">Wait List</strong>
            </div>
            {/* Body */}
            <div className="modal-body">
              <div className="row mb-6">
                <div className="col-12 col-md-3">
                  {/* Image */}
                  <a href="./product.html">
                    <img
                      className="img-fluid mb-7 mb-md-0"
                      src="/img/products/product-6.jpg"
                      alt="..."
                    />
                  </a>
                </div>
                <div className="col-12 col-md-9">
                  {/* Label */}
                  <p>
                    <a
                      className="font-weight-bold text-body"
                      href="./product.html"
                    >
                      Cotton floral print Dress
                    </a>
                  </p>
                  {/* Radio */}
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeOne"
                      defaultValue={6}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeOne"
                    >
                      3XS
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeTwo"
                      defaultValue="6.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeTwo"
                    >
                      2XS
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeThree"
                      defaultValue={7}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeThree"
                    >
                      XS
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeFour"
                      defaultValue="7.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                      defaultChecked
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeFour"
                    >
                      S
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeFive"
                      defaultValue={8}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeFive"
                    >
                      M
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeSix"
                      defaultValue="8.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeSix"
                    >
                      LG
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeSeven"
                      defaultValue={9}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeSeven"
                    >
                      XL
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeEight"
                      defaultValue="9.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeEight"
                    >
                      2XL
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeNine"
                      defaultValue={10}
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeNine"
                    >
                      3XL
                    </label>
                  </div>
                  <div className="custom-control custom-control-inline custom-control-size mb-2">
                    <input
                      type="radio"
                      className="custom-control-input"
                      name="modalWaitListSize"
                      id="modalWaitListSizeTen"
                      defaultValue="10.5"
                      data-toggle="form-caption"
                      data-target="#modalWaitListSizeCaption"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="modalWaitListSizeTen"
                    >
                      4XL
                    </label>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  {/* Text */}
                  <p className="font-size-sm text-center text-gray-500">
                    Justo ut diam erat hendrerit morbi porttitor, per eu
                    curabitur diam sociis.
                  </p>
                </div>
              </div>
              <div className="form-row mb-2">
                <div className="col-12 col-md-6">
                  {/* Form group */}
                  <div className="form-group">
                    <label className="sr-only" htmlFor="listName">
                      Your Name
                    </label>
                    <input
                      className="form-control"
                      id="listName"
                      type="text"
                      placeholder="Your Name *"
                      required
                    />
                  </div>
                </div>
                <div className="col-12 col-md-6">
                  {/* Form group */}
                  <div className="form-group">
                    <label className="sr-only" htmlFor="listEmail">
                      Your Name
                    </label>
                    <input
                      className="form-control"
                      id="listEmail"
                      type="email"
                      placeholder="Your Email *"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12 text-center">
                  {/* Button */}
                  <button className="btn btn-dark" type="submit">
                    Subscribe
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <div className="navbar navbar-topbar navbar-expand-xl navbar-light bg-light">
        <div className="container">
          {/* Promo */}
          <div className="mr-xl-8">
            <i className="fe fe-truck mr-2" />{" "}
            <span className="heading-xxxs">{t("Free shipping worldwide")}</span>
          </div>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#topbarCollapse"
            aria-controls="topbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="topbarCollapse">
            {/* Nav */}
            <ul className="nav nav-divided navbar-nav mr-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  <img
                    className="mb-1 mr-1"
                    src="/img/flags/usa.svg"
                    alt="..."
                  />{" "}
                  United States
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/usa.svg"
                      alt="USA"
                    />
                    United States
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/canada.svg"
                      alt="Canada"
                    />
                    Canada
                  </a>
                  <a className="dropdown-item" href="#!">
                    <img
                      className="mb-1 mr-2"
                      src="/img/flags/germany.svg"
                      alt="Germany"
                    />
                    Germany
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  USD
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a className="dropdown-item" href="#!">
                    USD
                  </a>
                  <a className="dropdown-item" href="#!">
                    EUR
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a
                  className="nav-link dropdown-toggle"
                  data-toggle="dropdown"
                  href="#"
                >
                  {lang === "en"
                    ? "English"
                    : lang === "china"
                    ? "China"
                    : "Tiếng Việt"}
                </a>
                {/* Menu */}
                <div className="dropdown-menu minw-0">
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => changeLang("en")}
                  >
                    English
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => changeLang("vi")}
                  >
                    Vietnamese
                  </a>
                  <a
                    className="dropdown-item"
                    href="#"
                    onClick={() => changeLang("china")}
                  >
                    China
                  </a>
                </div>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav mr-8">
              <li className="nav-item">
                <a className="nav-link" href="./shipping-and-returns.html">
                  {t("Shipping")}
                </a>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="faq">
                  {t("FAQ")}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contact">
                  {t("Contact")}
                </Link>
              </li>
            </ul>
            {/* Nav */}
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-instagram" />
                </a>
              </li>
              <li className="nav-item ml-xl-n4">
                <a className="nav-link text-gray-350" href="#!">
                  <i className="fab fa-medium" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/* NAVBAR */}
      <nav className="navbar navbar-expand-lg navbar-light bg-white">
        <div className="container">
          {/* Brand */}
          <Link className="navbar-brand" to="/">
            CFD*SHOP
          </Link>
          {/* Toggler */}
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            aria-controls="navbarCollapse"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          {/* Collapse */}
          <div className="collapse navbar-collapse" id="navbarCollapse">
            {/* Nav */}
            <ul className="navbar-nav mx-auto">
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" exact to="/">
                  Home
                </NavLink>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <NavLink className="nav-link" to="/shop" exact>
                  Shop
                </NavLink>
                {/* Menu */}
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  Pages
                </a>
                {/* Menu */}
                <div className="dropdown-menu">
                  <div className="card card-lg">
                    <div className="card-body">
                      <ul className="list-styled font-size-sm">
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/about">
                            About
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/contact">
                            Contact Us
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/store">
                            Store Locator
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/faq">
                            FAQ
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/coming">
                            Coming Soon
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/">
                            404
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item dropdown">
                {/* Toggle */}
                <a className="nav-link" data-toggle="dropdown" href="#">
                  Blog
                </a>
                {/* Menu */}
                <div className="dropdown-menu">
                  <div className="card card-lg">
                    <div className="card-body">
                      <ul className="list-styled font-size-sm">
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/blog-post">
                            Blog
                          </Link>
                        </li>
                        <li className="list-styled-item">
                          <Link className="list-styled-link" to="/blog-post">
                            Blog Post
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/store">
                  Store
                </Link>
              </li>
            </ul>
            {/* Nav */}
            <ul className="navbar-nav flex-row">
              <li className="nav-item">
                <a className="nav-link" data-toggle="modal" href="#modalSearch">
                  <i className="fe fe-search" />
                </a>
              </li>
              <li className="nav-item ml-lg-n4">
                {!login ? (
                  <Link className="nav-link" to="/account">
                    <i className="fe fe-user" />
                  </Link>
                ) : (
                  <Link className="nav-link" to="/account/person">
                    <i className="fas fa-user" />
                  </Link>
                )}
              </li>
              <li className="nav-item ml-lg-n4">
                <Link className="nav-link" to="account/wishlist">
                  <i className="fe fe-heart" />
                </Link>
              </li>
              <li className="nav-item ml-lg-n4">
                <a
                  className="nav-link"
                  data-toggle="modal"
                  href="#modalShoppingCart"
                >
                  <span data-cart-items={num}>
                    <i className="fe fe-shopping-cart" />
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="py-3 bg-dark bg-pattern mb-4">
        <div class="container">
          <div class="row">
            <div class="col-12">
              <div class="text-center text-white">
                <span class="heading-xxs letter-spacing-xl">
                  ⚡️ Happy Holiday Deals on Everything ⚡️
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
