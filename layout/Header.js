import React, { useEffect, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
const Sidebar = dynamic(() => import("./Sidebar"));
import items from "public/data/sidebar.json";
import Link from "next/link";
import { useRouter } from "node_modules/next/router";
const InstantOffer = dynamic(() => import("components/home/banner/instantOffer"));
import { Button, Modal } from "antd";
import { CarTwoTone } from "@ant-design/icons";
import useCheckMobile from "utils/checkMobile";
import { useDispatch, useSelector } from "react-redux";
import { setIsModalHide, setIsModalOpen } from "features/offer/offerSlice";

function Header() {
  const { current, isModalOpen } = useSelector((state) => state.offer);
  const dispatch = useDispatch();
  const isMobile = useCheckMobile();
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
  const showModal = () => {
    dispatch(setIsModalOpen());
  };
  const handleOk = () => {
    dispatch(setIsModalHide());
  };
  const handleCancel = () => {
    dispatch(setIsModalHide());
  };
  useEffect(() => {
    dispatch(setIsModalHide());
    setOpenSideBar(false);
  }, [pathname]);

  return (
    <div className="whipflip-header">
      {isModalOpen && (
        <Modal
          title={
            <h2
              style={{
                fontWeight: 900,
                fontSize: "26px",
              }}
            >
              Get Instant offer
            </h2>
          }
          open={isModalOpen}
          onOk={handleOk}
          onCancel={handleCancel}
          footer={null}
          className="common_initial_model"
        >
          <InstantOffer handleCancel={handleCancel} />
        </Modal>
      )}
      {pathname?.includes("/vehicle") || pathname?.includes("/prospect") ? (
        <div className="offer_header">
          <div className="offer_header_in">
            <div className="oh_logo">
              <Navbar.Brand href="/">
                <Image
                  src={
                    ["quote", "vehicle", "appointment"]?.includes(
                      pathname.split("/")[pathname.split("/").length - 1]
                    )
                      ? "/images/offer-logo.svg"
                      : "/images/offer-sell-header.svg"
                  }
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
                  src={isMobile ? "/images/logo-mob.png" : "/images/logo.png"}
                  alt="Logo"
                  width={isMobile ? 100 : 275}
                  priority
                  height={isMobile ? 25 : 50}
                />
              </Link>
              <div className="d-flex justify-content-between align-items-center">
                {pathname != "/offer/[id]" && pathname != "/" && isMobile && (
                  <Button
                    htmlType="button"
                    className="getOfferBtn text-uppercase py-0 px-2 mr-3"
                    type="text"
                    onClick={showModal}
                    style={
                      isMobile && {
                        fontSize: "12px",
                      }
                    }
                  >
                    <span>GET INSTANT OFFER</span>
                  </Button>
                )}
                <div
                  className="hambergerMenu scrollHamberger showOnMobileHam"
                  onClick={handleShowSideBar}
                >
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
              {!scroll ? (
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto wf-nav-list">
                    {items.map(
                      (item, index) =>
                        item?.sub && (
                          <NavDropdown
                            title={item.title}
                            id="basic-nav-dropdown"
                            key={index}
                          >
                            {item?.sub?.map((s, i) => (
                              <Link href={s.path} key={i}>
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
                        )
                    )}
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
