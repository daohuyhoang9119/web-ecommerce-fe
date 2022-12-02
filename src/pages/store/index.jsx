import localStoreApi from "../../api/localStoreApi.jsx";
import { useEffect, useState } from "react";
import CartItem from "./components/CartItem.jsx";

export default function Store() {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    localStoreApi.get().then((res) => {
      setList(res.data);
    });
  }, []);
  const [iframe, setIframe] = useState(
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.232359634271!2d106.8016140498867!3d10.869923660396443!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317527587e9ad5bf%3A0xafa66f9c8be3c91!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBDw7RuZyBuZ2jhu4cgVGjDtG5nIHRpbiDEkEhRRyBUUC5IQ00!5e0!3m2!1svi!2s!4v1620026724935!5m2!1svi!2s"
  );
  function handleClickMap(i) {
    setIframe(list[i].link_googleMap);
    setIndex(i);
  }
  return (
    <>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb */}
              <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="contact-us.html">
                    Contact Us
                  </a>
                </li>
                <li className="breadcrumb-item active">Store Locator</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      {/* HEADER */}
      <section className="py-12 bg-light">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-5 col-lg-4">
              {/* Card */}
              <div
                className="card card-xl h-md-0 minh-md-100 mb-10 mb-md-0"
                style={{ overflow: "auto" }}
              >
                {list.map((e, i) => (
                  <CartItem
                    key={i}
                    {...e}
                    onClick={() => handleClickMap(i)}
                    active={index === i}
                  />
                ))}
              </div>
            </div>
            <div className="col-12 col-md-7 col-lg-8">
              {/* Map */}
              <div className="embed-responsive embed-responsive-4by3">
                <iframe src={iframe}></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* MAP */}
    </>
  );
}
