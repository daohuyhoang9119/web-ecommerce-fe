import { Switch, Route, useRouteMatch } from "react-router-dom";
import Address from "./Address";
import Orders from "./Orders";
import PersonInfo from "./PersonInfo";
import Payment from "./Payment";
import WishList from "./WishList";
import LogOut from "./CheckoutAccount";
import AddressDetail from "./AddressDetail";
import PaymentMethod from "./PaymentMethod";
import OrderDetail from "./OrderDetail";

export default function TabContent({ children }) {
  const { url } = useRouteMatch();

  return (
    <div className="tab-content" style={{ width: "100%" }}>
      <Switch>
        <Route path={`${url}/address`} component={Address} />
        <Route path={`${url}/address-detail`} component={AddressDetail} />
        <Route path={`${url}/payment-method`} component={PaymentMethod} />
        <Route path={`${url}/person`} component={PersonInfo} />
        <Route path={`${url}/payment`} component={Payment} />
        <Route path={`${url}/wishlist`} component={WishList} />
        <Route path={`${url}/`} component={Orders} />
        <Route path={`${url}-detail`} component={OrderDetail} />
      </Switch>
    </div>
  );
}
