import { useState, useEffect, useRef } from "react";
import { useSelector } from "react-redux";
import ProductItem from "../../shop/component/ProductItem";
import { useDispatch } from "react-redux";
import { actionLoading } from "../../../redux/action/product";
import { Link } from "react-router-dom";
export default function TopSeller({ data }) {
  let { dataSearch } = useSelector((state) => state.product);
  const [dataRender, setDataRender] = useState(data?.res);

  useEffect(() => {
    setDataRender(data?.res);
  }, [data]);

  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6">
            {/* Heading */}
            <h2 className="mb-4 text-center">Top month Sellers</h2>
            {/* Nav */}
            <div className="nav justify-content-center mb-10">
              <a
                className="nav-link active"
                href="#topSellersTab"
                data-toggle="tab"
                onClick={() => setDataRender(data.res)}
              >
                Smart Phone
              </a>
              <a
                className="nav-link"
                href="#topSellersTab"
                data-toggle="tab"
                onClick={() => setDataRender(data.res1)}
              >
                Hàng Quốc Tế
              </a>
              <a
                className="nav-link"
                href="#topSellersTab"
                data-toggle="tab"
                onClick={() => setDataRender(data.res2)}
              >
                Moto
              </a>
            </div>
          </div>
        </div>
        <div className="tab-content">
          <div className="tab-pane fade show active" id="topSellersTab">
            <div className="row">
              {dataRender &&
                dataRender.map((e) => <ProductItem home key={e._id} {...e} />)}
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            {/* Link  */}
            <div className="mt-7 text-center">
              <Link className="link-underline" to="/shop">
                Discover more
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
