import LoginCus from "./components/LoginCus";
import NewCus from "./components/NewCus";
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

export default function Auth() {
  const { login, dataUser } = useSelector((state) => state.user);
  if (login) return <Redirect to="/account/person" />;
  return (
    <section className="py-12">
      <div className="container">
        <div className="row">
          <LoginCus
            email={dataUser?.email}
            password={dataUser?.confirmPassword}
          />
          <NewCus />
        </div>
      </div>
    </section>
  );
}
