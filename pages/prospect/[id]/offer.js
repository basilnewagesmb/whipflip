import MetaHead from "components/common/metaHead";
import OfferLayout from "components/offer/layout";
import Sell from "components/offer/steps/sell/index";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useGetOfferQuery } from "services/offer/api";

function Index(props) {
  const { data, fbpixel, fromPath } = props;
  useEffect(() => {
    if (fromPath === "valuate") {
      location.reload();
    }
  }, []);

  const { data: offerData } = useGetOfferQuery(
    { id: data?.uid },
    {
      skip: !data?.uid,
      refetchOnMountOrArgChange: true,
    }
  );
  useEffect(() => {
    if (fbpixel) {
      const events = ["ViewContent"];
      for (let item of events) {
        fbpixel.event(item, {
          content_ids: [],
          content_category: "",
          content_name: "",
          content_type: "",
          contents: [],
          currency: "",
          num_items: 0,
          predicted_ltv: 0,
          search_string: "",
          status: "",
          value: "",
        });
      }
    }
  }, [fbpixel]);

  return (
    <OfferLayout data={offerData || data} current={2}>
      <MetaHead
        title="Sell Your Car Online in 3 Steps"
        ogImage={"https://whipflipnow.s3.amazonaws.com/Whipflip+Logo.png"}
      />
      <Sell data={offerData || data} />
    </OfferLayout>
  );
}
export async function getServerSideProps({ req, query }) {
  const ref = req?.headers?.referer?.split("//")[1]?.split("/");
  const fromPath = ref?.[ref?.length - 1] || null;
  const { id } = query;
  const resp = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
  );
  const data = await resp.json();
  if (data.status !== "offer") {
    return {
      redirect: {
        permanent: false,
        destination: `/prospect/${data.uid}/${data.status}`,
      },
      props: { data, fromPath },
    };
  } else {
    return {
      props: { data, fromPath },
    };
  }
}

export default Index;
