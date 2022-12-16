import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Sidebar from "./Sidebar";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "node_modules/next/router";
import InstantOffer from "components/home/banner/instantOffer";
function Header() {
  const { pathname } = useRouter();
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
    <div className="whipflip-header">
      {pathname == "/offer/[id]" ? (
        <div className="offer_header">
          <div className="offer_header_in">
            <div className="oh_logo">
              <Navbar.Brand href="/">
                <Image
                  src="/images/offer-sell-header.svg"
                  alt="offer sell logo"
                  title="offer sell logo"
                  width={250}
                  height={40}
                  priority
                />
              </Navbar.Brand>
            </div>
            <div className="hambergerMenu" onClick={handleShowSideBar}>
              <span></span>

              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      ) : (
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
                  priority
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
                      <NavDropdown.Item href="/careers">
                        Careers
                      </NavDropdown.Item>
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
                      <NavDropdown.Item href="#action/3.3">
                        Chat
                      </NavDropdown.Item>
                      <NavDropdown.Item href="/contactus">
                        Contact Us
                      </NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              ) : (
                <InstantOffer header handleShowSideBar={handleShowSideBar} />
              )}
            </Navbar>
          </div>
        </div>
      )}

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
