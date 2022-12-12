import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Sidebar from "./Sidebar";
import Head from "next/head";
import Link from "next/link";
function Header() {
  const [scroll, setScroll] = useState(false);
  const [openSideBar, setOpenSideBar] = useState(false);
  const handleShowSideBar = () => {
    setOpenSideBar(true);
  };
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 150);
    });
  });
  return (
    <div  className="whipflip-header">
      <div className="whipflip-fluid">
        <div
          className={
            "menuNav " +
            (scroll ? "stickyMenu animated fadeInDown" : "staticMenu")
          }
        >
          <Navbar expand="lg" className="whipflip_nav navBar">
            <Navbar.Brand href="/">
              <Image
                src="/images/logo.png"
                alt="Vercel Logo"
                width={275}
                height={50}
              />
            </Navbar.Brand>
            {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}
            <div
              className="hambergerMenu scrollHamberger showOnMobileHam"
              onClick={handleShowSideBar}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
            {!scroll ? (
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto wf-nav-list">
                  <NavDropdown title="About WhipFlip" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/about">Company</NavDropdown.Item>
                    <NavDropdown.Item href="/reviews">
                      Customer Reviews
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/careers">Careers</NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="How It Works" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/whysellyourcartous">
                      Why Sell Your Car to Us?
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/privatesale_vs_tradingin">
                      Private Sale or Trading In?
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/ourreferralprogram">
                      Our Referral Program
                    </NavDropdown.Item>
                  </NavDropdown>
                  <NavDropdown title="Support" id="basic-nav-dropdown">
                    <NavDropdown.Item href="/pagefaq">FAQ</NavDropdown.Item>
                    <NavDropdown.Item href="/blog">Blog</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.3">Chat</NavDropdown.Item>
                    <NavDropdown.Item href="/contactus">
                      Contact Us
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
            ) : (
              <>
                <div className="vehicleDetailNav">
                  <div className="vdnHd">
                    <div className="vdnHdIn">
                      <span>Enter vehicle details</span>
                      <span>for an instant offer.</span>
                    </div>
                  </div>
                  <div className="vdnForm">
                    <div className="vdnForm_fields">
                      <form autoComplete="off" className="form" role="form">
                        <div className="vdn_frm_flds">
                          <div className="form-group row vdn_grp_row">
                            <div className="col-lg-12">
                              <select
                                className="form-control firstSelect"
                                id="user_time_zone"
                                size="0"
                              >
                                <option value="Hawaii">Year</option>
                                <option value="Alaska">
                                  (GMT-09:00) Alaska
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row vdn_grp_row">
                            <div className="col-lg-12">
                              <select
                                className="form-control"
                                id="user_time_zone"
                                size="0"
                              >
                                <option value="Hawaii">Make</option>
                                <option value="Alaska">
                                  (GMT-09:00) Alaska
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row vdn_grp_row">
                            <div className="col-lg-12">
                              <select
                                className="form-control"
                                id="user_time_zone"
                                size="0"
                              >
                                <option value="Hawaii">Model</option>
                                <option value="Alaska">
                                  (GMT-09:00) Alaska
                                </option>
                              </select>
                            </div>
                          </div>
                          <div className="form-group row vdn_grp_row">
                            <div className="col-lg-12">
                              <select
                                className="form-control lastSelect"
                                id="user_time_zone"
                                size="0"
                              >
                                <option value="Hawaii">Trim/Series</option>
                                <option value="Alaska">
                                  (GMT-09:00) Alaska
                                </option>
                              </select>
                            </div>
                          </div>
                        </div>
                        <div className="form-group row vdn_grp_row">
                          <div className="col-lg-12">
                            <input
                              className="btn btn-secondary getOfferBtn nav_getOfferBtn"
                              type="reset"
                              value="Get Instant Offer"
                            />
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                  <div
                    className="hambergerMenu scrollHamberger"
                    onClick={handleShowSideBar}
                  >
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </>
            )}
          </Navbar>
        </div>
      </div>
      <div className="sideMenu">
        <Sidebar
          handleShowSideBar={handleShowSideBar}
          openSideBar={openSideBar}
          setOpenSideBar={setOpenSideBar}
        />
      </div>
    </div>
  );
}

export default Header;
