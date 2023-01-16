import Router from "next/router";
const Prospect = ({ data, status }) => {
  console.log(data);
  let queryObject = {};
  if (data.gc_id) queryObject.gc_id = data.gc_id;
  if (data.utm_campaign) queryObject.utm_campaign = data.utm_campaign;
  if (data.utm_content) queryObject.utm_content = data.utm_content;
  if (data.utm_medium) queryObject.utm_medium = data.utm_medium;
  if (data.utm_source) queryObject.utm_source = data.utm_source;
  const query = "";

  if (typeof window != "undefined") {
    // if (status == 404) {
    //   Router.replace("/");
    // }
    if (data && data.status == "quote") {
      Router.replace("/prospect/" + data.uid + "/quote" + query);
    } else if (data && data.status == "offer") {
      Router.replace("/prospect/" + data.uid + "/offer" + query);
    } else if (data && data.status == "appointment") {
      Router.replace("/prospect/" + data.uid + "/appointment" + query);
    }
  }
  return <div />;
};

export const getServerSideProps = async ({ res, params, query }) => {
  const { id } = params;
  const { gc_id, utm_campaign, utm_content, utm_medium, utm_source } = query;
  let data = {};
  try {
    const resp = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/prospects/${id}`
    );
    data = await resp.json();
    data.gc_id = gc_id ? gc_id : null;
    data.utm_source = utm_source ? utm_source : null;
    data.utm_medium = utm_medium ? utm_medium : null;
    data.utm_campaign = utm_campaign ? utm_campaign : null;
    data.utm_content = utm_content ? utm_content : null;
  } catch (error) {
    res.statusCode = 404;
  }
  return {
    redirect: {
      permanent: false,
      destination: `/prospect/${data.uid}/${data.status}`,
    },
    props: {
      data,
      status: !!data ? 200 : 404,
    },
  };
};

export default Prospect;
