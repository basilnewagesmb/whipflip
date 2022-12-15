import Link from "next/link";
import React from "react";

function willComeback({ isShow }) {
  return (
    isShow && (
      <div className="come_back_later">
        <Link href="/">
          <>{`I’ll come back later.`}</>
        </Link>
      </div>
    )
  );
}

export default willComeback;
