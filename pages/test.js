import { Tour } from "antd";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

function test() {
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
  const steps = [
    {
      title: "Fullscreen toggle Button",
      description: "You can use fullscreen for a better user experience.",
      target: () => fullScreenBtn.current,
      mask: {
        style: {
          boxShadow: "inset 0 0 15px #fff",
        },
        color: "rgba(240, 181, 0, 0.24)",
      },
    },
    {
      title: "Close Button",
      description: "You can use the close button to skip this step.",
      target: () => closeScreenBtn.current,
      mask,
    },
    {
      title: "Capture Button",
      description: "Click here to capture an image",
      placement: "top",
      target: () => captureScreenBtn.current,
      mask,
    },
    {
      title: "Capture count view",
      description: "You can view the count and preview of previous images.",
      target: () => countPreview.current,
      mask,
    },
  ];
  return (
    <div className="mt-5 pt-5">
      {" "}
      <Tour
        open={open}
        onClose={() => {
          setOpen(false);
        }}
        steps={steps}
      />
      <div ref={fullScreenBtn} className="mb-5">
        fullScreenBtn
      </div>
      <div ref={closeScreenBtn} className="mb-5">
        closeScreenBtn
      </div>
      <div ref={closeScreenBtn} className="mb-5">
        closeScreenBtn
      </div>
      <div ref={countPreview} className="mb-5">
        countPreview
      </div>
    </div>
  );
}

export default test;
