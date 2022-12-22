import { Form } from "antd";
import React from "react";

function ColorPicker({ form, next }) {
  const color = Form.useWatch("color", form);
  const dropdownList = [
    { id: 0, name: "Black", code: "#000" },
    { id: 1, name: "White", code: "#fff" },
    { id: 2, name: "Silver", code: "#D5D5DC" },
    { id: 3, name: "Grey", code: "#7B7B7B" },
    { id: 4, name: "Blue", code: "#356799" },
    { id: 5, name: "Maroon", code: "#660900" },
    { id: 6, name: "Red", code: "#CC1200" },
    { id: 7, name: "Yellow", code: "#FFD147" },
    { id: 8, name: "Green", code: "#3D7B66" },
    { id: 9, name: "Brown", code: "#5A4F3D" },
    { id: 10, name: "Gold", code: "#CC9900" },
    { id: 11, name: "Beige", code: "#E1C699" },
    { id: 12, name: "Orange", code: "#F99147" },
    { id: 13, name: "Purple", code: "#800080" },
    { id: 14, name: "Other", path: "/images/grad.png" },
  ];
  const listClick = async (e) => {
    await form.setFieldsValue({
      color: e,
    });
    next();
  };
  return (
    <Form.Item
      label={false}
      name="color"
      className="m-0 w-100"
      rules={[
        {
          required: true,
          message: "Please select your vehicle color!",
        },
      ]}
    >
      <div className="offer_block-body">
        <div autoComplete="off" className="form" role="form">
          <div className="form-group row ob_frm_row">
            <div className="col-lg-12 p-0">
              <label htmlFor="">Color</label>
              <div className="chooseBlock selector row selectorRow rowSell chooseColor">
                {dropdownList.map((col, i) => (
                  <div
                    className="sellItemChoose"
                    onClick={() => listClick(col)}
                    key={i}
                  >
                    <label
                      htmlFor="sl1"
                      className={`selector-item_label labelflexCenter colorLabel ${
                        color?.id == col.id && " checked"
                      }`}
                    >
                      <span className="border rounded-circle">
                        {col?.path ? (
                          <img
                            src={col.path}
                            alt=""
                            style={{
                              width: "25px",
                              height: "25px",
                            }}
                            className="otherClr"
                          />
                        ) : (
                          <svg
                            width="25"
                            height="25"
                            viewBox="0 0 25 25"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <circle cx="12.25" cy="12" r="12" fill={col.code} />
                          </svg>
                        )}
                      </span>
                      <span>{col.name}</span>
                    </label>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Form.Item>
  );
}

export default ColorPicker;
