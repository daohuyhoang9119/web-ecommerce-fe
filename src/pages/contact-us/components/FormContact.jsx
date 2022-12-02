import useFormValidate from "../../../core/ReactHook/useFormValidate";
import localStoreApi from "../../../api/localStoreApi";
import { useState } from "react";

export default function FormContact() {
  const { inputChange, form, onSubmit, error } = useFormValidate(
    {
      name: "",
      email: "",
      title: "",
      message: "",
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        email: {
          required: true,
          pattern: "email",
        },
        title: {
          required: true,
        },
        message: {
          required: true,
        },
      },
    }
  );

  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    let err = onSubmit();
    if (Object.keys(err).length === 0) {
      localStoreApi.contact(form).then(
        (res) => {
          if (res.success) {
            setMessage("Thank for letting us know");
          }
        },
        (res) => {
          setMessage(res.error);
        }
      );
    }
  }
  return (
    <div className="col-12 col-md-8">
      {/* Form */}
      {message && <p style={{ color: "green" }}>{message}</p>}
      <form>
        {/* Email */}
        <div className="form-group">
          <label className="sr-only" htmlFor="contactName">
            Your Name *
          </label>
          <input
            className={`form-control form-control-sm ${
              error?.name ? "error" : ""
            }`}
            id="contactName"
            type="text"
            placeholder="Your Name *"
            value={form.name}
            name="name"
            onChange={inputChange}
          />
          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>{error?.name}</p>
        </div>
        {/* Email */}
        <div className="form-group">
          <label className="sr-only" htmlFor="contactEmail">
            Your Email *
          </label>
          <input
            className={`form-control form-control-sm ${
              error?.email ? "error" : ""
            }`}
            id="contactEmail"
            type="email"
            placeholder="Your Email *"
            value={form.email}
            name="email"
            onChange={inputChange}
          />
          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
            {error?.email}
          </p>
        </div>
        {/* Email */}
        <div className="form-group">
          <label className="sr-only" htmlFor="contactTitle">
            Title *
          </label>
          <input
            className={`form-control form-control-sm ${
              error?.title ? "error" : ""
            }`}
            id="contactTitle"
            type="text"
            placeholder="Title *"
            value={form.title}
            name="title"
            onChange={inputChange}
          />
          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
            {error?.title}
          </p>
        </div>
        {/* Email */}
        <div className="form-group mb-7">
          <label className="sr-only" htmlFor="contactMessage">
            Message *
          </label>
          <textarea
            className={`form-control form-control-sm ${
              error?.message ? "error" : ""
            }`}
            id="contactMessage"
            rows={5}
            placeholder="Message *"
            value={form.message}
            name="message"
            onChange={inputChange}
            defaultValue={""}
          />
          <p style={{ color: "#ff6f61", fontStyle: "italic" }}>
            {error?.message}
          </p>
        </div>
        {/* Button */}
        <button className="btn btn-dark" onClick={handleSubmit}>
          Send Message
        </button>
      </form>
    </div>
  );
}
