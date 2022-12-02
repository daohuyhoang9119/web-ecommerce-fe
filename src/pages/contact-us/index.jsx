import InfoContact from "./components/InfoContact";
import FormContact from "./components/FormContact";

export default function Contact() {
  return (
    <>
      <nav className="py-5">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Breadcrumb */}
              <ol className="breadcrumb mb-0 font-size-xs text-gray-400">
                <li className="breadcrumb-item">
                  <a className="text-gray-400" href="index.html">
                    Home
                  </a>
                </li>
                <li className="breadcrumb-item active">Contact Us</li>
              </ol>
            </div>
          </div>
        </div>
      </nav>
      {/* CONTENT */}
      <section className="pt-7 pb-12">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Heading */}
              <h3 className="mb-10 text-center">Contact Us</h3>
            </div>
          </div>
          <div className="row justify-content-between">
            <InfoContact />
            <FormContact />
          </div>
        </div>
      </section>
    </>
  );
}
