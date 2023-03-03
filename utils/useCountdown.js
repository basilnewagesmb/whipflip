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
  const days = to2Decimal(Math.floor(countDown / (1000 * 60 * 60 * 24)));
  const hours = to2Decimal(
    Math.floor((countDown % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
  );
  const minutes = to2Decimal(
    Math.floor((countDown % (1000 * 60 * 60)) / (1000 * 60))
  );
  const seconds = to2Decimal(Math.floor((countDown % (1000 * 60)) / 1000));
  return [days, hours, minutes, seconds, countDown];
};
const to2Decimal = (num) => {
  if (num < 10) {
    return "0" + num;
  } else {
    return num;
  }
};
export { useCountdown };
