import TabTitle from "./components/TabTitle";

export default function Account({ children }) {
  return (
    <section className="pt-7 pb-12">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            {/* Heading */}
            <h3 className="mb-10">My Account</h3>
          </div>
        </div>
        <div className="row">
          <TabTitle />
          <div className="col-12 col-md-9 col-lg-8 offset-lg-1">
            <div className="row">
              <div className="tab-content" style={{ width: "100%" }}>
                {children}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
