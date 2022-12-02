import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import useFormValidate from "../../../core/ReactHook/useFormValidate";
import { fetchRegister } from "../../../redux/action/user";

export default function NewCus() {
  let dispatch = useDispatch();
  let { registerErr, registerSuccess } = useSelector((state) => state.user);

  const { error, inputChange, onSubmit, form } = useFormValidate(
    {
      firstName: "",
      lastName: "",
      username: "",
      password: "",
      confirmPassword: "",
    },
    {
      rule: {
        firstName: {
          required: true,
          pattern: "name",
        },
        lastName: {
          pattern: "name",
          required: true,
        },
        username: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
        },
        confirmPassword: {
          required: true,
          match: "password",
        },
      },
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    let err = onSubmit();
    if (Object.keys(err).length === 0) {
      dispatch(fetchRegister(form));
    }
  }

  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">New Customer</h6>
          {/* Form */}
          <form>
            {registerErr && (
              <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                {registerErr}
              </p>
            )}
            {registerSuccess && (
              <p style={{ marginBottom: 15, color: "green" }}>
                {registerSuccess}
              </p>
            )}
            <div className="row">
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerFirstName">
                    First Name *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerFirstName"
                    type="text"
                    placeholder="First Name *"
                    name="firstName"
                    value={form.firstName}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.firstName}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerLastName">
                    Last Name *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerLastName"
                    type="text"
                    placeholder="Last Name *"
                    name="lastName"
                    value={form.lastName}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerEmail">
                    Email Address *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerEmail"
                    type="email"
                    placeholder="Email Address *"
                    name="username"
                    value={form.username}
                    onChange={inputChange}
                  />
                  {error?.username && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.username}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPassword">
                    Password *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerPassword"
                    type="password"
                    placeholder="Password *"
                    name="password"
                    value={form.password}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPasswordConfirm">
                    Confirm Password *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerPasswordConfirm"
                    type="password"
                    placeholder="Confrm Password *"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group font-size-sm text-muted">
                  By registering your details, you agree with our Terms &amp;
                  Conditions, and Privacy and Cookie Policy.
                </div>
              </div>
              <div className="col-12 col-md">
                {/* Newsletter */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="registerNewsletter"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="registerNewsletter"
                    >
                      Sign me up for the Newsletter!
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-sm btn-dark"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
