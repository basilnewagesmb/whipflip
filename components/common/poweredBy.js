import Image from "next/image";
import React from "react";

function PoweredBy() {
  return (
    <div className="poweredBy">
      <Image
        src="/images/jd.svg"
        alt="poweredBy"
        title="poweredBy"
        width={180}
        height={20}
      />
    </div>
  );
}

export default PoweredBy;
