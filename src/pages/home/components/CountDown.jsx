import useCountDown from "../../../core/ReactHook/useCountDown";
import { Link } from "react-router-dom";
export default function CountDown() {
  let { day, hours, minute, seconds } = useCountDown(
    (1 * 24 + 5) * 60 * 60 + 1800
  );
  return (
    <section
      className="py-13 bg-cover"
      style={{ backgroundImage: "url(/img/img11.jpeg)" }}
    >
      <div className="container">
        <div className="row justify-content-end">
          <div className="col-12 col-md-8 col-lg-6">
            {/* Heading */}
            <h3 className="mb-7" style={{ color: "white" }}>
              Get -50% from <br />
              Summer Collection
            </h3>
            {/* Counter */}
            <div
              className="d-flex mb-9"
              data-countdown
              data-date="Jan 5, 2021 15:37:25"
            >
              <div className="text-center">
                <div
                  className="font-size-h1 font-weight-bolder text-primary"
                  data-days
                >
                  {day.toString().padStart(2, 0)}
                </div>
                <div className="heading-xxs " style={{ color: "white" }}>
                  Day
                </div>
              </div>
              <div className="px-1 px-md-4">
                <div className="font-size-h2 font-weight-bolder text-primary">
                  :
                </div>
              </div>
              <div className="text-center">
                <div
                  className="font-size-h1 font-weight-bolder text-primary"
                  data-hours
                >
                  {hours.toString().padStart(2, 0)}
                </div>
                <div className="heading-xxs " style={{ color: "white" }}>
                  Hours
                </div>
              </div>
              <div className="px-1 px-md-4">
                <div className="font-size-h2 font-weight-bolder text-primary">
                  :
                </div>
              </div>
              <div className="text-center">
                <div
                  className="font-size-h1 font-weight-bolder text-primary"
                  data-minutes
                >
                  {minute.toString().padStart(2, 0)}
                </div>
                <div className="heading-xxs " style={{ color: "white" }}>
                  Minutes
                </div>
              </div>
              <div className="px-1 px-md-4">
                <div className="font-size-h2 font-weight-bolder text-primary">
                  :
                </div>
              </div>
              <div className="text-center">
                <div
                  className="font-size-h1 font-weight-bolder text-primary"
                  data-seconds
                >
                  {seconds.toString().padStart(2, 0)}
                </div>
                <div className="heading-xxs " style={{ color: "white" }}>
                  Seconds
                </div>
              </div>
            </div>
            {/* Button */}
            <Link className="btn btn-dark" to="/shop">
              Shop Now <i className="fe fe-arrow-right ml-2" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
