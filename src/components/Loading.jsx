import ReactLoading from "react-loading";
import ReactDOM from "react-dom";
export default function Loading() {
  return ReactDOM.createPortal(
    <div className="loading">
      <ReactLoading type="cylon" color="#00afab" height={30} width={55} />
    </div>,
    document.getElementById("root2")
  );
}
