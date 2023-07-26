import React from "react";
import Valuate from "./valuate";
import MetaHead from "components/common/metaHead";

function Index(props) {
  const upend = { ...props, isForUpload: true };
  return (
    <div>
      <MetaHead
        title="Sell Your Car Online in 3 Steps"
        ogImage={"https://whipflipnow.s3.amazonaws.com/Whipflip+Logo.png"}
      />
      <Valuate {...upend} />
    </div>
  );
}
export async function getServerSideProps({ res, query }) {
  const { id } = query;
  try {
    const images_count_resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}/get_images_count`
    );
    const {
      data: { count },
    } = await images_count_resp.json();
    if (count >= 8) {
      return {
        redirect: {
          permanent: false,
          destination: `/link-is-no-longer`,
        },
      };
    }
  } catch (error) {}
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  return {
    props: { data },
  };
}
export default Index;
