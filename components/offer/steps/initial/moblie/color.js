import React from "react";

function ColorPicker() {
  return (
    <div className="offer_block-body">
      <form autoComplete="off" className="form" role="form">
        <div className="form-group row ob_frm_row">
          <div className="col-lg-12 p-0">
            <label htmlFor="">Color</label>
            <div className="chooseBlock selector row selectorRow rowSell chooseColor">
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl1"
                  name="clr"
                  className="selector-item_radio"
                  defaultChecked
                />
                <label
                  htmlFor="sl1"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="12.25" cy="12" r="12" fill="black" />
                    </svg>
                  </span>
                  <span>Black</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl2"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl2"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="12.75"
                        cy="12"
                        r="11.5"
                        fill="white"
                        stroke="black"
                      />
                    </svg>
                  </span>
                  <span>White</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl3"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl3"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.25"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#D5D5DC"
                      />
                    </svg>
                  </span>
                  <span>Silver</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl4"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl4"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#7B7B7B"
                      />
                    </svg>
                  </span>
                  <span>Gray</span>
                </label>
              </div>
            </div>
            <div className="chooseBlock selector row selectorRow rowSell chooseColor">
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl11"
                  name="clr"
                  className="selector-item_radio"
                  defaultChecked
                />
                <label
                  htmlFor="sl11"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.25"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#356799"
                      />
                    </svg>
                  </span>
                  <span>Blue</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl12"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl12"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#660900"
                      />
                    </svg>
                  </span>
                  <span>Maroon</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl23"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl23"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.25"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#CC1200"
                      />
                    </svg>
                  </span>
                  <span>Red</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl24"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl24"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#FFD147"
                      />
                    </svg>
                  </span>
                  <span>Yellow</span>
                </label>
              </div>
            </div>
            <div className="chooseBlock selector row selectorRow rowSell chooseColor">
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl31"
                  name="clr"
                  className="selector-item_radio"
                  defaultChecked
                />
                <label
                  htmlFor="sl31"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.25"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#3D7B66"
                      />
                    </svg>
                  </span>
                  <span>Green</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl32"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl32"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#5A4F3D"
                      />
                    </svg>
                  </span>
                  <span>Brown</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl33"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl33"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.25"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#CC9900"
                      />
                    </svg>
                  </span>
                  <span>Gold</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl34"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl34"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#E1C699"
                      />
                    </svg>
                  </span>
                  <span>Beige</span>
                </label>
              </div>
            </div>
            <div className="chooseBlock selector row selectorRow rowSell chooseColor">
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl41"
                  name="clr"
                  className="selector-item_radio"
                  defaultChecked
                />
                <label
                  htmlFor="sl41"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.25"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#F99147"
                      />
                    </svg>
                  </span>
                  <span>Orange</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl42"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl42"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.75"
                        width="24"
                        height="24"
                        rx="12"
                        fill="#800080"
                      />
                    </svg>
                  </span>
                  <span>Purple</span>
                </label>
              </div>
              <div className="sellItemChoose">
                <input
                  type="radio"
                  id="sl43"
                  name="clr"
                  className="selector-item_radio"
                />
                <label
                  htmlFor="sl43"
                  className="selector-item_label labelflexCenter colorLabel"
                >
                  <span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.25"
                        width="24"
                        height="24"
                        rx="12"
                        fill="url(#paint0_angular_2949_133530)"
                      />
                      <defs>
                        <radialGradient
                          id="paint0_angular_2949_133530"
                          cx="0"
                          cy="0"
                          r="1"
                          gradientUnits="userSpaceOnUse"
                          gradientTransform="translate(12.25 12) rotate(90) scale(12)"
                        >
                          <stop stopColor="#FFFB00" />
                          <stop offset="0.0870393" stopColor="#FFCF00" />
                          <stop offset="0.166632" stopColor="#FFA600" />
                          <stop offset="0.249394" stopColor="#FF7D00" />
                          <stop offset="0.336078" stopColor="#FF1F00" />
                          <stop offset="0.417225" stopColor="#F72394" />
                          <stop offset="0.499675" stopColor="#8B1FBA" />
                          <stop offset="0.59536" stopColor="#0023BA" />
                          <stop offset="0.667317" stopColor="#007AC6" />
                          <stop offset="0.749732" stopColor="#00B3D4" />
                          <stop offset="0.83208" stopColor="#00B700" />
                          <stop offset="0.917963" stopColor="#83CE01" />
                          <stop offset="1" stopColor="#FFFB00" />
                        </radialGradient>
                      </defs>
                    </svg>
                  </span>
                  <span>Other</span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default ColorPicker;
