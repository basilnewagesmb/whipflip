import React, { useEffect, useState } from "react";
import Link from "next/link";
import MetaHead from "components/common/metaHead";
import Subscribe from "components/blogs/subscibe";
import { useBlogsQuery } from "services/util";
import { useDispatch } from "react-redux";
import { setIsModalOpen } from "features/offer/offerSlice";
import moment from "moment";
import { useRouter } from "next/router";
import { Empty, Spin } from "antd";
import Highlighter from "react-highlight-words";

function Blog(props) {
  const { query, replace } = useRouter();
  const category = query?.category;
  const dispatch = useDispatch();
  const [blogs, setBlogs] = useState(props.blogs);
  const { data, isLoading } = useBlogsQuery({}, {});

  useEffect(() => {
    category
      ? data &&
        setBlogs((prev) => data?.filter((item) => item?.category == category))
      : data && setBlogs(data);
  }, [category, data]);

  useEffect(() => {
    const keys = ["search_text"];
    const values = query?.search;
    const regex = new RegExp(values, "i");
    const output = data?.filter((e) => keys.some((k) => regex.test(e[k])));
    if (blogs?.length > 0) {
      setBlogs(output);
    } else {
      category
        ? data &&
          setBlogs((prev) => data?.filter((item) => item?.category == category))
        : data && setBlogs(data);
    }
  }, [query?.search]);

  return (
    <>
      <MetaHead title="Blogs" />
      <Subscribe />
      <div className="how-it-works pt100 pb-5 body-text">
        <div className="container">
          <div className="row mb-5 bl_row">
            <div className="col-lg-9">
              <div
                className={`row blog_list_row ${
                  blogs?.length == 0 ? "justify-content-center" : ""
                }`}
              >
                {blogs?.length > 0 &&
                  blogs?.map((blog, index) => (
                    <>
                      {index == 0 && (
                        <div className="col-lg-12" key={index}>
                          <div className="row blog_single_row">
                            <div className="col-lg-7">
                              <div className="news_item_left">
                                <Link href={`blog/${blog.name}`}>
                                  <img
                                    src={blog.image}
                                    alt=""
                                    loading="lazy"
                                    style={{ cursor: "pointer" }}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="col-lg-5">
                              <div className="news_item__right news_item__right_bd_mob">
                                <span className="tag_read_time">
                                  {blog.time_to_read}
                                </span>
                                <div className="ni_body">
                                  <h2>
                                    <Link href={`blog/${blog.name}`}>
                                      <Highlighter
                                        searchWords={[query?.search]}
                                        autoEscape={true}
                                        textToHighlight={blog.title}
                                      />
                                    </Link>
                                  </h2>
                                  <p>
                                    {" "}
                                    <Highlighter
                                      searchWords={[query?.search]}
                                      autoEscape={true}
                                      textToHighlight={blog.description}
                                    />
                                  </p>
                                  <span className="writer-date">{`${
                                    blog.author
                                  } - ${moment(blog.created_at).format(
                                    "MMMM D, YYYY"
                                  )}`}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                      {index != 0 && (
                        <div className="col-lg-6" key={index}>
                          <div className="row blog_single_row">
                            <div className="col-lg-12">
                              <div className="news_item_left">
                                <Link href={`blog/${blog.name}`}>
                                  <img
                                    src={blog.image}
                                    alt=""
                                    loading="lazy"
                                    style={{ cursor: "pointer" }}
                                  />
                                </Link>
                              </div>
                            </div>
                            <div className="col-lg-12">
                              <div className="news_item__right news_item__right_bd">
                                <span className="tag_read_time">
                                  {blog.time_to_read}
                                </span>
                                <div className="ni_body">
                                  <h2>
                                    <Link href={`blog/${blog.name}`}>
                                      <Highlighter
                                        searchWords={[query?.search]}
                                        autoEscape={true}
                                        textToHighlight={blog.title}
                                      />
                                    </Link>
                                  </h2>
                                  <p>
                                    <Highlighter
                                      searchWords={[query?.search]}
                                      autoEscape={true}
                                      textToHighlight={blog.description}
                                    />
                                  </p>
                                  <span className="writer-date">{`${
                                    blog.author
                                  } - ${moment(blog.created_at).format(
                                    "MMMM D, YYYY"
                                  )}`}</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  ))}
                {blogs?.length == 0 && !isLoading && (
                  <div>
                    <Empty
                      image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                      imageStyle={{
                        height: 100,
                      }}
                      description={
                        <span>No blogs are available at the moment</span>
                      }
                    ></Empty>
                  </div>
                )}
                {blogs?.length == 0 && !!isLoading && (
                  <div className="loader-antd">
                    <Spin tip="Loading..." size="large"></Spin>
                  </div>
                )}
              </div>
            </div>

            <div className="col-md-4 col-lg-3 right_list">
              <div className="right_list_in">
                <div className="form-group form_blog_search">
                  <input
                    type="search"
                    className="form-control form-control-lg input-faq"
                    id="inputSearchfaq"
                    placeholder="Search"
                    value={query?.search}
                    onChange={(e) => {
                      replace(
                        {
                          pathname: "/blog",
                          query: { ...query, search: e.target.value },
                        },
                        undefined,
                        { shallow: true }
                      );
                    }}
                  />
                  <span className="span_srch">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="13.5"
                      height="13.5"
                      viewBox="0 0 13.5 13.5"
                    >
                      <path
                        id="Path_18470"
                        data-name="Path 18470"
                        d="M1021.7,610.75l-4.72-4.725a4.608,4.608,0,0,1-2.86.975,4.893,4.893,0,1,1,4.62-3.319,4.6,4.6,0,0,1-.72,1.294l4.73,4.725Zm-7.58-5.25a3.353,3.353,0,1,0-2.39-.984A3.278,3.278,0,0,0,1014.12,605.5Z"
                        transform="translate(-1009.25 -597.25)"
                        fill="#353442"
                      />
                    </svg>
                  </span>
                </div>
                <div className="rt_ul">
                  <ul>
                    <li className="cur_sor_pointer">
                      <span
                        className={`${
                          category == "selling_a_car" && "selection-border"
                        }`}
                        onClick={() => {
                          replace(
                            {
                              pathname: "/blog",
                              query: { ...query, category: "selling_a_car" },
                            },
                            undefined,
                            { shallow: true }
                          );
                        }}
                      >
                        Selling a car
                      </span>
                    </li>
                    <li className="cur_sor_pointer">
                      <span
                        className={`${
                          category == "buying_a_car" && "selection-border"
                        }`}
                        onClick={() => {
                          replace(
                            {
                              pathname: "/blog",
                              query: { ...query, category: "buying_a_car" },
                            },
                            undefined,
                            { shallow: true }
                          );
                        }}
                      >
                        Buying a car
                      </span>
                    </li>
                    <li className="cur_sor_pointer">
                      <span
                        className={`${!category && "selection-border"}`}
                        onClick={() => {
                          replace(
                            {
                              pathname: "/blog",
                              query: { ...query, category: null },
                            },
                            undefined,
                            { shallow: true }
                          );
                        }}
                      >
                        All blogs
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="quote_car_parent desk-show-quote d-none d-md-block">
                  <div className="quote_car">
                    <h2>Get a quote for your car now</h2>
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
                      Get a Quote
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="quote_car_parent mob-show-quote d-block d-md-none">
        <div className="container">
          <div className="quote_car">
            <h2>Get a quote for your car now</h2>
            <p>
              Selling your used car online has never been easier. Find out what
              your car is worth and get a better offer than trade in. We come to
              you. Paid on the spot.
            </p>
            <button
              onClick={() => {
                dispatch(setIsModalOpen());
              }}
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Blog;

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
  const blogs = await res.json();
  return {
    props: {
      blogs,
    },
    revalidate: 10,
  };
}
