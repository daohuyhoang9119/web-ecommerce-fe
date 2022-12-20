import { Link } from "react-router-dom";
import { addCart } from "../../../redux/action/cart";
import { fetchWishList } from "../../../redux/action/user";
import { Skeleton } from "@material-ui/lab";
import { useDispatch, useSelector } from "react-redux";
import { numberWithCommas } from "../../../utils/format";
import { viewProduct } from "../../../redux/action/product";

export default function ProductItem(props) {
  let { loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();
  // const { name, images, real_price, rating_average, slug } = props;
  const { id, title, images, price, rating_Average, imageUrl_1, imageUrl_2 } =
    props;

  //Rating_Average,Title,Price,
  // let image1 = images?.[0]?.medium_url;
  // let image1 =
  //   "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80";
  // // let image2 = images?.[0]?.medium_url;
  // let image2 =
  //   "https://images.unsplash.com/photo-1505156868547-9b49f4df4e04?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=716&q=80";

  let tiki =
    "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
  function handleAddCart() {
    dispatch(addCart({ ...props }));
  }
  const addWishList = () => {
    dispatch(fetchWishList({ ...props }));
  };

  const handleViewCart = () => {
    dispatch(viewProduct({ ...props }));
  };

  return (
    <div className="col-6 col-md-4">
      {/* Card */}
      <div className="card mb-7">
        {/* Badge */}
        <div className="badge badge-white card-badge card-badge-left text-uppercase">
          New
        </div>
        {/* Image */}
        <div className="card-img">
          {/* Image */}
          {/* <Link className="card-img-hover" to={`shop/${slug}`}> */}
          <Link className="card-img-hover" to={`shop`}>
            {loading === true ? (
              <Skeleton variant="rect" width="100%" height={252} />
            ) : (
              <>
                {imageUrl_1 && (
                  <img
                    className="card-img-top card-img-back"
                    src={
                      imageUrl_1 ===
                      "https://salt.tikicdn.com/assets/img/image.svg"
                        ? tiki
                        : imageUrl_1
                    }
                    alt="..."
                  />
                )}
                {imageUrl_2 ? (
                  <img
                    className="card-img-top card-img-front"
                    style={{ height: "100%" }}
                    src={
                      imageUrl_2 ===
                      "https://salt.tikicdn.com/assets/img/image.svg"
                        ? tiki
                        : imageUrl_2
                    }
                    alt="..."
                  />
                ) : (
                  <img
                    className="card-img-top card-img-back"
                    src={
                      imageUrl_1 ===
                      "https://salt.tikicdn.com/assets/img/image.svg"
                        ? tiki
                        : imageUrl_1
                    }
                    alt="..."
                  />
                )}
              </>
            )}
          </Link>
          {/* Actions */}
          <div className="card-actions">
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="modal"
                data-target="#modalProduct"
                onClick={handleViewCart}
              >
                <i className="fe fe-eye" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
                onClick={handleAddCart}
              >
                <i className="fe fe-shopping-cart" />
              </button>
            </span>
            <span className="card-action">
              <button
                className="btn btn-xs btn-circle btn-white-primary"
                data-toggle="button"
                onClick={addWishList}
              >
                <i className="fe fe-heart" />
              </button>
            </span>
          </div>
        </div>
        {/* Body */}
        <div className="card-body px-0">
          {/* Category */}
          <div className="font-size-xs">
            {/* <a className="text-muted" href="shop.html">
              {loading ? (
                <Skeleton variant="rect" width="100%" height={20} />
              ) : (
                { name }
              )}
            </a> */}
          </div>
          {/* Title */}
          <div class="font-weight-bold">
            <Link class="text-body" to={`Product/${id}`}>
              {loading === true ? (
                <Skeleton variant="rect" width="100%" height={20} />
              ) : (
                <>{title}</>
              )}
            </Link>
          </div>

          {loading === true ? (
            <Skeleton variant="rect" width="100%" height={20} />
          ) : (
            <div
              class="rating font-size-sm text-dark"
              data-value={rating_Average + 1}
            >
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
              <div class="rating-item">
                <i class="fas fa-star"></i>
              </div>
            </div>
          )}
          {/* Price */}
          <div className="font-weight-bold text-muted">
            {loading === true ? (
              <Skeleton variant="rect" width="100%" height={20} />
            ) : (
              // <>{numberWithCommas(real_price)} VND</>
              <> {price} VND</>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
