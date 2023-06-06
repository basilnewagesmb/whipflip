import React from "react";
import Image from "next/image";
import { Modal } from "react-bootstrap";
import { CloseOutlined } from "@ant-design/icons";
import { useRouter } from "node_modules/next/router";
import RotatePhone from "components/anim/phoneRotate";
function Initial({ setCurrent, isForUpload }) {
  const { back, push } = useRouter();
  return (
    <div show={true} className="camera_ready_modal ">
      <Modal.Header>
        <CloseOutlined
          style={{
            fontSize: "20px",
            color: "#fff",
          }}
          onClick={() => {
            try {
              if (window.history.length > 1) {
                back(); // Go back in history if available
              } else {
                push("/"); // Redirect to the home screen
              }
            } catch (error) {
              console.log(error);
            }
          }}
        />
      </Modal.Header>
      <Modal.Body className="cr_body h-auto ">
        <div className="cr_body_in">
          <div className="cr_head_dec">
            <div className="cr_hd_img">
              <RotatePhone isLoading={true} />
            </div>
            <div className="cr_hd_dec">
              <h2>
                Tilt phone to landscape mode and fit each FULL vehicle side
                inside the outline
              </h2>
            </div>
          </div>
          <div className="cr_middle">
            <div className="crm_head">
              <span>To ensure you get the best offer:</span>
            </div>
            <div className="crm_offer_info">
              <div className="crm_info_item">
                <div className="info_left">
                  <div className="il_image">
                    <Image
                      src="/images/clear-away.svg"
                      alt="clear"
                      title="clear"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div className="info_right">
                  <span>
                    Clear away any heavy debris (eg. dirt. snow) from the
                    vehicle{" "}
                  </span>
                </div>
              </div>
              <div className="crm_info_item">
                <div className="info_left">
                  <div className="il_image">
                    <Image
                      src="/images/eye.svg"
                      alt="eye"
                      title="eye"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div className="info_right">
                  <span>Make sure the vehicle is clear from obstructions</span>
                </div>
              </div>
              <div className="crm_info_item">
                <div className="info_left">
                  <div className="il_image">
                    <Image
                      src="/images/take-pic.svg"
                      alt="take pic"
                      title="take pic"
                      width={60}
                      height={60}
                    />
                  </div>
                </div>
                <div className="info_right">
                  <span>Take pictures in bright daylight </span>
                </div>
              </div>
            </div>
          </div>

          <div className="cr_foo">
            <button
              className="cr_ready_btn"
              onClick={async () => {
                setCurrent("camera");
              }}
            >
              {`I'm Ready`}
            </button>
            {!isForUpload && (
              <div
                className="skipHref"
                onClick={() => {
                  try {
                    if (window.history.length > 1) {
                      back(); // Go back in history if available
                    } else {
                      push("/"); // Redirect to the home screen
                    }
                  } catch (error) {
                    console.log(error);
                  }
                }}
              >
                Skip Taking Photos
              </div>
            )}
          </div>
        </div>
      </Modal.Body>
    </div>
  );
}

export default Initial;
