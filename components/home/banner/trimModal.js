import { Modal } from "antd";
import ShimmerImage from "components/common/shimmerImage";
import React, { useRef } from "react";

function TrimModal({ isTrimOpen, setIsTrimOpen }) {
  const video = useRef(null);
  return (
    <Modal
      title="What is a Trim?"
      open={isTrimOpen}
      onCancel={() => {
        setIsTrimOpen(false);
      }}
      footer={null}
      width={700}
    

    >
      <div className="video-howitworks">
        <p>
          While most know the exact year, make, and model of their car there is
          one last important detail that may influence the value. That is the
          trim package of the vehicle and there can be many to choose from.
          However, it is super easy to find the right one so that you get the
          maximum offer possible.
        </p>
        <p>
          <ShimmerImage
            src="/images/whatistrim.png"
            alt="What is a Trim?"
            title="What is a Trim?"
            className="img-fluid"
            width={714}
            height={360}
          />
          
        </p>
        <p>
          One of the main places to look to see what trim it may be in its
          “badge” on the back of the trunk/tailgate or on the side of the
          vehicle. For example, a Nissan Altima could have a trim badge that
          says “S”, “SL”, or “SV”. A Ford F-150 could have a trim badge that
          says “XLT”, “XL”, or “Lariat”.
        </p>
        <p>
          {" "}
          A Toyota Camry may have a trim badge that says “LE”, “Limited” and
          “SE”.{" "}
        </p>
        <p>
          If you have your original window sticker or purchase documents from
          the dealer, the good news is it&apos;s on those documents as well! If
          all else fails, just reach out to our experts.
        </p>
        <p> We are always available and will figure it out for you!</p>
      </div>
    </Modal>
  );
}

export default TrimModal;
