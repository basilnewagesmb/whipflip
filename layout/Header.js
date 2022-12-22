import React, { useEffect, useState } from "react";
import Image from "next/image";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Sidebar from "./Sidebar";
import items from "public/data/sidebar.json";
import Link from "next/link";
import { useRouter } from "node_modules/next/router";
import InstantOffer from "components/home/banner/instantOffer";
import { Button } from "antd";
import { CarTwoTone } from "@ant-design/icons";

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
              <Link href="/">
                <Image
                  src="/images/logo.png"
                  alt="Logo"
                  width={275}
                  priority
                  height={50}
                />
              </Link>
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
                    {items.map((item, index) => (
                      <NavDropdown
                        title={item.title}
                        id="basic-nav-dropdown"
                        key={index}
                      >
                        {item?.sub?.map((s, i) => (
                          <Link href={s.path}>
                            <Button
                              icon={
                                pathname == s.path && (
                                  <CarTwoTone twoToneColor="#00b0ef" />
                                )
                              }
                              type="text"
                              style={{
                                color: pathname == s.path && "#00b0ef",
                              }}
                              className="w-100 text-left d-flex align-items-center"
                            >
                              {s.title}
                            </Button>
                          </Link>
                        ))}
                      </NavDropdown>
                    ))}
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
