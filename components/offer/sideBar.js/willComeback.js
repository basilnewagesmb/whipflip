import React from "react";
import { Modal } from "antd";
import WillComebackContent from "./willComebackModal";

function WillComeback({ isShow }) {
  const { confirm } = Modal;

  return (
    isShow && (
      <div className="come_back_later">
        <div
          onClick={() => {
            confirm({
              icon: null,
              content: <WillComebackContent />,
              title: "Need to Leave?",
              closable: true,
              footer: null,
              className:"will_come_back"
            });
          }}
          style={{
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          <>{`I’ll come back later.`}</>
        </div>
      </div>
    )
  );
}

export default WillComeback;
