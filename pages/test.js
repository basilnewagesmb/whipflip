import { Tour } from "antd";
import React from "react";
import { useRef } from "react";
import { useState } from "react";

function Test() {
  const fullScreenBtn = useRef(null);
  const closeScreenBtn = useRef(null);
  const captureScreenBtn = useRef(null);
  const countPreview = useRef(null);
  const [open, setOpen] = useState(true);
  const mask = {};
  const steps = [
    {
      title: "Fullscreen toggle Button",
      description: "You can use fullscreen for a better user experience.",
      target: () => fullScreenBtn.current,
      mask,
      placement: "center",
    },
    {
      title: "Close Button",
      description: "You can use the close button to skip this step.",
      target: () => closeScreenBtn.current,
      placement: "center",

      mask,
    },
    {
      title: "Capture Button",
      description: "Click here to capture an image",
      placement: "center",
      target: () => captureScreenBtn.current,
      mask,
    },
    {
      title: "Capture count view",
      description: "You can view the count and preview of previous images.",
      target: () => countPreview.current,
      mask,
      placement: "center",
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
      <div ref={fullScreenBtn} className="mb-5 pt-5">
        fullScreenBtn
      </div>
      <div ref={closeScreenBtn} className="mb-5 ml-5">
        closeScreenBtn
      </div>
      <div ref={captureScreenBtn} className="mb-5">
        captureScreenBtn
      </div>
      <div ref={countPreview} className="mb-5">
        countPreview
      </div>
    </div>
  );
}

export default Test;
