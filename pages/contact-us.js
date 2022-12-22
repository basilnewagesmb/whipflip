import MetaHead from "components/common/metaHead";
import React from "react";
function Index() {
  return (
    <>
      <MetaHead title="Contact us" />
      <div className="page-header min-height-none d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <h1>
                Questions? <br /> We’d Love to Hear from You!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div className="primary-bg pb-5">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-6 my-3">
              <div className="card border-0">
                <div className="card-body p-4">
                  <form>
                    <div className="form-row">
                      <div className="form-group WFinput-text col-sm-6">
                        <label htmlFor="contactFirstname">First Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="contactFirstname"
                          placeholder="Your First name"
                        />
                      </div>
                      <div className="form-group WFinput-text col-sm-6">
                        <label htmlFor="contacLastname">Last Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="contacLastname"
                          placeholder="Your Last name"
                        />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group WFinput-text col-sm-6">
                        <label htmlFor="contactEmail">Email</label>
                        <input
                          type="text"
                          className="form-control"
                          id="contactEmail"
                          placeholder="Your Email"
                        />
                      </div>
                      <div className="form-group WFinput-text col-sm-6">
                        <label htmlFor="contacPhone">Phone Number</label>
                        <input
                          type="text"
                          className="form-control"
                          id="contacPhone"
                          placeholder="+1 (000) 000-000"
                        />
                      </div>
                    </div>
                    <div className="form-group WFinput-text">
                      <label htmlFor="contactMessage">Message</label>
                      <textarea
                        className="form-control"
                        id="contactMessage"
                        rows="3"
                        placeholder="How can we help?"
                      ></textarea>
                    </div>
                    <button
                      type="submit"
                      className="btn btn-lg btn-default mb-2 w-100"
                    >
                      Submit
                    </button>
                  </form>
                  <p className="text-xs text-muted">
                   {`By clicking "Next," you acknowledge that your data will be
                    handled in accordance with Airtable's Privacy Policy, and
                    you authorize Airtable to send you updates about Airtable
                    products, services, and events.`}
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-6  my-3">
              <div
                className="gray-bg mb-5 d-flex justify-content-center align-items-center"
                style={{
                  backgroundColor: "#ccc",
                  borderRadius: "4px",
                  minHeight: "200px",
                }}
              >
                Google Map
              </div>
              <div className="text-white">
                <p className="ic_location pl-5">
                  1007 N. Orange Street <br />
                  4th Floor <br />
                  Wilmington, DE 19801
                </p>
                <p className="ic_phone pl-5">(888) 349-3189</p>
                <p className="ic_email pl-5">
                  <a href="#" className="" target="_blank">
                    support@whipflip.com
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Index;
