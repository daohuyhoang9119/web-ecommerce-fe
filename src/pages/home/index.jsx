import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Brand from "./components/Brand";
import Review from "./components/Review";
import CountDown from "./components/CountDown";
import TopSeller from "./components/TopSeller";
import BestPick from "./components/BestPick";
import Feature from "./components/Feature";
import Slider from "./components/Slider";
import { actionLoading } from "../../redux/action/product";
export default function Home() {
  let dispatch = useDispatch();
  let [state, setState] = useState();
  let [data, setData] = useState();
  useEffect(() => {
    dispatch(actionLoading());
    // callAPi();
  }, []);

  // async function callAPi() {
  //   let res = await fetch(
  //     `https://cfd-reactjs.herokuapp.com/product?sort=real_price.-1&categories=1789&page=3`
  //   ).then((res) => res.json());
  //   let res1 = await fetch(
  //     `https://cfd-reactjs.herokuapp.com/product?categories=17166&sort=real_price.-1`
  //   ).then((res) => res.json());
  //   let res2 = await fetch(
  //     ` https://cfd-reactjs.herokuapp.com/product?categories=8594&sort=real_price.-1`
  //   ).then((res) => res.json());

  //   if (res.data) {
  //     dispatch({
  //       type: "loadingHome",
  //       payload: {
  //         res: res.data,
  //         res1: res1.data,
  //         res2: res2.data,
  //       },
  //     });
  //     setState({
  //       res: res.data,
  //       res1: res1.data,
  //       res2: res2.data,
  //     });
  //   }
  // }

  return (
    <>
      <Slider />
      {/* FEATURES */}
      <Feature />
      {/* BEST PICKS */}
      <BestPick />
      {/* TOP SELLERS */}
      {/* <TopSeller data={state} /> */}
      {/* COUNTDOWN */}
      <CountDown />
      {/* REVIEWS */}
      <Review />
      {/* BRANDS */}
      <Brand />
    </>
  );
}
