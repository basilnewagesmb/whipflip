import React from "react";

function VehicleCDSkeleton() {
  return (
    <div className="offer_block-body">
      <div>
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0">
            <label>
              Any vehicle history issues or title brand? (e.g. accident, flood,
              etc.)
            </label>
            <div className="chooseBlock selector row selectorRow">
              <div className="selecotr-item col-lg-6 p-0">
                <div className="si-wrap active-btn-only">
                  <label className="selector-item_label justify-content-center">
                    Nope!
                  </label>
                </div>
              </div>
              <div className="selecotr-item col-lg-6 pr-0">
                <div className="si-wrap false">
                  <label className="selector-item_label justify-content-center">
                    Yes
                  </label>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1 }} />
          </div>
        </div>
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0">
            <label>Any engine and/or drivability issues?</label>
            <div className="chooseBlock selector row selectorRow">
              <div className="selecotr-item col-lg-6 p-0">
                <div className="si-wrap active-btn-only">
                  <label className="selector-item_label justify-content-center">
                    Nope!
                  </label>
                </div>
              </div>
              <div className="selecotr-item col-lg-6 pr-0">
                <div className="si-wrap false">
                  <label className="selector-item_label justify-content-center">
                    Yes
                  </label>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1 }} />
          </div>
        </div>
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0">
            <label>
              Any dashboard warning lights or inoperable parts? (e.g. Check
              Engine, Airbag Light, A/C issue, etc.)
            </label>
            <div className="chooseBlock selector row selectorRow">
              <div className="selecotr-item col-lg-6 p-0">
                <div className="si-wrap active-btn-only">
                  <label className="selector-item_label justify-content-center">
                    Nope!
                  </label>
                </div>
              </div>
              <div className="selecotr-item col-lg-6 pr-0">
                <div className="si-wrap false">
                  <label className="selector-item_label justify-content-center">
                    Yes
                  </label>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1 }} />
          </div>
        </div>
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0">
            <label>Any aftermarket parts or modifications?</label>
            <div className="chooseBlock selector row selectorRow">
              <div className="selecotr-item col-lg-6 p-0">
                <div className="si-wrap active-btn-only">
                  <label className="selector-item_label justify-content-center">
                    Nope!
                  </label>
                </div>
              </div>
              <div className="selecotr-item col-lg-6 pr-0">
                <div className="si-wrap false">
                  <label className="selector-item_label justify-content-center">
                    Yes
                  </label>
                </div>
              </div>
            </div>
            <div style={{ opacity: 1 }} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default VehicleCDSkeleton;
