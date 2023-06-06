import React, { useEffect, useState } from "react";
import { Layout, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
const { Content, Sider } = Layout;
import { Button } from "antd";
// import capture from "public/data/capture.mp3";
import useSound from "use-sound";
import { useRouter } from "node_modules/next/router";
import { isIOS } from "react-device-detect";
import { Avatar, Badge, Col, Image, Row, Tour } from "antd";
import { useRef } from "react";
function CamLayout({
  children,
  handle,
  capture,
  pendingLayouts,
  previewing,
  offerData,
  isForUpload,
  state,
}) {
  const fullScreenBtn = useRef(null);
  const closeScreenBtn = useRef(null);
  const captureScreenBtn = useRef(null);
  const countPreview = useRef(null);
  const [open, setOpen] = useState(true);
  const mask = {
    style: {
      boxShadow: "inset 0 0 15px #fff",
    },
    color: "rgba(240, 181, 0, 0.24)",
  };
  const [steps, SetSteps] = useState([]);
  const { push } = useRouter();
  const [play] = useSound("/data/capture.mp3");
  useEffect(() => {
    try {
      handle.exit();
    } catch (error) {}
  }, []);
  const skip = () => {
    setOpen(false);
    try {
      handle.enter();
    } catch (error) {}
  };
  useEffect(() => {
    !isIOS
      ? SetSteps([
          {
            title: (
              <>
                Fullscreen toggle Button{" "}
                <button
                  className="ant-btn css-dev-only-do-not-override-p2y309 ant-btn-default ant-btn-sm ant-tour-prev-btn"
                  onClick={skip}
                >
                  Skip
                </button>
              </>
            ),
            description: "You can use fullscreen for a better user experience.",
            target: () => fullScreenBtn.current,
            mask,
          },
          {
            title: (
              <>
                Close Button{" "}
                <button
                  className="ant-btn css-dev-only-do-not-override-p2y309 ant-btn-default ant-btn-sm ant-tour-prev-btn"
                  onClick={skip}
                >
                  Skip
                </button>
              </>
            ),
            description: "You can use the close button to skip this step.",
            target: () => closeScreenBtn.current,
            mask,
          },
          {
            title: (
              <>
                Capture Button{" "}
                <button
                  className="ant-btn css-dev-only-do-not-override-p2y309 ant-btn-default ant-btn-sm ant-tour-prev-btn"
                  onClick={skip}
                >
                  Skip
                </button>
              </>
            ),
            description: "Click here to capture an image",
            placement: "left",
            target: () => captureScreenBtn.current,
            mask,
          },
          {
            title: (
              <>
                Capture count view{" "}
                <button
                  className="ant-btn css-dev-only-do-not-override-p2y309 ant-btn-default ant-btn-sm ant-tour-prev-btn"
                  onClick={skip}
                >
                  Skip
                </button>
              </>
            ),
            description:
              "You can view the count and preview of previous images.",
            target: () => countPreview.current,
            onClose: handle.enter,
            mask,
          },
        ])
      : SetSteps([
          {
            title: (
              <>
                Close Button{" "}
                <button
                  className="ant-btn css-dev-only-do-not-override-p2y309 ant-btn-default ant-btn-sm ant-tour-prev-btn"
                  onClick={skip}
                >
                  Skip
                </button>
              </>
            ),
            description: "You can use the close button to skip this step.",
            target: () => closeScreenBtn.current,
            mask,
          },
          {
            title: (
              <>
                Capture Button{" "}
                <button
                  className="ant-btn css-dev-only-do-not-override-p2y309 ant-btn-default ant-btn-sm ant-tour-prev-btn"
                  onClick={skip}
                >
                  Skip
                </button>
              </>
            ),
            description: <>Click here to capture an image</>,
            placement: "left",
            target: () => captureScreenBtn.current,
            mask,
          },
          {
            title: (
              <>
                Capture count view{" "}
                <button
                  className="ant-btn css-dev-only-do-not-override-p2y309 ant-btn-default ant-btn-sm ant-tour-prev-btn"
                  onClick={skip}
                >
                  Skip
                </button>
              </>
            ),
            description:
              "You can view the count and preview of previous images.",
            target: () => countPreview.current,
            onClose: handle.enter,
            mask,
          },
        ]);
  }, [isIOS]);

  return (
    <>
      <Tour
        open={open}
        onClose={() => {
          setOpen(false);
          handle.enter();
        }}
        steps={steps}
      />
      <Layout className="vh-100 overflow-hidden">
        <Sider
          collapsedWidth={60}
          collapsed
          style={{
            backgroundColor: "#3c3c3c",
          }}
        >
          {!isIOS &&
            (handle?.active ? (
              <FullscreenExitOutlined
                ref={fullScreenBtn}
                style={fullStyle}
                onClick={handle.exit}
              />
            ) : (
              <FullscreenOutlined
                ref={fullScreenBtn}
                style={fullStyle}
                onClick={handle.enter}
              />
            ))}
          {!previewing && (
            <CloseOutlined
              ref={closeScreenBtn}
              style={{
                fontSize: "20px",
                color: "#fff",
              }}
              onClick={async () => {
                try {
                  handle.exit();
                } catch (error) {}
                await Modal.info({
                  icon: null,
                  title: (
                    <h6 className="text-center">
                      Almost there! Are you sure you want to exit now?
                    </h6>
                  ),
                  width: 300,
                  footer: (
                    <div className="d-flex justify-content-center">
                      <Button
                        className="mx-2 w-100"
                        style={{
                          fontWeight: "700",
                        }}
                        onClick={async () => {
                          Modal.destroyAll();
                          if (isForUpload) {
                            push("/");
                          } else {
                            push(`/prospect/${offerData.uid}/quote`);
                          }
                        }}
                      >
                        Yes, exit
                      </Button>
                      <Button
                        className="mx-2 w-100 border-0"
                        style={{
                          backgroundColor: "#ffd147",
                          fontWeight: "700",
                        }}
                        onClick={() => {
                          Modal?.destroyAll();
                          handle?.enter();
                        }}
                      >
                        No, continue
                      </Button>
                    </div>
                  ),
                });
              }}
            />
          )}
        </Sider>
        <Content className="position-relative">{children}</Content>
        <Sider
          collapsedWidth={100}
          collapsed
          style={{
            backgroundColor: "#3c3c3c",
          }}
        >
          <div
            style={countStyle}
            onClick={() => {
              try {
                handle.exit();
              } catch (error) {}
              Modal.info({
                icon: null,
                width: "100%",
                height: "100%",
                centered: true,
                content: (
                  <div className="row mt-4">
                    {state?.stills?.map((item, i) => (
                      <div className="col-3 pb-4 position-relative " key={i}>
                        <Image
                          className="card"
                          width="100%"
                          src={item.blob || `/overlay/${item.overlay}`}
                          style={{
                            objectFit: "contain",
                          }}
                        />
                      </div>
                    ))}
                  </div>
                ),
                closable: true,
                footer: null,
              });
            }}
            ref={countPreview}
          >
            <Badge
              count={
                offerData?.stills?.length -
                pendingLayouts?.length +
                "/" +
                offerData?.stills?.length
              }
              className="unselectable"
              color="#F0B500"
            >
              <Avatar
                shape="square"
                size="large"
                src={state.stills.at(-1).blob}
              />
            </Badge>
          </div>
          {!previewing && (
            <Button
              type="primary"
              shape="circle"
              style={captureStyle}
              size="large"
              ref={captureScreenBtn}
              onClick={() => {
                capture(pendingLayouts[0]?.id);
                play();
              }}
            />
          )}
        </Sider>
      </Layout>
    </>
  );
}

const fullStyle = {
  fontSize: "20px",
  color: "#fff",
  position: "absolute",
  left: "50%",
  top: "5%",
  transform: "translate(-50%,-5%)",
};
const blockView = {
  fontSize: "20px",
  color: "#fff",
  position: "absolute",
  left: "50%",
  bottom: "5%",
  transform: "translate(-50%,-5%)",
};
const captureStyle = {
  fontSize: "20px",
  color: "#fff",
  backgroundColor: "#fff",
  border: "4px solid #939393b8",
};
const countStyle = {
  position: "absolute",
  top: "5%",
  right: "5%",
  transform: "translate(-60%,0%)",
};
export default CamLayout;
