import { Link } from "react-router-dom";
export default function InfoContact() {
  return (
    <div className="col-12 col-md-4 col-xl-3">
      <aside className="mb-9 mb-md-0">
        {/* Heading */}
        <h6 className="mb-6">
          <i className="fe fe-phone text-primary mr-4" /> Call to Us:
        </h6>
        {/* Text */}
        <p className="text-gray-500">
          We're available from 10 am - 10 pm EST, 7 days a week.
        </p>
        <p>
          <strong>Customer Service:</strong>
          <br />
          <a className="text-gray-500" href="tel:+84-855-643-245">
            +84-855-643-245
          </a>
        </p>
        <p className="mb-0">
          <strong>Careers:</strong>
          <br />
          <a className="text-gray-500" href="tel:+84-855-643-245">
            +84-855-643-245
          </a>
        </p>
        {/* Divider */}
        <hr />
        {/* Heading */}
        <h6 className="mb-6">
          <i className="fe fe-mail text-primary mr-4" /> Write to Us:
        </h6>
        {/* Text */}
        <p className="text-gray-500">
          Fill out our form and we will contact you within 24 hours.
        </p>
        <p>
          <strong>Customer Service:</strong>
          <br />
          <a className="text-gray-500" href="mailto:17520216@gm.uit.edu.vn">
            17520216@gm.uit.edu.vn
          </a>
        </p>
        <p className="mb-0">
          <strong>Careers:</strong>
          <br />
          <a className="text-gray-500" href="mailto:17520216@gm.uit.edu.vn">
            17520216@gm.uit.edu.vn
          </a>
        </p>
        {/* Divider */}
        <hr />
        {/* Heading */}
        <h6 className="mb-6">
          <i className="fe fe-mail text-primary mr-4" /> Find Us:
        </h6>
        {/* Text */}
        <p className="mb-0 text-gray-500">Want to visit our Offline Stores?</p>
        {/* Button */}
        <p className="mb-0">
          <Link className="btn btn-link px-0 text-body" to="/store">
            Go to Store Locator <i className="fe fe-arrow-right ml-2" />
          </Link>
        </p>
      </aside>
    </div>
  );
}
