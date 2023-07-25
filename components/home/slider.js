import { setReviews } from "features/reviews/reviewsSlice";
import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import services from "utils/services";

const HappyCustomersSlider = () => {
  const dispatch = useDispatch();
  const reviews = useRef(null);
  useEffect(() => {
    if (window)
      services.loadScript(`https://apps.elfsight.com/p/platform.js`, () => {
        const container = document.createElement("div");
        container.className =
          "elfsight-app-f3baf688-498f-4c7e-84ba-df8e6c487e36";
        if (reviews?.current?.children?.length == 0) {
          reviews.current.appendChild(container);
        }
      });
  }, []);
  useEffect(() => {
    const timer = setInterval(() => {
      const count = document.getElementsByClassName(
        "RatingValue__Container-sc-1eexc2w-0 "
      )["0"]?.innerText;
      const reviewsUrls = [];
      const reviewsElements = document.querySelectorAll(
        '[class^="ReviewLinkContainer__Link"]'
      );
      reviewsElements.forEach((element) => {
        reviewsUrls.push(element);
      });
      const avatars = [];
      const avatarsElements = document.querySelectorAll(
        '[class^="Avatar__StyledAvatar"]'
      );
      avatarsElements.forEach((element) => {
        avatars.push(element);
      });
      let avatarData = Array.from(avatarsElements).map((img, i) => ({
        src: img.src,
        url: reviewsUrls[i].href,
        name: img.alt,
      }));

      if (count && avatarData?.length > 0) {
        dispatch(
          setReviews({
            count,
            avatars: avatarData,
          })
        );
        clearInterval(timer);
      }
    }, 1000);
  }, []);
  return <div className="happy_customers_list p-4 " ref={reviews}></div>;
};

export default HappyCustomersSlider;
