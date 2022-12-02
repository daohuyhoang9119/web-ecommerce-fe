import useFormValidate from "../../../core/ReactHook/useFormValidate";
import { useDispatch } from "react-redux";
import { fetchLogin } from "../../../redux/action/user";
import { useSelector } from "react-redux";

export default function LoginCus({ email, confirmPassword }) {
  const dispatch = useDispatch();
  const { loginErr } = useSelector((state) => state.user);
  const { form, setForm, onSubmit, inputChange, error } = useFormValidate(
    {
      username: email || "",
      password: confirmPassword || "",
      checked: false,
    },
    {
      rule: {
        username: {
          required: true,
          pattern: "username",
        },
        password: {
          required: true,
          // pattern: "password",
        },
      },
      message: {
        username: {
          required: "Please fill your username",
        },
        password: {
          // pattern:
          //   "Use 8 or more characters and combine letters, numbers, and symbols",
        },
      },
      option: {
        localStorage: "register-info",
      },
      checkPass: false,
    }
  );
  function handleSubmit(e) {
    e.preventDefault();
    let err = onSubmit();
    if (Object.keys(err).length === 0) {
      dispatch(fetchLogin(form));
    }
  }

  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg mb-10 mb-md-0">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">Returning Customer</h6>
          {/* Form */}
          <form>
            <div className="row">
              <div className="col-12">
                {loginErr && (
                  <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                    {loginErr}
                  </p>
                )}
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="loginEmail">
                    Email Address *
                  </label>
                  <input
                    name="username"
                    className={`form-control form-control-sm ${
                      error?.username ? "error" : ""
                    }`}
                    placeholder="Email Address *"
                    value={form.username}
                    onChange={inputChange}
                    type="text"
                  />
                  {error ? (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.username}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="col-12">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only">Password *</label>
                  <input
                    name="password"
                    className={`form-control form-control-sm ${
                      error?.password ? "error" : ""
                    }`}
                    placeholder="Password *"
                    value={form.password}
                    onChange={inputChange}
                    type="password"
                  />
                  {error?.password ? (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.password}
                    </p>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
              <div className="col-12 col-md">
                {/* Remember */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      id="loginRemember"
                      name="checked"
                      className="custom-control-input"
                      value={form.checked}
                      onChange={(e) =>
                        setForm({ ...form, checked: e.target.checked })
                      }
                      type="checkbox"
                    />
                    <label className="custom-control-label" for="loginRemember">
                      Remember me
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group">
                  <a className="font-size-sm text-reset">Forgot Password?</a>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-sm btn-dark"
                  type="submit"
                >
                  Sign In
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
