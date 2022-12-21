import { Form } from "antd";
import React, { useState, useEffect } from "react";
import Dropdown from "react-bootstrap/Dropdown";
function ColorSelect({ form }) {
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
  const [dropdown, setDropdown] = useState([]);
  const dropdownListClick = (e) => {
    setDropdown([dropdownList[e]]);
    form.setFieldsValue({
      color: dropdownList[e],
    });
  };
  return (
    <>
      <Dropdown className="color_picker">
        {dropdown[0]?.name ? (
          <Dropdown.Toggle id="dropdown-basic" className="color_picker_toggle ">
            <div className="dropItemSpn">
              {dropdown[0]?.code && (
                <div
                  style={{ backgroundColor: dropdown[0]?.code }}
                  className={
                    dropdown[0]?.name === "White"
                      ? "border_for_white color_dot"
                      : "color_dot"
                  }
                ></div>
              )}
              {dropdown[0]?.path && (
                <img src={dropdown[0]?.path} alt="" className="otherClr" />
              )}
            </div>
            <span>{dropdown[0]?.name}</span>
          </Dropdown.Toggle>
        ) : (
          <Dropdown.Toggle id="dropdown-basic" className="color_picker_toggle">
            <div>Choose a Color</div>
          </Dropdown.Toggle>
        )}
        <Dropdown.Menu className="color_list">
          {dropdownList.map((value, i) => {
            return (
              <>
                <Dropdown.Item
                  className={`color_item ${
                    value.id == dropdown[0]?.id && " active"
                  }`}
                  onClick={() => dropdownListClick(i)}
                  key={i}
                  id={value.id}
                >
                  <div className="dropItemSpn ">
                    {value?.code && (
                      <span
                        style={{ backgroundColor: value.code }}
                        className={
                          value.name === "White"
                            ? "border_for_white color_dot"
                            : "color_dot"
                        }
                      ></span>
                    )}
                    {value?.path && (
                      <img src={value.path} alt="" className="otherClr" />
                    )}
                  </div>
                  <span>{value.name}</span>
                </Dropdown.Item>
              </>
            );
          })}
        </Dropdown.Menu>
      </Dropdown>
    </>
  );
}

export default ColorSelect;
