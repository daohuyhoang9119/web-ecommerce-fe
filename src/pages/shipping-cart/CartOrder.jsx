import { useDispatch } from "react-redux";
import { removeCart, increase, decrease } from "../../redux/action/cart";
import { numberWithCommas } from "../../utils/format";
export default function CartOrder(props) {
  const dispatch = useDispatch();
  return (
    <li className="list-group-item">
      <div className="row align-items-center">
        <div className="col-3">
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
          <div className="d-flex mb-2 font-weight-bold">
            <a className="text-body" href="product.html">
              {props.name}
            </a>{" "}
            <span className="ml-auto">
              {numberWithCommas(props.real_price)}VND
            </span>
          </div>
          {/* Text */}
          <p className="mb-7 font-size-sm text-muted">
            Size: M <br />
            Color: Red
          </p>
          {/*Footer */}
          <div className="d-flex align-items-center">
            {/* Select */}
            <div className="d-flex align-items-center">
              {/* Select */}
              <div className="add">
                <button
                  className="plus"
                  onClick={() => {
                    dispatch(decrease(props._id));
                  }}
                >
                  -
                </button>
                <input
                  type="text"
                  className="cartItem-num"
                  value={props.numCart}
                />
                <button
                  className="minus"
                  onClick={() => {
                    dispatch(increase(props._id));
                  }}
                >
                  +
                </button>
              </div>
            </div>
            {/* Remove */}
            <div
              style={{ cursor: "pointer" }}
              className="font-size-xs text-gray-400 ml-auto"
              onClick={(e) => {
                e.preventDefault();
                dispatch(removeCart(props._id));
              }}
            >
              <i className="fe fe-x" />
              Remove
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
