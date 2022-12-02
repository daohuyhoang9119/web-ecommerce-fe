import { numberWithCommas } from "../../utils/format";
export default function OrderCart(props) {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="product.html">
            <img
              src={props.images[0].medium_url}
              alt="..."
              className="img-fluid"
            />
          </a>
        </div>
        <div className="col">
          {/* Title */}
          <p className="mb-4 font-size-sm font-weight-bold">
            <a className="text-body" href="product.html">
              {props.name}
            </a>{" "}
            <br />
            <span className="text-muted">
              {numberWithCommas(props.real_price)} VND
            </span>
          </p>
          {/* Text */}
          <div className="font-size-sm text-muted">Color: Brown</div>
        </div>
      </div>
    </li>
  );
}
