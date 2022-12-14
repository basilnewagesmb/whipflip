import NotFountAnim from "components/anim/404";
import Button from "components/common/button";
import MetaHead from "components/common/metaHead";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MetaHead />
      <div className="d-flex flex-column align-items-center justify-content-center">
        <NotFountAnim isLoading={true} />
        <Link href={"/"}>
          <Button>{"Back Home"}</Button>
        </Link>
      </div>
    </div>
  );
}

export default Index;
