import React, { useEffect, useRef } from "react";
import services from "utils/services";

const HappyCustomersSlider = ({ setAttributes }) => {
  const reviews = useRef(null);
  useEffect(() => {
    services.loadScript(`https://apps.elfsight.com/p/platform.js`, () => {
      const container = document.createElement("div");
      container.className = "elfsight-app-f3baf688-498f-4c7e-84ba-df8e6c487e36";
      if (reviews.current.children.length == 0) {
        reviews.current.appendChild(container);
      }
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      const count = document.getElementsByClassName(
        "RatingValue__Container-sc-1eexc2w-0 "
      )["0"]?.innerText;
      let avatars = document.getElementsByClassName(
        "ReviewAvatar__Avatar-sc-1lraoly-2 "
      );
      if (count && avatars?.length > 0) {
        const reviews = {
          count,
          avatars,
        };
        setAttributes((prev) => ({
          ...prev,
          reviews,
        }));
        clearInterval(timer);
      }
      console.log(count);
    }, 1000);
  }, []);

  return <div className="happy_customers_list p-4 " ref={reviews}></div>;
};

export default HappyCustomersSlider;
