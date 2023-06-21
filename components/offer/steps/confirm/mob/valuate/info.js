import React from "react";
import { CloseOutlined } from "@ant-design/icons";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { Button } from "antd";
function InfoCam({ setSkipped }) {
  return (
    <Modal.Body
      className="cr_body cr_body_web h-auto mvh-100 py-0"
      onClick={() => {
        setSkipped(true);
      }}
    >
      <Button
        onClick={() => {
          setSkipped(true);
        }}
        className="btn"
        style={{
          fontSize: "20px",
          color: "#fff",
          position: "absolute",
          right: "10px",
          top: "10px",
          width: "50px",
          height: "50px",
          zIndex: "0",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <CloseOutlined />
      </Button>
      <div className="cr_body_in">
        {" "}
        <div className="cr_head_dec">
          <div className="cr_hd_img bg-transparent">
            <Image
              src="/images/tilt.svg"
              alt="rotate"
              title="rotate"
              width={120}
              height={80}
            />
          </div>
          <div className="cr_hd_dec mt-1">
            <h6 className="text-light font-normal">
              Fit your vehicle within the outline as best as you can and we will
              take care of the rest!
            </h6>
          </div>
        </div>
        <div className="cr_middle cr_middle_web bg-transparent mt-0">
          <div className="crm_offer_info pt-0">
            <div className="crm_info_item col-4">
              <div className="info_left">
                <div className="il_image">
                  <Image
                    src="/images/c1.svg"
                    alt="clear"
                    title="clear"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="info_right">
                <span>
                  Clear away any heavy debris (eg. dirt,snow) from the vehicle{" "}
                </span>
              </div>
            </div>
            <div className="crm_info_item col-4">
              <div className="info_left">
                <div className="il_image">
                  <Image
                    src="/images/c2.svg"
                    alt="eye"
                    title="eye"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="info_right">
                <span>Make sure the vehicle is clear from obstructions</span>
              </div>
            </div>
            <div className="crm_info_item col-4">
              <div className="info_left">
                <div className="il_image">
                  <Image
                    src="/images/c3.svg"
                    alt="take pic"
                    title="take pic"
                    width={50}
                    height={50}
                  />
                </div>
              </div>
              <div className="info_right">
                <span>Take pictures in bright daylight </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal.Body>
  );
}

export default InfoCam;
