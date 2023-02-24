import { useEffect, useState } from "react";
import moment from "moment";

const useCountdown = (targetDate) => {
  const date = moment(targetDate).toISOString();
  const countDownDate = +moment(date).format("x");

  const [countDown, setCountDown] = useState(
    countDownDate - +moment().format("x")
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCountDown(countDownDate - +moment().format("x"));
    }, 1000);

    return () => clearInterval(interval);
  }, [countDownDate]);

  return getReturnValues(countDown);
};

const getReturnValues = (countDown) => {
  const days = Math.floor(countDown / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((countDown % (1000 * 60)) / 1000);
  return [days, hours, minutes, seconds, countDown];
};

export { useCountdown };
