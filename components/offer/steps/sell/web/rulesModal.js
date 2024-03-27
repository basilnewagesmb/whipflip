import React, { useEffect, useState } from "react";
import { Modal } from "react-bootstrap";
import useCheckMobile from "utils/checkMobile";
import getAmount from "utils/getAmount";
import moment from "moment";
import useOnScreen from "utils/useOnScreen";
import { useRef } from "react";
import Scroll from "components/anim/scroll";
import { Modal as AntModal } from "antd";
import InfoIcon from "components/common/infoIcon";

function RulesModal({
  show,
  handleClose,
  data,
  formRealData,
  submitAppointment,
}) {
  const { confirm } = AntModal;

  const isMobile = useCheckMobile();
  const [isVisible, setIsVisible] = useState(false);
  return (
    <>
      <Modal
        show={show}
        onHide={handleClose}
        className={
          !isMobile ? " rules_of_road rules_of_road_web " : " rules_of_road "
        }
      >
        <Modal.Header className="ror_head" closeButton>
          <Modal.Title>
            <h1>Rules of the Road</h1>
            <p
              style={{
                fontSize: "15px",
              }}
            >
              We`ve created the easiest way ever to sell your car. Please make
              it as easy for us to buy it!
            </p>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className="ror_Body">
          {/* <div style={scrollStyle}>
            <Scroll isLoading={!isVisible} />
          </div> */}
          <div className="rb_hd">
            <h2>
              Please read the following to proceed. If you are not ready to sell
              or disagree with the following below, do not proceed.
            </h2>
          </div>
          <div
            className="ror_list"
            style={{ height: isMobile ? "40vh" : "auto" }}
          >
            <ul>
              <li className="ror_item">
                <h3>
                  Your final offer is <b>{getAmount(data)}</b>.
                </h3>
                <p>
                  This offer is non-negotiable and is based on final inspection.
                  If there is a moderate to major issue that has not been
                  disclosed, your offer may change. A small transaction fee up
                  to $99 may be applied to the final offer amount shown.{" "}
                  <span
                    onClick={() => {
                      confirm({
                        icon: null,
                        content: (
                          <div className="of_body mt-3">
                            <div className="of_list">
                              <div className="of_item">
                                <h6 className="text-center mb-3">
                                  Unlike others, we do not hide our fee!
                                  <span className="under_line"></span>
                                </h6>
                                <b>
                                  A small fee up to $99 may apply to the final
                                  offer amount which is used for:
                                </b>
                              </div>
                              <div className="of_item mt-2">
                                <ul>
                                  <li>Required DMV title & transfer fees</li>
                                  <li>
                                    {" "}
                                    Supports our awesome Car Concierge who
                                    travel to you to pay & pick up, provide a
                                    5-star vehicle selling experience, and
                                    ensure everything is done accurately for
                                    smooth transaction.
                                  </li>
                                </ul>
                              </div>
                              <h6 className="text-center mb-4">
                                Compare to others that charge $499+
                              </h6>
                            </div>
                          </div>
                        ),
                        title: null,
                        closable: true,
                        footer: null,
                        className: "info_pop_up_main",
                      });
                    }}
                  >
                    <span
                      className="text-center font-italic"
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      {" "}
                      <InfoIcon fill="#FFC000" size={30} />
                      <b>{`What's this?`}</b>
                    </span>
                  </span>
                </p>
              </li>
              <li className="ror_item">
                <h3>
                  We are <b>NOT</b> an appraisal service.
                </h3>
                <p>
                  We are traveling to purchase the vehicle and you are 100%
                  ready to sell to us.
                </p>
              </li>
              <li className="ror_item">
                <h3>All ownership documents are ready.</h3>
                <p>
                  This includes ID, title (legally in your name on the front),
                  or loan payoff initial offer.
                </p>
              </li>
              <li className="ror_item">
                <h3>
                  Payment is made via company check through <b>Wells Fargo</b>.
                </h3>
                <p>
                  We do not carry cash as it is unsafe for our Car Concierges,
                  who are buying tons of cars every day.
                </p>
              </li>
            </ul>{" "}
            <div className="appointment">
              <div className="apHd">
                <span>Be on time for your appointment to sell:</span>
                <h3>
                  {moment(
                    formRealData?.appointment_date_string,
                    "MM-DD-YYYY"
                  ).format("MMMM D")}{" "}
                  at {formRealData?.appointment_time}
                </h3>
              </div>
              <div className="apText">
                <p>
                  If something should arise, please contact us immediately at:{" "}
                  <span className="phoneNo">(888) 349-3189</span>
                </p>
                <Visibility setIsVisible={setIsVisible} />
              </div>
            </div>
          </div>
        </Modal.Body>
        <div className="ror_btns">
          <button className="agree_btn text-dark" onClick={handleClose}>
            I Disagree
          </button>
          <button
            className="disagree_btn text-dark"
            onClick={submitAppointment}
          >
            I Agree!
          </button>
        </div>
      </Modal>
    </>
  );
}
const Visibility = ({ setIsVisible }) => {
  const ref = useRef();
  const isVisible = useOnScreen(ref);
  useEffect(() => {
    setIsVisible(isVisible);
  }, [isVisible]);
  return <div ref={ref}></div>;
};
const disableStyle = {
  opacity: 0.5,
  pointerEvents: "none",
  cursor: "default",
};
const scrollStyle = {
  position: "absolute",
  right: "10%",
  bottom: "10%",
};
export default RulesModal;
