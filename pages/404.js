import NotFountAnim from "components/anim/404";
import Button from "components/common/button";
import MetaHead from "components/common/metaHead";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MetaHead
        title="Oops! Page not found"
        ogTitle="Oops! Page not found"
        description="We are sorry, but the page you requested was not found."
        ogDescription="WhipFlip is a team of automotive experts who know the struggle of selling your car on your own. Learn about our values and how we put the customer first."
      />
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
