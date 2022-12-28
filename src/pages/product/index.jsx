import { useRouteMatch } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { numberWithCommas } from "../../utils/format";
import useFormValidate from "../../core/ReactHook/useFormValidate";
import Review from "../../components/Review";
import Paging from "../../components/Paging";
import { addCart } from "../../redux/action/cart";
import Breadcrumb from "../../components/BreadCrumb";
import productApi from "../../api/productApi";
import Loading from "../../components/Loading";
import Des from "./Des";
import reviewApi from "../../api/reviewApi";
export default function Products() {
  let $ = window.$;

  let { form, inputChange, onSubmit, error, setForm } = useFormValidate(
    {
      name: "",
      email: "",
      title: "",
      content: "",
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        email: {
          required: true,
          pattern: "email",
        },
        title: {
          required: true,
        },
        content: {
          required: true,
        },
      },
    }
  );

  let [review, setReview] = useState({
    paginate: 1,
    dataReview: [],
  });

  let [rating, setRating] = useState(1);

  let { params } = useRouteMatch();
  let [dropdown, setDropdown] = useState(true);
  let [num, setNum] = useState(1);
  let dispatch = useDispatch();
  let ref = useRef();
  let thisRef = useRef();
  const [state, setState] = useState({
    product: {},
    loading: true,
  });
  useEffect(() => {
    productApi.productDetail(params.slug).then((res) => {
      if (res.data.length > 0) {
        setState({
          product: res.data,
          loading: false,
        });
      }
    });
    // reviewApi.review(params.slug).then((res) =>
    //   setReview({
    //     ...review,
    //     dataReview: res,
    //   })
    // );
  }, [params.slug]);

  useEffect(() => {
    setTimeout(() => {
      $(ref.current).flickity({
        draggable: false,
        fade: true,
      });
      $(thisRef.current).flickity({
        asNavFor: "#productSlider",
        contain: true,
        wrapAround: false,
      });
    }, 2000);
  }, []);

  const getNum = (e) => {
    setNum(parseInt(e.target.value));
  };

  const handleCart = (e) => {
    e.preventDefault();
    dispatch(addCart({ ...state.product, num }));
  };

  const openReview = async (e) => {
    setDropdown(!dropdown);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let err = onSubmit();
    if (Object.keys(err).length === 0) {
      let time = $.date("m-d-Y h:i:s");

      let res = await reviewApi.postReview({
        ...form,
        slug: params.slug,
        createAt: time,
        rating: rating,
        like: 0,
        dislike: 0,
      });
      if (res) {
        reviewApi.review(params.slug).then((res) =>
          setReview({
            ...review,
            dataReview: res,
          })
        );
        setForm({
          name: "",
          email: "",
          title: "",
          content: "",
        });
      }
    }
  };

  function handleRating(e) {
    e.preventDefault();
    setRating(e.target.dataset.value);
  }

  function reverseArr(input) {
    var ret = new Array();
    for (var i = input.length - 1; i >= 0; i--) {
      ret.push(input[i]);
    }
    return ret;
  }
  let temp = reverseArr(review.dataReview);

  if (state.loading) {
    return <Loading />;
  }
  return (
    <>
      <Breadcrumb
        list={[
          {
            title: "Home",
            link: "/",
          },
          {
            title: "Catalog",
            link: "/shop",
          },
          {
            title: state.product.name,
            link: "/",
          },
        ]}
      />
      {/* PRODUCT */}
      <section>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="row">
                <div className="col-12 col-md-6">
                  {/* Card */}
                  <div className="card">
                    {/* Badge */}
                    {state.product.discount_rate ? (
                      <div className="badge badge-primary card-badge text-uppercase ">
                        - {state.product.discount_rate}%
                      </div>
                    ) : null}
                    {/* Slider */}
                    <div
                      ref={ref}
                      className="mb-4"
                      // data-flickity='{"draggable": false, "fade": true}'
                      id="productSlider"
                    >
                      {/* Item */}
                      {/* Item */}
                      {state.product.images.map((e) => (
                        <a href={e.large_url} data-fancybox>
                          <img
                            src={e.medium_url}
                            alt="..."
                            className="card-img-top"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                  {/* Slider */}
                  <div
                    ref={thisRef}
                    className="flickity-nav mx-n2 mb-10 mb-md-0"
                    data-flickity='{"asNavFor": "#productSlider", "contain": true, "wrapAround": false}'
                  >
                    {/* Item */}
                    {state.product.images.map((e) => (
                      <div
                        className="col-12 px-2"
                        style={{ maxWidth: "113px" }}
                      >
                        <div
                          className="embed-responsive embed-responsive-1by1 bg-cover"
                          style={{ backgroundImage: `url(${e.medium_url})` }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <div className="col-12 col-md-6 pl-lg-10">
                  {/* Header */}
                  <div className="row mb-1">
                    <div className="col"></div>
                    <div className="col-auto">
                      {/* Rating */}
                      <div
                        className="rating font-size-xs text-dark"
                        data-value={state.product.rating_Average}
                      >
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                        <div className="rating-item">
                          <i className="fas fa-star" />
                        </div>
                      </div>
                      <a
                        className="font-size-sm text-reset ml-2"
                        href="#reviews"
                      >
                        Reviews (6)
                      </a>
                    </div>
                  </div>
                  {/* Heading */}
                  <h3 className="mb-2">{state.product.title}</h3>
                  {/* Price */}
                  <div className="mb-7">
                    <span className="font-size-lg font-weight-bold text-gray-350 text-decoration-line-through">
                      {numberWithCommas(state.product?.price)} VND
                    </span>
                    <span className="ml-1 font-size-h5 font-weight-bolder text-primary">
                      {numberWithCommas(state.product?.price || " ")} VND
                    </span>
                    <span className="font-size-sm ml-1">
                      (
                      {state.product.stock_item.qty > 0
                        ? "Còn hàng"
                        : "Hết hàng"}
                      )
                    </span>
                  </div>
                  {/* Form */}
                  <form>
                    {state.product.configurable_options?.map((e, i) => (
                      <div className="form-group product-option" key={i}>
                        {/* Label */}

                        <p className="mb-5">
                          {e.name} :{" "}
                          {e.values.map((e1, i1) => (
                            <span className="option-value" key={i1}>
                              {e1.label}
                            </span>
                          ))}
                        </p>
                      </div>
                    ))}

                    <div className="form-group">
                      {/* Radio */}
                      {/* Size chart */}
                      <p className="mb-8">
                        <img
                          src="/img/icons/icon-ruler.svg"
                          alt="..."
                          className="img-fluid"
                        />{" "}
                        <a
                          className="text-reset text-decoration-underline ml-3"
                          data-toggle="modal"
                          href="#modalSizeChart"
                        >
                          Size chart
                        </a>
                      </p>
                      <div className="form-row mb-7">
                        <div className="col-12 col-lg-auto">
                          {/* Quantity */}
                          <select
                            className="custom-select mb-2"
                            onChange={getNum}
                          >
                            {[...Array(10)].map((e, i) => (
                              <option value={i + 1}>{i + 1}</option>
                            ))}
                          </select>
                        </div>
                        <div className="col-12 col-lg">
                          {/* Submit */}
                          <button
                            onClick={handleCart}
                            type="submit"
                            className="btn btn-block btn-dark mb-2"
                          >
                            Add to Cart{" "}
                            <i className="fe fe-shopping-cart ml-2" />
                          </button>
                        </div>
                        <div className="col-12 col-lg-auto">
                          {/* Wishlist */}
                          <button
                            className="btn btn-outline-dark btn-block mb-2"
                            data-toggle="button"
                          >
                            Wishlist <i className="fe fe-heart ml-2" />
                          </button>
                        </div>
                      </div>
                      {/* Text */}
                      <p>
                        <span className="text-gray-500">
                          Is your size/color sold out?
                        </span>
                        <a
                          className="text-reset text-decoration-underline"
                          data-toggle="modal"
                          href="#modalWaitList"
                        >
                          Join the Wait List!
                        </a>
                      </p>
                      {/* Share */}
                      <p className="mb-0">
                        <span className="mr-4">Share:</span>
                        <a
                          className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                          href="#!"
                        >
                          <i className="fab fa-twitter" />
                        </a>
                        <a
                          className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                          href="#!"
                        >
                          <i className="fab fa-facebook-f" />
                        </a>
                        <a
                          className="btn btn-xxs btn-circle btn-light font-size-xxxs text-gray-350"
                          href="#!"
                        >
                          <i className="fab fa-pinterest-p" />
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* DESCRIPTION */}
      <Des description={state.product.description} />
      {/* PRODUCTS */}
      {/* REVIEWS */}
      <section className="pt-9 pb-11" id="reviews">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h4 className="mb-10 text-center">Customer Reviews</h4>
              {/* Header */}
              <div className="row align-items-center">
                <div className="col-12 col-md-auto">
                  {/* Dropdown */}
                  {/* <div className="dropdown mb-4 mb-md-0">
                    <a
                      className="dropdown-toggle text-reset"
                      data-toggle="dropdown"
                      href="#"
                    >
                      <strong>Sort by: Newest</strong>
                    </a>
                    <div className="dropdown-menu mt-3">
                      <a className="dropdown-item" href="#!">
                        Newest
                      </a>
                      <a className="dropdown-item" href="#!">
                        Oldest
                      </a>
                    </div>
                  </div> */}
                </div>
                <div className="col-12 col-md text-md-center"></div>
                <div
                  className="col-12 col-md-auto"
                  style={{ marginBottom: "20px" }}
                >
                  {/* Button */}
                  <a
                    className="btn btn-sm btn-dark"
                    data-toggle="collapse"
                    href="#reviewForm"
                    onClick={openReview}
                    data-value={dropdown}
                  >
                    {dropdown ? "Write Review" : "X"}
                  </a>
                </div>
              </div>
              {/* New Review */}
              <div className="collapse" id="reviewForm">
                {/* Divider */}
                <hr className="my-8" />
                {/* Form */}
                <form>
                  <div className="row">
                    <div className="col-12 mb-6 text-center">
                      {/* Text */}
                      <p className="mb-1 font-size-xs">Score:</p>
                      {/* Rating form */}
                      <div className="rating-form">
                        {/* Rating */}
                        <div
                          className="rating h5 text-dark"
                          data-value={rating}
                        >
                          <div onClick={handleRating} className="rating-item">
                            <i data-value={1} className="fas fa-star" />
                          </div>
                          <div onClick={handleRating} className="rating-item">
                            <i data-value={2} className="fas fa-star" />
                          </div>
                          <div onClick={handleRating} className="rating-item">
                            <i data-value={3} className="fas fa-star" />
                          </div>
                          <div onClick={handleRating} className="rating-item">
                            <i data-value={4} className="fas fa-star" />
                          </div>
                          <div onClick={handleRating} className="rating-item">
                            <i data-value={5} className="fas fa-star" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Name */}
                      <div className="form-group">
                        <label className="sr-only" htmlFor="reviewName">
                          Your Name:
                        </label>
                        <input
                          className="form-control form-control-sm"
                          id="reviewName"
                          type="text"
                          placeholder="Your Name *"
                          onChange={inputChange}
                          value={form.name}
                          name="name"
                        />
                        {error?.name && (
                          <p className="text-error">{error.name}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-12 col-md-6">
                      {/* Email */}
                      <div className="form-group">
                        <label className="sr-only" htmlFor="reviewEmail">
                          Your Email:
                        </label>
                        <input
                          className="form-control form-control-sm"
                          id="reviewEmail"
                          type="email"
                          placeholder="Your Email *"
                          onChange={inputChange}
                          value={form.email}
                          name="email"
                        />
                        {error?.email && (
                          <p className="text-error">{error.email}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      {/* Name */}
                      <div className="form-group">
                        <label className="sr-only" htmlFor="reviewTitle">
                          Review Title:
                        </label>
                        <input
                          className="form-control form-control-sm"
                          id="reviewTitle"
                          type="text"
                          placeholder="Review Title *"
                          value={form.title}
                          onChange={inputChange}
                          name="title"
                        />
                        {error?.title && (
                          <p className="text-error">{error.title}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-12">
                      {/* Name */}
                      <div className="form-group">
                        <label className="sr-only" htmlFor="reviewText">
                          Review:
                        </label>
                        <textarea
                          className="form-control form-control-sm"
                          id="reviewText"
                          rows={5}
                          placeholder="Review *"
                          value={form.content}
                          onChange={inputChange}
                          name="content"
                        />
                        {error?.content && (
                          <p className="text-error">{error.content}</p>
                        )}
                      </div>
                    </div>
                    <div className="col-12 text-center">
                      {/* Button */}
                      <button
                        style={{ marginBottom: "20px" }}
                        className="btn btn-outline-dark"
                        type="submit"
                        onClick={handleSubmit}
                      >
                        Post Review
                      </button>
                    </div>
                  </div>
                </form>
              </div>
              {temp?.map((e, i) => (
                <Review
                  active={dropdown}
                  clickComment={openReview}
                  key={i}
                  {...e}
                />
              ))}
              <div className="mt-8"></div>
              {/* Paging */}
              <Paging
                totalPage={review.dataReview.length / 3}
                currentPage={1}
              />
            </div>
          </div>
        </div>
      </section>
      {/* FEATURES */}
      <section className="bg-light py-9">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-lg-0">
                {/* Icon */}
                <i className="fe fe-truck font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="heading-xxs mb-1">Free shipping</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    From all orders over $100
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-lg-0">
                {/* Icon */}
                <i className="fe fe-repeat font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">Free returns</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    Return money within 30 days
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex mb-6 mb-md-0">
                {/* Icon */}
                <i className="fe fe-lock font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">Secure shopping</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    You're in safe hands
                  </p>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3">
              {/* Item */}
              <div className="d-flex">
                {/* Icon */}
                <i className="fe fe-tag font-size-lg text-primary" />
                {/* Body */}
                <div className="ml-6">
                  {/* Heading */}
                  <h6 className="mb-1 heading-xxs">Over 10,000 Styles</h6>
                  {/* Text */}
                  <p className="mb-0 font-size-sm text-muted">
                    We have everything you need
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
