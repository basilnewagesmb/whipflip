import React, { useRef, useState } from "react";
import Link from "next/link";
import { faqData } from "components/home/faq";
import { Carousel } from "antd";
import MetaHead from "components/common/metaHead";

function FaqPage() {
  const [current, setCurrent] = useState(0);
  const carouselRef = useRef();

  const tabs = [
    { title: "HOW IT WORKS", component: faqData.howItWorks },
    { title: "WHAT WE BUY", component: faqData.whatWeBuy },
    { title: "INSTANT & FINAL OFFER", component: faqData.quotesAndOffers },
    { title: "APPOINTMENT", component: faqData.appointment },
    { title: "PAYMENTS", component: faqData.payments },
    { title: "FEEDBACK", component: faqData.feedback },
  ];
  const onChange = (currentSlide) => {
    console.log(currentSlide);
  };
  const contentStyle = {
    margin: 0,
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <>
      <MetaHead
        title="Frequently Asked Questions"
        ogTitle="Frequently Asked Questions"
        description="Have a question? We have an answer! Whether you're wondering how to make an appointment or what happens next, read our FAQs to get the answers you're looking for."
        ogDescription="Have a question? We have an answer! Whether you're wondering how to make an appointment or what happens next, read our FAQs to get the answers you're looking for."
      />
      <div className="page-header faq d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title text-center">
              <p className="pt-4">How can we help you?</p>
              <h1>Frequently asked questions</h1>
              <div className="pt-4">
                <form className="form-row justify-content-center d-none">
                  <div className="form-group col-9 col-sm-7">
                    <input
                      type="text"
                      className="form-control form-control-lg input-faq"
                      id="inputSearchfaq"
                      placeholder="Search Questions"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 btn-yellow"
                    >
                      <span className="d-none d-sm-inline">Search</span>
                      <i className="bi bi-search d-sm-none"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100 pb-5 body-text">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-4 col-lg-3 faq-topics">
              <h6 className="font-weight-600">Topics</h6>
              <ul>
                {tabs?.map((item, i) => (
                  <li
                    key={i}
                    onClick={() => {
                      carouselRef?.current?.goTo(i);
                      setCurrent(i);
                    }}
                    className={i == current ? "active pe-auto" : "pe-auto"}
                  >
                    {item.title}
                  </li>
                ))}
              </ul>
            </div>
            <div className="col-md-8 col-lg-9 faq right_sidebar_faq">
              <div className="faqWrapper FaqWrapper">
                <Carousel
                  afterChange={onChange}
                  ref={carouselRef}
                  effect="fade"
                >
                  {tabs?.map((item, i) => (
                    <div key={i}>
                      <div className="faq_for_each" key={i}>
                        <h3 className="font-weight-600">{item.title}</h3>
                        {item.component()}
                      </div>
                    </div>
                  ))}
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default FaqPage;
