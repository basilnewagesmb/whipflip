import { useState } from "react";
import { Button } from "antd";
import { CarTwoTone } from "@ant-design/icons";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SidebarItem({ item }) {
  const { pathname } = useRouter();
  const [open, setOpen] = useState(false);
  if (item?.sub) {
    return (
      <div className={open ? "sidebar-item open" : "sidebar-item"}>
        <div className="sidebar-title" onClick={() => setOpen(!open)}>
          <span>{item.title}</span>
          <i className="bi-chevron-down toggle-btn"></i>
        </div>
        <div className="sidebar-content">
          {item.sub.map((child, index) => (
            <div key={index}>
              <SidebarItem item={child} />
            </div>
          ))}
        </div>
      </div>
    );
  } else {
    return (
      <Link href={item.path}>
        <Button
          icon={pathname == item.path && <CarTwoTone twoToneColor="#00b0ef" />}
          type="text"
          style={{
            color: pathname == item.path && "#00b0ef",
          }}
          className="w-100 text-left d-flex align-items-center"
        >
          {item.title}
        </Button>
      </Link>
    );
  }
}
