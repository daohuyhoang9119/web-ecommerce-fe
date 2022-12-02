import MainLayout from "./layout/MainLayout";
import Home from "./pages/home";
import Faq from "./pages/faq";
import About from "./pages/about";
import Auth from "./pages/auth";
import Account from "./pages/account";
import Address from "./pages/account/components/Address";
import Orders from "./pages/account/components/Orders";
import PersonInfo from "./pages/account/components/PersonInfo";
import Blog from "./pages/blog-post";
import CheckOut from "./pages/checkout";
import Store from "./pages/store";
import Contact from "./pages/contact-us";
import Products from "./pages/product";
import ComingSoon from "./pages/coming-soon";
import Page404 from "./pages/page404";
import Payment from "./pages/account/components/Payment";
import AddressDetail from "./pages/account/components/AddressDetail";
import PaymentMethod from "./pages/account/components/PaymentMethod";
import OrderDetail from "./pages/account/components/OrderDetail";
import Shop from "./pages/shop";
import ShippingCart from "./pages/shipping-cart";

import { CartItem } from "./components/ModalCart";
import WishList from "./pages/account/components/WishList";
import OrderCompleted from "./pages/order-complete/OrderComplete";
import Admin from "./pages/admin";

const routers = [
  {
    path: "/faq",
    component: Faq,
    exact: true,
  },
  {
    path: "/coming",
    component: ComingSoon,
  },
  {
    path: "/admin",
    component: Admin,
  },
  {
    path: "/",
    component: MainLayout,
    routers: [
      {
        path: "/about",
        component: About,
      },
      {
        path: "/store",
        component: Store,
      },
      {
        path: "/ship",
        component: ShippingCart,
      },
      {
        path: "/auth",
        component: Auth,
      },
      {
        path: "/blog-post",
        component: Blog,
      },
      {
        path: "/account/",
        component: Account,
        auth: true,
        routers: [
          {
            path: "address",
            component: Address,
          },
          {
            path: "wishlist",
            component: WishList,
          },
          {
            path: "/address-detail",
            component: AddressDetail,
          },
          {
            path: "/payment-method",
            component: PaymentMethod,
          },
          {
            path: "orders",
            component: Orders,
            exact: true,
          },
          {
            path: "orders/:slug",
            component: OrderDetail,
          },
          {
            path: "payment",
            component: Payment,
          },
          {
            path: "person",
            component: PersonInfo,
          },
        ],
      },
      {
        path: "/contact",
        component: Contact,
      },
      {
        exact: true,
        path: "/shop",
        component: Shop,
      },
      {
        path: "/checkout",
        component: CheckOut,
      },
      {
        path: "/shop/:slug",
        component: Products,
      },
      {
        path: "/order-complete",
        component: OrderCompleted,
      },
      {
        exact: true,
        path: "/",
        component: Home,
      },
      {
        component: Page404,
      },
    ],
  },
];
export default routers;
