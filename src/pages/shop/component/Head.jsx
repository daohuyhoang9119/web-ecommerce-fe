import { useRouteMatch, useHistory } from "react-router";
function convertQueryToObject() {
  var search = window.location.search.substring(1);
  return JSON.parse(
    '{"' + decodeURI(search.replace(/&/g, '","').replace(/=/g, '":"')) + '"}'
  );
}
const convertObjectToQuery = function (obj) {
  var str = [];
  for (var p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return str.join("&");
};

export default function Head() {
  let history = useHistory();
  let { path } = useRouteMatch();

  function sortChange(e) {
    let value = e.target.value;
    let queryObj = convertQueryToObject();
    queryObj.sort = value;
    let queryUrl = convertObjectToQuery(queryObj);
    history.push(`${path}?${queryUrl}`);
  }

  return (
    <div className="row align-items-center mb-7">
      <div className="col-12 col-md">
        {/* Heading */}
        <h3 className="mb-1">Womens' Clothing</h3>
        {/* Breadcrumb */}
        <ol className="breadcrumb mb-md-0 font-size-xs text-gray-400">
          <li className="breadcrumb-item">
            <a className="text-gray-400" href="index.html">
              Home
            </a>
          </li>
          <li className="breadcrumb-item active">Women's Clothing</li>
        </ol>
      </div>
      <div className="col-12 col-md-auto">
        {/* Select */}
        <select
          onChange={sortChange}
          className="custom-select custom-select-xs"
        >
          <option selected value="real_price.-1">
            High Price
          </option>
          <option value="real_price.1">Low Price</option>
          <option value="rating_average.-1">High Rating</option>
        </select>
      </div>
    </div>
  );
}
