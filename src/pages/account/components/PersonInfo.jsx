import ReactLoading from "react-loading";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUpdate, setLoading } from "../../../redux/action/user";
import useFormValidate from "../../../core/ReactHook/useFormValidate";

export default function PersonInfo() {
  const { dataUser, loading } = useSelector((state) => state.user);
  console.log(dataUser);
  let dispatch = useDispatch();
  let yearNow = new Date().getFullYear();

  let birthday = "";
  if (dataUser.birthday === null) {
    birthday = "1/1/2000";
  } else {
    birthday = dataUser.birthday;
  }

  // let [day, month, year] = birthday.split("/");
  // let [date, setDate] = useState({
  //   day: day,
  //   month: month,
  //   year: year,
  // });
  const { form, onSubmit, error, inputChange } = useFormValidate(
    {
      name: dataUser.name,
      last_name: dataUser.last_name,
      email: dataUser.email,
      password: "",
      confirmPassword: "",
      gender: dataUser.gender || "male",
    },
    {
      rule: {
        name: {
          required: true,
          pattern: "name",
        },
        last_name: {
          required: true,
          pattern: "name",
        },
        password: {
          required: true,
        },
        confirmPassword: {
          required: true,
          match: "password",
        },
      },
    }
  );
  function handleSelect(e) {
    let name = e.target.name;
    // setDate({
    //   ...date,
    //   [name]: e.target.value,
    // });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // let send = date.day + "/" + date.month + "/" + date.year;
    // let send = date.day + "/" + date.month + "/" + date.year;
    let exclude = {};
    if (!form.password) {
      exclude = {
        password: true,
        confirmPassword: true,
      };
    }
    let err = onSubmit({ exclude });

    if (Object.keys(err).length === 0) {
      dispatch(setLoading(true));
      // dispatch(fetchUpdate({ ...form, birthday: send }));
    }
  }

  return loading ? (
    <ReactLoading type="cylon" color="#00afab" height={30} width={55} />
  ) : (
    <form>
      <div className="row">
        <div className="col-12 col-md-6">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="accountFirstName">First Name *</label>
            <input
              className={`form-control form-control-sm ${
                error?.name ? "error" : ""
              }`}
              onChange={inputChange}
              name="name"
              type="text"
              placeholder="First Name *"
              value={form.name}
            />
            {error?.name && <p className="text-error">{error.name}</p>}
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="accountLastName">Last Name *</label>
            <input
              onChange={inputChange}
              className={`form-control form-control-sm ${
                error?.last_name ? "error" : ""
              }`}
              name="last_name"
              type="text"
              placeholder="Last Name *"
              value={form.last_name}
            />
            {error?.last_name && (
              <p className="text-error">{error.last_name}</p>
            )}
          </div>
        </div>
        <div className="col-12">
          {/* Email */}
          <div className="form-group">
            <label htmlFor="accountEmail">Email Address *</label>
            <input
              onChange={inputChange}
              name="email"
              className={`form-control form-control-sm ${
                error?.email ? "error" : ""
              }`}
              type="text"
              placeholder="Email Address *"
              value={form.email}
            />
            {error?.email && <p className="text-error">{error.email}</p>}
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <div className="form-group">
            <label htmlFor="accountPassword">Current Password *</label>
            <input
              onChange={inputChange}
              name="password"
              type="password"
              className={`form-control form-control-sm ${
                error?.password ? "error" : ""
              }`}
              placeholder="Current Password *"
              value={form.password}
            />
            {error?.password && <p className="text-error">{error.password}</p>}
          </div>
        </div>
        <div className="col-12 col-md-6">
          {/* Password */}
          <div className="form-group">
            <label htmlFor="AccountNewPassword">New Password *</label>
            <input
              onChange={inputChange}
              name="confirmPassword"
              type="password"
              className={`form-control form-control-sm ${
                error?.confirmPassword ? "error" : ""
              }`}
              placeholder="New Password *"
              value={form.confirmPassword}
            />
            {error?.confirmPassword && (
              <p className="text-error">{error.confirmPassword}</p>
            )}
          </div>
        </div>
        <div className="col-12 col-lg-6">
          {/* Birthday */}
          <div className="form-group">
            {/* Label */}
            <label>Date of Birth</label>
            {/* Inputs */}
            <div className="form-row">
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountDate">
                  Date
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountDate"
                  onChange={handleSelect}
                  name="day"
                  // value={date.day}
                  value={1}
                >
                  {[...Array(31)].map((e, i) => (
                    <option onChange={inputChange} value={i + 1} key={i}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col">
                {/* Date */}
                <label className="sr-only" htmlFor="accountMonth">
                  Month
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountMonth"
                  name="month"
                  onChange={handleSelect}
                  // value={date.month}
                  value={1}
                >
                  {[...Array(12)].map((e, i) => (
                    <option onClick={inputChange} value={i + 1} key={i}>
                      {i + 1}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-auto">
                {/* Date */}
                <label className="sr-only" htmlFor="accountYear">
                  Year
                </label>
                <select
                  className="custom-select custom-select-sm"
                  id="accountYear"
                  name="year"
                  onChange={handleSelect}
                  // value={date.year}
                  value={2}
                >
                  {[...Array(100)].map((e, i) => (
                    <option value={yearNow - i} key={i}>
                      {yearNow - i}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          {/* Gender */}
          <div className="form-group mb-8">
            <label>Gender</label>
            <div className="btn-group-toggle" data-toggle="buttons">
              <label className="btn btn-sm btn-outline-border active">
                <input
                  name="gender"
                  value="female"
                  type="radio"
                  onClick={inputChange}
                  checked={form.gender === "female"}
                />
                Female
              </label>
              <label className="btn btn-sm btn-outline-border">
                <input
                  onClick={inputChange}
                  name="gender"
                  value="male"
                  type="radio"
                  checked={form.gender === "male"}
                />
                Male
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          {/* Button */}
          <button className="btn btn-dark" type="submit" onClick={handleSubmit}>
            Save Changes
          </button>
        </div>
      </div>
    </form>
  );
}
