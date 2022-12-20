import React from "react";
import Image from "next/image";
function Transmission() {
  return (
    <div className="offer_block-body">
      <div autoComplete="off" className="form" role="form">
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0">
            <label htmlFor="">Transmission</label>
            <div className="chooseBlock selector row selectorRow">
              <div className="selecotr-item chooseItem col-6 p-0">
                <input
                  type="radio"
                  id="radio1"
                  name="selector"
                  className="selector-item_radio"
                  defaultChecked
                />
                <label
                  htmlFor="radio1"
                  className="selector-item_label flex-selector"
                >
                  <span>
                    <Image
                      src="/images/auto.svg"
                      alt="Automatic"
                      title="Automatic"
                      width={50}
                      height={50}
                    />
                  </span>
                  <span>Automatic</span>
                </label>
              </div>
              <div className="selecotr-item chooseItem col-6 pr-0">
                <input
                  type="radio"
                  id="radio2"
                  name="selector"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="radio2"
                  className="selector-item_label flex-selector"
                >
                  <span>
                    <Image
                      src="/images/manual.svg"
                      alt="manual"
                      title="manual"
                      width={50}
                      height={50}
                    />
                  </span>
                  <span className="transname">
                    Manual <span>(i.e. Stick Shift)</span>
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Transmission;
