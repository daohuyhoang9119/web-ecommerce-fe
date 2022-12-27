import { numberWithCommas } from "../../utils/format";
export default function OrderCart(props) {
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-4">
          {/* Image */}
          <a href="product.html">
            <img
              src="https://images.unsplash.com/photo-1671538856783-c0b123a2223f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60"
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
            <span className="text-muted">{props.price} VND</span>
          </p>
          {/* Text */}
          <div className="font-size-sm text-muted">Color: Brown</div>
        </div>
      </div>
    </li>
  );
}
