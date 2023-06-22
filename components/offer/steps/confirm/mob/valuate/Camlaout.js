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
  const { push } = useRouter();
  const [play] = useSound("/data/capture.mp3");

  return (
    <>
      <Layout className="vh-100 overflow-hidden">
        <Sider
          collapsedWidth={60}
          collapsed
          style={{
            backgroundColor: "#3c3c3c63",
            position: "absolute",
            left: "0",
            top: "0",
            height: "100vh",
            zIndex: "1",
          }}
        >
          {!isIOS &&
            (handle?.active ? (
              <FullscreenExitOutlined style={fullStyle} onClick={handle.exit} />
            ) : (
              <FullscreenOutlined style={fullStyle} onClick={handle.enter} />
            ))}
          {!previewing && (
            <CloseOutlined
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
            backgroundColor: "#3c3c3c63",
            position: "absolute",
            right: "0",
            top: "0",
            height: "100vh",
            zIndex: "1",
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
                          preview={false}
                        />
                      </div>
                    ))}
                  </div>
                ),
                closable: true,
                footer: null,
              });
            }}
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
                src={state?.stills?.[state?.stills?.length - 1].blob}
              />
            </Badge>
          </div>
          {!previewing && (
            <Button
              type="primary"
              shape="circle"
              style={captureStyle}
              size="100"
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
  border: "6px solid #939393b8",
  width: "55px",
  height: "55px",
};
const countStyle = {
  position: "absolute",
  top: "5%",
  right: "5%",
  transform: "translate(-60%,0%)",
};
export default CamLayout;
