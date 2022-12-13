import { Result } from "antd";
import Button from "components/common/button";
import MetaHead from "components/common/metaHead";
import Link from "next/link";
import React from "react";

function Index() {
  return (
    <div className="vh-100 d-flex align-items-center justify-content-center">
      <MetaHead />
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Link href={"/"}>
            <Button>{"Back Home"}</Button>
          </Link>
        }
      />
    </div>
  );
}

export default Index;
