import React from "react";
import Image from "next/image";
import items from "public/data/sidebar.json";
import Link from "next/link";
function Footer() {
  return (
    <div>
      <footer className="footer">
        <div className="container">
          <div className="row fooRow">
            <div className="col-lg-4 col-6 fooCol">
              <div className="fooColIn">
                <h2>{items[0].title}</h2>
                <ul>
                  {items?.[0]?.sub?.map((s, i) => (
                    <Link href={s.path} key={i}>
                      <li>{s.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            <div className="col-lg-4 col-6 fooCol">
              <div className="fooColIn">
                <h2>{items[1].title}</h2>
                <ul>
                  {items?.[1]?.sub?.map((s, i) => (
                    <Link href={s.path} key={i}>
                      <li
                        style={{
                          lineHeight: i === 2 && 1.1,
                        }}
                      >
                        {s.title}
                      </li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div>
            {/* <div className="col-lg-4 col-6 fooCol">
              <div className="fooColIn">
                <h2>{items[2].title}</h2>
                <ul>
                  {items?.[2]?.sub?.map((s, i) => (
                    <Link href={s.path} key={i}>
                      <li>{s.title}</li>
                    </Link>
                  ))}
                </ul>
              </div>
            </div> */}
            <div className="col-lg-4 col-6 fooCol">
              <div className="fooColIn">
                <h2>Legal</h2>
                <ul>
                  <Link href={items[3].path}>
                    <li>{items[3].title}</li>
                  </Link>
                  <Link href={items[4].path}>
                    <li
                      style={{
                        lineHeight: 1.1,
                      }}
                    >
                      {items[4].title}
                    </li>
                  </Link>
                </ul>
              </div>
              <div className="fooColIn">
                <h2>Follow us</h2>
                <ul className="ss-icons">
                  {/* <li>
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
                  </li> */}
                  <li>
                    <a
                      href="https://www.facebook.com/whipflip"
                      target="_blank"
                      rel="noopener noreferrer"
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
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/whipflipnow/"
                      target="_blank"
                      rel="noopener noreferrer"
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
                            d="M6.66667 0C2.98533 0 0 2.98533 0 6.66667V17.3333C0 21.0147 2.98533 24 6.66667 24H17.3333C21.0147 24 24 21.0147 24 17.3333V6.66667C24 2.98533 21.0147 0 17.3333 0H6.66667ZM20 2.66667C20.736 2.66667 21.3333 3.264 21.3333 4C21.3333 4.736 20.736 5.33333 20 5.33333C19.264 5.33333 18.6667 4.736 18.6667 4C18.6667 3.264 19.264 2.66667 20 2.66667ZM12 5.33333C15.6813 5.33333 18.6667 8.31867 18.6667 12C18.6667 15.6813 15.6813 18.6667 12 18.6667C8.31867 18.6667 5.33333 15.6813 5.33333 12C5.33333 8.31867 8.31867 5.33333 12 5.33333ZM12 8C10.9391 8 9.92172 8.42143 9.17157 9.17157C8.42143 9.92172 8 10.9391 8 12C8 13.0609 8.42143 14.0783 9.17157 14.8284C9.92172 15.5786 10.9391 16 12 16C13.0609 16 14.0783 15.5786 14.8284 14.8284C15.5786 14.0783 16 13.0609 16 12C16 10.9391 15.5786 9.92172 14.8284 9.17157C14.0783 8.42143 13.0609 8 12 8Z"
                            fill="#353442"
                          />
                        </svg>
                      </span>
                    </a>
                  </li>
                  {/* <li>
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
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
          <div className="fooCopyRight">
            <div className="fcl">
              <span>
                WhipFlip © {new Date().getFullYear().toString()} WhipFlip, Inc.
                All rights reserved.
              </span>
            </div>
            <div className="fcr">
              <div className="fooIcons">
                <Image
                  src="/images/foo2.png"
                  alt="accredited business"
                  title="accredited business"
                  width={110}
                  height={35}
                />

                <Image
                  src="/images/foo1.png"
                  alt="chamber of commerce"
                  title="chamber of commerce"
                  width={110}
                  height={35}
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
