import React from "react";
import Valuate from "./valuate";

function Index(props) {
  const upend = { ...props, isForUpload: true };
  return (
    <div>
      <Valuate {...upend} />
    </div>
  );
}
export async function getServerSideProps({ res, query }) {
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  return {
    props: { data },
  };
}
export default Index;
