import { useSelector } from "react-redux";
import { numberWithCommas } from "../../utils/format";

export default function Payment() {
  const ship = 20000;
  const { amount } = useSelector((state) => state.cart);
  return (
    <div className="card mb-9 bg-light">
      <div className="card-body">
        <ul className="list-group list-group-sm list-group-flush-y list-group-flush-x">
          <li className="list-group-item d-flex">
            <span>Subtotal</span>{" "}
            <span className="ml-auto font-size-sm">
              {numberWithCommas(amount)} VND
            </span>
          </li>
          <li className="list-group-item d-flex">
            <span>Tax</span>{" "}
            <span className="ml-auto font-size-sm">$00.00</span>
          </li>
          <li className="list-group-item d-flex">
            <span>Shipping</span>{" "}
            <span className="ml-auto font-size-sm">{ship} VND</span>
          </li>
          <li className="list-group-item d-flex font-size-lg font-weight-bold">
            <span>Total</span>{" "}
            <span className="ml-auto">
              {numberWithCommas(ship + amount)} VND
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}
