import React, { useEffect, useState } from "react";

function useUrlState(initial) {
  const search = window.location.search; // e.g., "?param1=value1&param2=value2"
  const [params, updateParams] = useState(initial);
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const paramKeys = urlParams.keys();
    const obj = {};
    for (const key of paramKeys) {
      const paramValue = urlParams.get(key);
      obj[key] = paramValue;
    }
    updateParams((prev) => ({ ...prev, ...obj }));
  }, []);
  useEffect(() => {
    const serializedParam = serialize(params);
    if (search != serializedParam) {
      window.history.pushState(
        null,
        "",
        window.location.pathname + serialize(params)
      );
    }
  }, [params]);
  return [params, updateParams];
}
const serialize = function (obj) {
  let str = [];
  for (let p in obj)
    if (obj.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
    }
  return "?" + str.join("&");
};

export default useUrlState;
