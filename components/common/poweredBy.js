import { Image } from "antd";
import React from "react";

function PoweredBy() {
  return (
    <div className="poweredBy">
      <Image
        src="/images/jd.svg"
        alt="poweredBy"
        width={180}
        height={20}
        preview={false}
        layout="responsive"

      />
    </div>
  );
}

export default PoweredBy;
