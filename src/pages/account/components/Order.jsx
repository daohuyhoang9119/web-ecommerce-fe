import { Link, useRouteMatch } from "react-router-dom";
import { useEffect, useState } from "react";
import cartApi from "../../../api/cartApi";
import ReactLoading from "react-loading";
import { ORDER } from "../../../redux/type";
import { useDispatch, useSelector } from "react-redux";
import OrderItem from "./OrderItem";

export default function Order() {
  let dispatch = useDispatch();
  let { order } = useSelector((order) => order.user);

  const [loading, setLoading] = useState(true);
  useEffect(async () => {
    let res = await cartApi.getAllOrder();
    if (res) {
      dispatch({
        type: ORDER,
        payload: res.data,
      });
      setLoading(false);
    }
  }, []);

  if (loading)
    return <ReactLoading type="cylon" color="#00afab" height={30} width={55} />;

  return (
    <>
      {order.map((e) => (
        <OrderItem key={e._id} order={e} />
      ))}
    </>
  );
}
