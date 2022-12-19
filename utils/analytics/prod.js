import ReactGA from "react-ga";
// import { ElasticBeanstalk } from "aws-sdk"

const IS_BROWSER = typeof window !== "undefined";

export function init(code) {
  if (IS_BROWSER && !window.GA_INITIALIZED && code) ReactGA.initialize(code);
}

export function pageview() {
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
}

export function event(category = "", action = "", label = "", value) {
  if (category && action) {
    let eventData = { category, action };
    if (!!label) eventData.label = label;
    if (value != null) eventData.value = value;
    ReactGA.event(eventData);
  }
}

export function modal(modalName) {
  if (modalName != null) ReactGA.modalview(modalName);
}

export function exception(description = "", fatal = false) {
  if (description) ReactGA.exception({ description, fatal });
}
