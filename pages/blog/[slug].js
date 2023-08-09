import { setIsModalOpen } from "features/offer/offerSlice";
import Head from "next/head";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import {
  FacebookShareButton,
  WhatsappShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappIcon,
} from "react-share";

const BlogDetail = (props) => {
  const dispatch = useDispatch();

  const { readNext } = props;

  return (
    <>
      <Head>
        <title>{props?.data?.meta_title}</title>
        <meta
          name="Description"
          content={props?.data?.description?.substring(0, 199)}
        ></meta>
        <meta name="keywords" content={props?.data?.meta_keywords} />
        <meta
          name="twitter:card"
          content={props?.data?.description?.substring(0, 199)}
        />
        <meta
          name="twitter:title"
          content={props?.data?.title.substring(0, 69)}
        />
        <meta
          name="twitter:site"
          content={`https://www.whipflip.com/blog/${props?.data?.name}`}
        />
        <meta
          property="og:url"
          content={`https://www.whipflip.com/blog/${props?.data?.name}`}
        />
        <meta
          property="og:title"
          content={props?.data?.title.substring(0, 69)}
        />
        <meta
          property="og:description"
          content={props?.data?.description?.substring(0, 199)}
        />
        <meta property="og:image" content={props?.data?.image} />
        <meta property="twitter:image" content={props?.data?.image} />
      </Head>
      <div className="page-header faq d-flex align-items-center blog_detail">
        <div className="container">
          <div className="row"></div>
        </div>
      </div>
      <div className="blog_detail">
        <div className="bd_wrapper">
          <div className="container">
            <div className="row bd_row">
              <div className="col-lg-9">
                <div className="bd_lft">
                  <div className="back_btn">
                    <span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink"
                        version="1.1"
                        id="Layer_1"
                        x="0px"
                        y="0px"
                        viewBox="0 0 476.213 476.213"
                      >
                        <polygon points="476.213,223.107 57.427,223.107 151.82,128.713 130.607,107.5 0,238.106 130.607,368.714 151.82,347.5   57.427,253.107 476.213,253.107 " />
                      </svg>
                    </span>
                    <Link href="/blog">
                      <span style={{ cursor: "pointer" }}>Back to Blog</span>
                    </Link>
                  </div>
                  {props.data && props.data.template && (
                    <div
                      dangerouslySetInnerHTML={{
                        __html: props.data.template.replace(
                          /(<? *script)/gi,
                          "illegalscript"
                        ),
                      }}
                    ></div>
                  )}
                </div>
              </div>
              <div className="col-lg-3">
                <div className="right_list_in">
                  <div className="share_right">
                    <h2>Share</h2>
                    <ul className="ss-icons">
                      <li>
                        <TwitterShareButton
                          url={`https://www.whipflip.com/blog/${props?.data?.name}`}
                          style={{ outlineColor: "rgba(0,0,0,0.1" }}
                          title={props?.data?.title}
                        >
                          <span>
                            <svg
                              width="24"
                              height="20"
                              viewBox="0 0 24 20"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24 2.5585C23.1075 2.95 22.1565 3.2095 21.165 3.3355C22.185 2.7265 22.9635 1.7695 23.3295 0.616C22.3785 1.183 21.3285 1.5835 20.2095 1.807C19.3065 0.8455 18.0195 0.25 16.6155 0.25C13.8915 0.25 11.6985 2.461 11.6985 5.1715C11.6985 5.5615 11.7315 5.9365 11.8125 6.2935C7.722 6.094 4.1025 4.1335 1.671 1.147C1.2465 1.8835 0.9975 2.7265 0.9975 3.634C0.9975 5.338 1.875 6.8485 3.183 7.723C2.3925 7.708 1.617 7.4785 0.96 7.117C0.96 7.132 0.96 7.1515 0.96 7.171C0.96 9.562 2.6655 11.548 4.902 12.0055C4.5015 12.115 4.065 12.1675 3.612 12.1675C3.297 12.1675 2.979 12.1495 2.6805 12.0835C3.318 14.032 5.127 15.4645 7.278 15.511C5.604 16.8205 3.4785 17.6095 1.1775 17.6095C0.774 17.6095 0.387 17.5915 0 17.542C2.1795 18.9475 4.7625 19.75 7.548 19.75C16.602 19.75 21.552 12.25 21.552 5.749C21.552 5.5315 21.5445 5.3215 21.534 5.113C22.5105 4.42 23.331 3.5545 24 2.5585Z"
                                fill="#353442"
                              />
                            </svg>
                          </span>
                        </TwitterShareButton>
                      </li>
                      <li>
                        <FacebookShareButton
                          url={`https://www.whipflip.com/blog/${props?.data?.name}`}
                          style={{ outlineColor: "rgba(0,0,0,0.1" }}
                          title={props?.data?.title}
                        >
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M24 12C24 5.37188 18.6281 0 12 0C5.37188 0 0 5.37188 0 12C0 18.6281 5.37188 24 12 24C12.0703 24 12.1406 24 12.2109 23.9953V14.6578H9.63281V11.6531H12.2109V9.44062C12.2109 6.87656 13.7766 5.47969 16.0641 5.47969C17.1609 5.47969 18.1031 5.55938 18.375 5.59688V8.27813H16.8C15.5578 8.27813 15.3141 8.86875 15.3141 9.73594V11.6484H18.2906L17.9016 14.6531H15.3141V23.5359C20.3297 22.0969 24 17.4797 24 12Z"
                                fill="#353442"
                              />
                            </svg>
                          </span>
                        </FacebookShareButton>
                      </li>
                      <li>
                        <WhatsappShareButton
                          url={`https://www.whipflip.com/blog/${props?.data?.name}`}
                          style={{ outlineColor: "rgba(0,0,0,0.1" }}
                          title={props?.data?.title}
                        >
                          <span>
                            <svg width="24" height="24" viewBox="0 0 24 24">
                              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                            </svg>
                          </span>
                        </WhatsappShareButton>
                      </li>
                      <li>
                        <LinkedinShareButton
                          url={`https://www.whipflip.com/blog/${props?.data?.name}`}
                          style={{ outlineColor: "rgba(0,0,0,0.1" }}
                          title={props?.data?.title}
                        >
                          <span>
                            <svg
                              width="24"
                              height="24"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_2634_129257)">
                                <path
                                  d="M2.91049 1C1.15063 1 0 2.15561 0 3.67451C0 5.15986 1.11635 6.34843 2.84296 6.34843H2.87636C4.67064 6.34843 5.78729 5.15986 5.78729 3.67451C5.75374 2.15561 4.67064 1 2.91049 1Z"
                                  fill="#353442"
                                />
                                <path
                                  d="M0.304101 8.46176H5.44893V23.9402H0.304101V8.46176Z"
                                  fill="#353442"
                                />
                                <path
                                  d="M18.077 8.09848C15.3016 8.09848 13.4405 10.7065 13.4405 10.7065V8.46176H8.29555V23.9402H13.4402V15.2964C13.4402 14.8337 13.4738 14.3717 13.6097 14.0408C13.9816 13.1167 14.828 12.1595 16.2494 12.1595C18.111 12.1595 18.8556 13.5789 18.8556 15.6597V23.9402H24V15.0651C24 10.3108 21.4617 8.09848 18.077 8.09848Z"
                                  fill="#353442"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_2634_129257">
                                  <rect width="24" height="24" fill="white" />
                                </clipPath>
                              </defs>
                            </svg>
                          </span>
                        </LinkedinShareButton>
                      </li>
                    </ul>
                    <div className="tag_list">
                      {props?.data?.tags &&
                        props.data.tags.split(",").map((tag, index) => (
                          <div className="tag_single" key={index}>
                            <span>#{tag}</span>
                          </div>
                        ))}
                    </div>
                    <div className="quote_car">
                      <h2>Get an initial offer for your car now</h2>
                      <p>
                        Selling your used car online has never been easier. Find
                        out what your car is worth and get a better offer than
                        trade in. We come to you. Paid on the spot.
                      </p>
                      <button
                        onClick={() => {
                          dispatch(setIsModalOpen());
                        }}
                      >
                        Get Instant Offer
                      </button>
                    </div>
                    {readNext?.length > 0 && (
                      <div className="read_nxt">
                        <h2>Read Next</h2>
                        <div className="rn_list">
                          {readNext?.slice(0, 4)?.map((blog, index) => (
                            <div className="rn_item" key={index}>
                              <span className="hd_rd_time">
                                {blog.time_to_read}
                              </span>
                              <h3>
                                <Link href={`${blog.name}`}>{blog.title}</Link>
                              </h3>
                              <p>{blog.description}</p>
                              <span className="writer_date">{blog.author}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ query, res }) => {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs/${query.slug || ""}`
    );
    const data = await response.json();
    const readNextRes = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/blogs?category=${
        data.category || ""
      }&name=${data.name || ""}`
    );
    const readNextData = await readNextRes.json();
    if (!data) throw new Error();
    return {
      props: {
        data: data || {},
        name: query.slug || "",
        readNext: readNextData,
      },
    };
  } catch (error) {
    return {
      props: {},
    };
  }
};

export default BlogDetail;
