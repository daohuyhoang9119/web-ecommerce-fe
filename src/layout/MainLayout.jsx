import Header from "../components/Header";
import ModalCart from "../components/ModalCart";
import ModalProduct from "../components/ModalProduct";
import Footer from "../components/Footer";
import Message from "../components/Message";
import { ModalSearch } from "../components/ModalSearch";

export default function MainLayout({ children }) {
  return (
    <>
      <Header />
      {/* <Message />s */}
      {children}
      <Footer />
      <ModalCart />
      <ModalSearch />
      <ModalProduct />
    </>
  );
}
