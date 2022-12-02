const axios = require("axios");

const reviewApi = {
  review: (slug) => {
    return fetch(`http://localhost:5000/data?slug=${slug}`).then((res) =>
      res.json()
    );
  },
  postReview: (review) => {
    return fetch(`http://localhost:5000/data`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(review),
    }).then((res) => res.json());
  },
  putReview: (review, id) => {
    return axios.put(`http://localhost:5000/data/${id}`, review);
  },
};
export default reviewApi;
