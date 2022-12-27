import { NavLink, useRouteMatch } from "react-router-dom";
import { logout } from "../../../redux/action/user";
import { useDispatch } from "react-redux";
import { clearCart } from "../../../redux/action/cart";
export function getUrl() {
  let link = window.location.href.split("/");
  return link[link.length - 1];
}
export default function TabTitle() {
  const { url } = useRouteMatch();
  const dispatch = useDispatch();

  return (
    <div className="col-12 col-md-3">
      {/* Nav */}
      <nav className="mb-10 mb-md-0">
        <div className="list-group list-group-sm list-group-strong list-group-flush-x">
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle"
            to={`${url}/orders`}
            data-value="orders"
          >
            Orders
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle"
            to={`${url}/wishlist`}
            data-value="Wishlist"
          >
            Wishlist
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to={`${url}/person`}
            data-value="person"
          >
            Personal Info
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to={`${url}/address`}
            data-value="address"
          >
            Addresses
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle "
            to={`${url}/payment`}
            data-value="payment"
          >
            Payment Methods
          </NavLink>
          <NavLink
            className="list-group-item list-group-item-action dropright-toggle"
            to={`/auth`}
            onClick={() => {
              dispatch(logout());
              dispatch(clearCart());
            }}
          >
            Logout
          </NavLink>
        </div>
      </nav>
    </div>
  );
}
