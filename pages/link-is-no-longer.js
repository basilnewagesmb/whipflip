import React from "react";
import { FileImageOutlined } from "@ant-design/icons";
import { Result } from "antd";
import { Button } from "antd";
import { useRouter } from "next/router";
function Index() {
  const { push } = useRouter();
  return (
    <div>
      <Result
        status="error"
        className="vh-100 d-flex flex-column justify-content-center"
        icon={<FileImageOutlined />}
        title={
          <p>
            {`The link is no longer valid, as you have already uploaded the vehicle images`}
          </p>
        }
        extra={
          <Button
            type="primary"
            onClick={() => {
              push("/");
            }}
          >
            Home
          </Button>
        }
      />
    </div>
  );
}

export default Index;
