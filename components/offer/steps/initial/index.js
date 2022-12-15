import { Clock, DisLike, Like, SandClock } from "components/common/icons";
import InfoIcon from "components/common/infoIcon";
import MetaHead from "components/common/metaHead";
import React from "react";

function Initial() {
  return (
    <div>
      <MetaHead title="Initial Offer" />
      <div className="offer_right">
        <div className="or_head">
          <h1>Tell Us About Your Vehicle</h1>
        </div>
        <div className="offer_block">
          <div className="ob_hd">
            <h2>Vehicle Basics</h2>
          </div>
          <div className="offer_block-body">
            <form autoComplete="off" className="form" role="form">
              <div className="form-group row ob_frm_row">
                <div className="col-lg-6 p-0">
                  <label htmlFor="">Mileage</label>
                  <input type="text" placeholder="Enter Mileage" />
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-6 p-0">
                  <label htmlFor="">Color</label>
                  {/* <ColorSelect /> */}
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="">Transmission</label>
                  <div className="chooseBlock selector row selectorRow">
                    <div className="selecotr-item col-lg-6 p-0">
                      <input
                        type="radio"
                        id="radio1"
                        name="selector"
                        className="selector-item_radio"
                        defaultChecked
                      />
                      <label htmlFor="radio1" className="selector-item_label">
                        Automatic
                      </label>
                    </div>
                    <div className="selecotr-item col-lg-6 pr-0">
                      <input
                        type="radio"
                        id="radio2"
                        name="selector"
                        className="selector-item_radio"
                      />
                      <label htmlFor="radio2" className="selector-item_label">
                        Manual (i.e. Stick Shift)
                      </label>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="">Does the vehicle start and drive?</label>
                  <div className="chooseBlock selector row selectorRow">
                    <div className="selecotr-item col-lg-6 p-0">
                      <input
                        type="radio"
                        id="yes"
                        name="selector1"
                        className="selector-item_radio"
                        defaultChecked
                      />
                      <label
                        htmlFor="yes"
                        className="selector-item_label labelflexCenter"
                      >
                        <Like />
                        <span>Yes</span>
                      </label>
                    </div>
                    <div className="selecotr-item col-lg-6 pr-0">
                      <input
                        type="radio"
                        id="no"
                        name="selector1"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="no"
                        className="selector-item_label labelflexCenter"
                      >
                        <DisLike /> <span>No</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="offer_block">
          <div className="ob_hd">
            <h2>Where can we send your offer?</h2>
          </div>
          <div className="offer_block-body">
            <form autoComplete="off" className="form" role="form">
              <div className="form-group row ob_frm_row">
                <div className="col-lg-6 p-0">
                  <label htmlFor="" className="lblipt">
                    Zip Code
                    <InfoIcon />
                  </label>
                  <input type="text" placeholder="Enter Here" />
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-6 p-0">
                  <label htmlFor="" className="lblipt">
                    Email
                    <InfoIcon />
                  </label>
                  <input type="text" placeholder="Enter Here" />
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="">Phone Number (We won’t bug you!)</label>
                  <div className="iptWrapper">
                    <div className="iptLt">
                      <input type="text" placeholder="Enter Here" />
                    </div>
                    <div className="iptrt">
                      <span>
                        We won’t bug you but may need to contact you for
                        additional details quickly.
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="form-group row ob_frm_row">
                <div className="col-lg-12 p-0">
                  <label htmlFor="">When are you selling your car?</label>
                  <div className="chooseBlock selector row selectorRow rowSell">
                    <div className="sellItemChoose">
                      <input
                        type="radio"
                        id="sl1"
                        name="sl1"
                        className="selector-item_radio"
                        defaultChecked
                      />
                      <label
                        htmlFor="sl1"
                        className="selector-item_label labelflexCenter"
                      >
                        <Clock /> <span>ASAP!</span>
                      </label>
                    </div>
                    <div className="sellItemChoose">
                      <input
                        type="radio"
                        id="sl2"
                        name="sl1"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="sl2"
                        className="selector-item_label labelflexCenter"
                      >
                        <SandClock />
                        <span>In a Few Weeks</span>
                      </label>
                    </div>
                    <div className="sellItemChoose">
                      <input
                        type="radio"
                        id="sl3"
                        name="sl1"
                        className="selector-item_radio"
                      />
                      <label
                        htmlFor="sl3"
                        className="selector-item_label labelflexCenter"
                      >
                        <span>Maybe Later...</span>
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div className="initial_order_btn">
          <button className="initofferBtn">Get My Initial Offer</button>
        </div>
      </div>
    </div>
  );
}

export default Initial;
