import React from "react";
import { Layout, Modal } from "antd";
import { CloseOutlined } from "@ant-design/icons";
import { FullscreenOutlined, FullscreenExitOutlined } from "@ant-design/icons";
const { Content, Sider } = Layout;
import { Button } from "antd";
// import capture from "public/data/capture.mp3";
import useSound from "use-sound";
import { useRouter } from "node_modules/next/router";
import { isIOS } from "react-device-detect";
function CamLayout({
  children,
  handle,
  capture,
  pendingLayouts,
  previewing,
  offerData,
  isForUpload,
}) {
  const { push } = useRouter();
  const [play] = useSound("/data/capture.mp3");
  return (
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
          backgroundColor: "#3c3c3c",
        }}
      >
        {!previewing && (
          <Button
            type="primary"
            shape="circle"
            style={captureStyle}
            size="large"
            onClick={() => {
              capture(pendingLayouts[0]?.id);
              play();
            }}
          />
        )}
      </Sider>
    </Layout>
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
export default CamLayout;
