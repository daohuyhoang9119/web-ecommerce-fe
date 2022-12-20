import SideBar from "./component/SideBar";
import Slider from "./component/Slider";
import ProductItem from "./component/ProductItem";
import { useEffect } from "react";
import { fetchProduct, fetchCategory } from "../../redux/action/product";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Paging from "../../components/Paging";

import { useRouteMatch, useHistory } from "react-router";
function convertQueryToObject() {
  var search = window.location.search.substring(1);
  return !search
    ? {}
    : JSON.parse(
        '{"' +
          decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) +
          '"}'
      );
}
const reverse = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export default function Shop() {
  const dispatch = useDispatch();
  const { product, paging, categories, loading } = useSelector(
    (state) => state.product
  );

  let queryUrl = convertQueryToObject();
  let strUrl = reverse(queryUrl);
  useEffect(() => {
    dispatch(fetchProduct(strUrl));
    dispatch(fetchCategory());
  }, [strUrl]);

  let history = useHistory();
  let { path } = useRouteMatch();
  // console.log(product.data);

  function sortChange(e) {
    let value = e.target.value;
    let queryObj = convertQueryToObject();
    queryObj.sort = value;
    if (value === "") {
      delete queryObj.sort;
    }
    delete queryObj.page;
    let queryUrl = reverse(queryObj);
    history.push(`${path}?${queryUrl}`);
  }
  let queryObj = convertQueryToObject();
  // let title = categories.find((e) => e.id == queryObj.categories);
  return (
    <>
      <section className="py-11">
        <div className="container">
          <div className="row">
            <SideBar categories={categories} />
            <div className="col-12 col-md-8 col-lg-9">
              <Slider />
              <div className="row align-items-center mb-7">
                <div className="col-12 col-md">
                  {/* Heading */}
                  <h3 className="mb-1">
                    {/* {title ? title.title : "All Product"} */}
                    All product
                  </h3>
                  {/* Breadcrumb */}
                  <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
                    <li className="breadcrumb-item">
                      <a className="text-gray-400" href="index.html">
                        Home
                      </a>
                    </li>
                    <li className="breadcrumb-item active">
                      {/* {title ? title?.title : "All Product"} */}
                      all product
                    </li>
                  </ol>
                </div>
                <div className="col-12 col-md-auto">
                  {/* Select */}
                  <select
                    onChange={sortChange}
                    className="custom-select custom-select-xs"
                  >
                    <option selected={queryUrl.sort === ""} value="">
                      ---Filter---
                    </option>
                    <option
                      selected={queryUrl.sort === "real_price.-1"}
                      value="real_price.-1"
                    >
                      High Price
                    </option>
                    <option
                      selected={queryUrl.sort === "real_price.1"}
                      value="real_price.1"
                    >
                      Low Price
                    </option>
                    <option
                      selected={queryUrl.sort === "rating_average.-1"}
                      value="rating_average.-1"
                    >
                      High Rating
                    </option>
                    <option
                      selected={queryUrl.sort === "discount_rate.-1"}
                      value="discount_rate.-1"
                    >
                      High Discount
                    </option>
                  </select>
                </div>
              </div>
              {/* Tags */}

              {/* Products */}

              <div className="row">
                {product?.data?.map((e, i) => (
                  <ProductItem key={i} {...e} />
                ))}
              </div>
              {/* Pagination */}
              <Paging {...paging} />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
