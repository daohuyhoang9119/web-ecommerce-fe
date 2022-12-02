import { Link } from "react-router-dom";

export default function Title() {
  return (
    <div className="row">
      <div className="col-12 text-center">
        {/* Heading */}
        <h3 className="mb-4">Checkout</h3>
        {/* Subheading */}
        <p className="mb-10">
          Already have an account?{" "}
          <Link to="/auth" className="font-weight-bold text-reset">
            Click here to login
          </Link>
        </p>
      </div>
    </div>
  );
}
