import { Modal } from "antd";
import React, { useRef } from "react";

function VideoModal({ isVideoOpen, setIsVideoOpen }) {
  const video = useRef(null);
  return (
    <Modal
      title="How It Works"
      open={isVideoOpen}
      onCancel={() => {
        video.current.pause();
        setIsVideoOpen(false);
      }}
      footer={null}
    >
      <video
        ref={video}
        poster="/images/process_thumb.webp"
        autoPlay={false}
        controls
        playsInline
        className="img-fluid"
      >
        <source
          src="https://whipflipupload.s3.us-east-1.amazonaws.com/videos/WhipFlipProcess.mp4"
          type="video/mp4"
        />
      </video>
    </Modal>
  );
}

export default VideoModal;
