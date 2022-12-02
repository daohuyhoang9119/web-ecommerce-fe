import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ItemWishList from "./ItemWishList";
import { getWishList } from "../../../redux/action/user";
import Paging from "../../../components/Paging";

export default function WishList() {
  let dispatch = useDispatch();
  let { wishlist } = useSelector((state) => state.product);
  useEffect(() => {
    dispatch(getWishList());
  }, []);

  return (
    <>
      <div className="row">
        {wishlist.map((e) => (
          <ItemWishList key={e._id} {...e} />
        ))}
      </div>
      <div className="col-12">
        <Paging />
      </div>
    </>
  );
}
