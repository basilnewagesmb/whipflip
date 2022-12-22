import React from "react";
import Link from "next/link";
import MetaHead from "components/common/metaHead";

function blog() {
  return (
    <>
      <MetaHead title="Blogs" />
      <div className="page-header blog d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div className="col-12 page-title">
              <p className="pt-4">Blog</p>
              <h1>WhipFlip News</h1>
              <p>
                Subscribe and get free tips and advice on selling or buying a
                car.
              </p>
              <div className="pt-4">
                <form className="form-row justify-content-start">
                  <div className="form-group col-9 col-sm-6 col-md-5 col-lg-4">
                    <input
                      type="text"
                      className="form-control form-control-lg input-faq"
                      id="inputSearchfaq"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div className="col-3 col-lg-2">
                    <button
                      type="submit"
                      className="btn btn-primary btn-lg w-100 btn-yellow"
                    >
                      <span className="d-none d-sm-inline">Subscribe</span>
                      <i className="bi bi-search d-sm-none"></i>
                    </button>
                  </div>
                  <div className="col-12 text-xs">
                    We care about your <Link href="#">privacy</Link>.
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="how-it-works pt100 pb-5 body-text">
        <div className="container">
          <div className="row mb-5">
            <div className="col-md-8 col-lg-9">
              <div className="row blog-row">
                <div className="col-md-6 col-lg-5 col-xl-7">
                  <picture>
                    <source type="image/webp" srcSet="images/buyingcar.webp" />
                    <img
                      src="/images/buyingcar.jpg"
                      alt="Buying a car the smart way"
                      title="Buying a car the smart way"
                      className="img-fluid"
                    />
                  </picture>
                </div>
                <div className="col-md-6 col-lg-7 col-xl-5">
                  <p className="text-xs text-uppercase">
                    Buying a car - 8 MIN rEAD
                  </p>
                  <h3>5 tips for buying a car the smart way</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                    et elit nullam sollicitudin enim ipsum. Vitae suscipit nulla
                    quisque nunc dictum orci. Purus in sed malesuada
                    pellentesque non nec at morbi...
                  </p>
                  <p className="text-xs">By Mike T. - July 16 , 2019</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 blog-column">
                  <div className="pt-3">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/buyingcar.webp"
                      />
                      <img
                        src="/images/buyingcar.jpg"
                        alt="Buying a car the smart way"
                        title="Buying a car the smart way"
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-uppercase">
                      Buying a car - 8 MIN rEAD
                    </p>
                    <h3>5 tips for buying a car the smart way</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      et elit nullam sollicitudin enim ipsum...
                    </p>
                    <p className="text-xs">By Mike T. - July 16 , 2019</p>
                  </div>
                </div>
                <div className="col-md-6 blog-column">
                  <div className="pt-3">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/buyingcar.webp"
                      />
                      <img
                        src="/images/buyingcar.jpg"
                        alt="Buying a car the smart way"
                        title="Buying a car the smart way"
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-uppercase">
                      Buying a car - 8 MIN rEAD
                    </p>
                    <h3>5 tips for buying a car the smart way</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      et elit nullam sollicitudin enim ipsum...
                    </p>
                    <p className="text-xs">By Mike T. - July 16 , 2019</p>
                  </div>
                </div>
                <div className="col-md-6 blog-column">
                  <div className="pt-3">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/buyingcar.webp"
                      />
                      <img
                        src="/images/buyingcar.jpg"
                        alt="Buying a car the smart way"
                        title="Buying a car the smart way"
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-uppercase">
                      Buying a car - 8 MIN rEAD
                    </p>
                    <h3>5 tips for buying a car the smart way</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      et elit nullam sollicitudin enim ipsum...
                    </p>
                    <p className="text-xs">By Mike T. - July 16 , 2019</p>
                  </div>
                </div>
                <div className="col-md-6 blog-column">
                  <div className="pt-3">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/buyingcar.webp"
                      />
                      <img
                        src="/images/buyingcar.jpg"
                        alt="Buying a car the smart way"
                        title="Buying a car the smart way"
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-uppercase">
                      Buying a car - 8 MIN rEAD
                    </p>
                    <h3>5 tips for buying a car the smart way</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      et elit nullam sollicitudin enim ipsum...
                    </p>
                    <p className="text-xs">By Mike T. - July 16 , 2019</p>
                  </div>
                </div>
                <div className="col-md-6 blog-column">
                  <div className="pt-3">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/buyingcar.webp"
                      />
                      <img
                        src="/images/buyingcar.jpg"
                        alt="Buying a car the smart way"
                        title="Buying a car the smart way"
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-uppercase">
                      Buying a car - 8 MIN rEAD
                    </p>
                    <h3>5 tips for buying a car the smart way</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      et elit nullam sollicitudin enim ipsum...
                    </p>
                    <p className="text-xs">By Mike T. - July 16 , 2019</p>
                  </div>
                </div>
                <div className="col-md-6 blog-column">
                  <div className="pt-3">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/buyingcar.webp"
                      />
                      <img
                        src="/images/buyingcar.jpg"
                        alt="Buying a car the smart way"
                        title="Buying a car the smart way"
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-uppercase">
                      Buying a car - 8 MIN rEAD
                    </p>
                    <h3>5 tips for buying a car the smart way</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      et elit nullam sollicitudin enim ipsum...
                    </p>
                    <p className="text-xs">By Mike T. - July 16 , 2019</p>
                  </div>
                </div>
                <div className="col-md-6 blog-column">
                  <div className="pt-3">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/buyingcar.webp"
                      />
                      <img
                        src="/images/buyingcar.jpg"
                        alt="Buying a car the smart way"
                        title="Buying a car the smart way"
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-uppercase">
                      Buying a car - 8 MIN rEAD
                    </p>
                    <h3>5 tips for buying a car the smart way</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      et elit nullam sollicitudin enim ipsum...
                    </p>
                    <p className="text-xs">By Mike T. - July 16 , 2019</p>
                  </div>
                </div>
                <div className="col-md-6 blog-column">
                  <div className="pt-3">
                    <picture>
                      <source
                        type="image/webp"
                        srcSet="images/buyingcar.webp"
                      />
                      <img
                        src="/images/buyingcar.jpg"
                        alt="Buying a car the smart way"
                        title="Buying a car the smart way"
                        className="img-fluid"
                      />
                    </picture>
                  </div>
                  <div className="pt-3">
                    <p className="text-xs text-uppercase">
                      Buying a car - 8 MIN rEAD
                    </p>
                    <h3>5 tips for buying a car the smart way</h3>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit. A
                      et elit nullam sollicitudin enim ipsum...
                    </p>
                    <p className="text-xs">By Mike T. - July 16 , 2019</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-lg-3">
              <div className="form-group">
                <input
                  type="text"
                  className="form-control input-search"
                  id="inputSearchfaq"
                  placeholder="Search"
                />
              </div>
              <div className="blog-recent py-4">
                <ul>
                  <li>
                    <Link href="#">Selling a car</Link>
                  </li>
                  <li>
                    <Link href="#">Buying a car</Link>
                  </li>
                  <li>
                    <Link href="#">Maintenance</Link>
                  </li>
                  <li>
                    <Link href="#">Prices</Link>
                  </li>
                </ul>
              </div>
              <div className="card card-getaquote">
                <div className="card-body">
                  <h4>Get a quote for your car now</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur ipiscing eli</p>
                  <button
                    type="submit"
                    className="btn btn-primary btn-lg w-100 btn-yellow"
                  >
                    Get a quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default blog;
