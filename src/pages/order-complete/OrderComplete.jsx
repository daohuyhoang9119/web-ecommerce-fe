import { useTranslate } from "../../core/Translate";
import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function OrderCompleted() {
  let { lang, t, setLang } = useTranslate();

  let { id } = useRouteMatch().params;

  return (
    <section className="py-12">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-md-10 col-lg-8 col-xl-6 text-center">
            {/* Icon */}
            <div className="mb-7 font-size-h1">❤️</div>
            {/* Heading */}
            <h2 className="mb-5">{t("Your Order is Completed!")}</h2>
            {/* Text */}
            <p className="mb-7 text-gray-500">
              {t("Your order")}{" "}
              <span className="text-body text-decoration-underline">{id}</span>{" "}
              {t(
                "has been completed. Your order details are shown for your personal accont."
              )}
            </p>
            {/* Button */}
            <Link className="btn btn-dark" to={`/account/orders`}>
              {t("View My Orders")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
