import { useState } from "react";
import reviewApi from "../api/reviewApi";
export default function Review(props) {
  let {
    title,
    content,
    createAt,
    email,
    name,
    clickComment,
    rating,
    like,
    dislike,
    id,
    active,
  } = props;

  let [vote, setVote] = useState(like || 0);
  let [bad, setBad] = useState(dislike || 0);
  async function handleVote(e) {
    e.preventDefault();

    setVote(vote + 1);
    let res = await reviewApi.putReview(
      {
        ...props,
        dislike: bad,
        like: vote + 1,
      },
      id
    );
  }
  async function handleBad(e) {
    e.preventDefault();

    setBad(bad + 1);
    let res = await reviewApi.putReview(
      {
        ...props,
        dislike: bad + 1,
        like: vote,
      },
      id
    );
  }
  return (
    <div className="review">
      <div className="review-body">
        <div className="row">
          <div className="col-12 col-md-auto">
            {/* Avatar */}
            <div className="avatar avatar-xxl mb-6 mb-md-0">
              <span className="avatar-title rounded-circle">
                <i className="fa fa-user" />
              </span>
            </div>
          </div>
          <div className="col-12 col-md">
            {/* Header */}
            <div className="row mb-6">
              <div className="col-12">
                {/* Rating */}
                <div
                  className="rating font-size-sm text-dark"
                  data-value={rating}
                >
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                  <div className="rating-item">
                    <i className="fas fa-star" />
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Time */}
                <span className="font-size-xs text-muted">
                  {name}, <time dateTime={createAt}>{createAt}</time>
                </span>
                <br />
                <span className="font-size-xs text-muted">{email}</span>
              </div>
            </div>
            {/* Title */}
            <p className="mb-2 font-size-lg font-weight-bold">{title}</p>
            {/* Text */}
            <p className="text-gray-500">{content}</p>
            {/* Footer */}
            <div className="row align-items-center">
              <div className="col-auto d-none d-lg-block">
                {/* Text */}
                <p className="mb-0 font-size-sm">Was this review helpful?</p>
              </div>
              <div className="col-auto mr-auto">
                {/* Rate */}
                <div className="rate">
                  <a
                    className="rate-item"
                    data-toggle="vote"
                    data-count={vote}
                    href="#"
                    onClick={handleVote}
                    role="button"
                  >
                    <i
                      style={{ marginRight: "8px" }}
                      className="fe fe-thumbs-up"
                    />
                  </a>
                  <a
                    onClick={handleBad}
                    className="rate-item"
                    data-toggle="vote"
                    data-count={bad}
                    href="#"
                    role="button"
                  >
                    <i
                      style={{ marginRight: "8px" }}
                      className="fe fe-thumbs-down"
                    />
                  </a>
                </div>
              </div>
              <div className="col-auto d-none d-lg-block">
                {/* Text */}
                {/* <p className="mb-0 font-size-sm">Comments (0)</p> */}
              </div>
              <div className="col-auto">
                {/* Button */}
                {active ? (
                  <a
                    onClick={clickComment}
                    className="btn btn-xs btn-outline-border"
                    data-toggle="collapse"
                    href="#reviewForm"
                  >
                    Comment
                  </a>
                ) : (
                  ""
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
