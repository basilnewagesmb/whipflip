import moment from "moment";
import { Image } from "antd";
import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import useWindowDimensions from "utils/useWindowDimension";
import { Typography } from "antd";
import { useElementDimensions } from "utils/useElementDimensions";
const { Paragraph } = Typography;

function BlogCard({ title, image, created_at, name }) {
  const img = useRef(null);
  const { width } = useElementDimensions(img);
  return (
    <div className="col-lg-4" style={{ cursor: "pointer" }}>
      <Link href={`/blog/${name}`}>
        <div className="row m-0 rd_row">
          <div className="col-lg-4 rdcol-left p-0" ref={img}>
            <Image
              src={image}
              title={title}
              alt={title}
              className="w-100 rounded"
              rootClassName="w-100"
              height={width}
              placeholder={
                <Image
                  preview={false}
                  alt="img"
                  rootClassName="w-100"
                  className="w-100"
                  src="/images/blurepng.png"
                  height={width}
                />
              }
              preview={false}
            />
          </div>
          <div className="col-lg-8 rdcol-right">
            <div className="rd_wrap">
              <p>Published On {moment(created_at).format("MMM D, YYYY")}</p>
              <Paragraph
                ellipsis={{
                  rows: 2,
                  symbol: '...',
                }}
                className="h5"
              >
                {title}
              </Paragraph>
            </div>
          </div>
        </div>{" "}
      </Link>
    </div>
  );
}

export default BlogCard;
