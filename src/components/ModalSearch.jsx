import { useState, useEffect } from "react";
import reactDom from "react-dom";
import productApi from "../api/productApi";
import { useSelector } from "react-redux";
import { numberWithCommas } from "../utils/format";
import ReactLoading from "react-loading";
import { Link } from "react-router-dom";
function removeAccents(str) {
  var AccentsMap = [
    "aàảãáạăằẳẵắặâầẩẫấậ",
    "AÀẢÃÁẠĂẰẲẴẮẶÂẦẨẪẤẬ",
    "dđ",
    "DĐ",
    "eèẻẽéẹêềểễếệ",
    "EÈẺẼÉẸÊỀỂỄẾỆ",
    "iìỉĩíị",
    "IÌỈĨÍỊ",
    "oòỏõóọôồổỗốộơờởỡớợ",
    "OÒỎÕÓỌÔỒỔỖỐỘƠỜỞỠỚỢ",
    "uùủũúụưừửữứự",
    "UÙỦŨÚỤƯỪỬỮỨỰ",
    "yỳỷỹýỵ",
    "YỲỶỸÝỴ",
  ];
  for (var i = 0; i < AccentsMap.length; i++) {
    var re = new RegExp("[" + AccentsMap[i].substr(1) + "]", "g");
    var char = AccentsMap[i][0];
    str = str.replace(re, char);
  }
  return str;
}

export function ModalSearch() {
  let [search, setSearch] = useState("");
  let [key, setKey] = useState([]);
  let [product, setProduct] = useState([]);

  let [dataTemp, setDataTemp] = useState([]);

  let { dataSearch } = useSelector((state) => state.product);

  function check(sp) {
    let tam = 0;
    for (let i = 0; i < key.length; i++) {
      if (sp.includes(key[i].toLowerCase())) {
        tam = tam + 1;
      }
    }
    if (tam === key.length) return true;
  }

  function searchChange(e) {
    let value = e.target.value;
    setSearch(value);
    setKey(value.split(" "));
  }

  let dataMap = dataTemp.filter((sp) =>
    check(removeAccents(sp.name.toLowerCase()))
  );

  const handleKeyPress = (e) => {
    if (e.charCode == 13) {
      setProduct(dataMap);
    }
  };

  const clickSearch = () => {
    setProduct(dataMap);
  };

  function handleSearch(e) {
    e.preventDefault();
    let value = e.target.value;
    if (value === "0") {
      setProduct(dataSearch.res);
      setDataTemp(dataSearch.res);
    } else if (value === "1") {
      setProduct(dataSearch.res2);
      setDataTemp(dataSearch.res2);
    } else if (value === "2") {
      setProduct(dataSearch.res1);
      setDataTemp(dataSearch.res1);
    } else if (value === "4") {
      setProduct([]);
      setDataTemp(
        dataSearch.res.concat(dataSearch.res1).concat(dataSearch.res2)
      );
    }
  }

  if (!dataSearch) {
    return <ReactLoading type="cylon" color="#00afab" height={30} width={55} />;
  }
  return reactDom.createPortal(
    <>
      <div
        className="modal fixed-right fade"
        id="modalSearch"
        tabIndex={-1}
        role="dialog"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-vertical" role="document">
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
              <strong className="mx-auto">Search Products</strong>
            </div>
            {/* Body: Form */}
            <div className="modal-body">
              <div className="form-group">
                <label className="sr-only" htmlFor="modalSearchCategories">
                  Categories:
                </label>
                <select
                  onChange={handleSearch}
                  className="custom-select"
                  id="modalSearchCategories"
                >
                  <option value="4">All</option>
                  <option value="" selected>
                    ---
                  </option>
                  <option value="0">SmartPhone</option>
                  <option value="1">Moto</option>
                  <option value="2">Hàng Quốc Tế</option>
                </select>
              </div>
              <div className="input-group input-group-merge">
                <input
                  className="form-control"
                  placeholder="Search"
                  value={search}
                  onKeyPress={handleKeyPress}
                  onChange={searchChange}
                />
                <div className="input-group-append">
                  <button className="btn btn-outline-border">
                    <i onClick={clickSearch} className="fe fe-search" />
                  </button>
                </div>
              </div>
            </div>
            {/* Body: Results (add `.d-none` to disable it) */}
            <div className="modal-body border-top font-size-sm">
              {/* Heading */}
              <p>Search Results:</p>

              {/* Items */}

              {product?.length === 0 ? (
                <div className=" modal-body">
                  {/* Text */}
                  <p className="mb-3 font-size-sm text-center">
                    Nothing matches your search
                  </p>
                  <p className="mb-0 font-size-sm text-center">😞</p>
                </div>
              ) : (
                product.map((e) => (
                  <Link
                    to={`/shop/${e.slug}`}
                    className="row align-items-center position-relative mb-5"
                    key={e._id}
                  >
                    <div className="col-4 col-md-3">
                      {/* Image */}
                      <img
                        className="img-fluid"
                        src={e.images[0].base_url}
                        alt="..."
                      />
                    </div>
                    <div className="col position-static">
                      {/* Text */}
                      <p className="mb-0 font-weight-bold">
                        <a
                          className="stretched-link text-body"
                          href="./product.html"
                        >
                          {e.name}
                        </a>{" "}
                        <br />
                        <span className="text-muted">
                          {numberWithCommas(e.real_price)}
                        </span>
                      </p>
                    </div>
                  </Link>
                ))
              )}

              <Link className="btn btn-link px-0 text-reset" to="/shop">
                View All <i className="fe fe-arrow-right ml-2" />
              </Link>
            </div>
            {/* Body: Empty (remove `.d-none` to disable it) */}
          </div>
        </div>
      </div>
    </>,
    document.getElementById("root2")
  );
}
