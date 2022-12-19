
const log = console.log;

export function init(code) {
  // log(`Analytics init triggered for ${code}`);
}

export function pageview() {
  // log(`Pageview triggered for ${window.location.pathname}`);
}

export function event(category = "", action = "") {
  // log(
  //   `Event for category ${category} and action ${action} triggered`
  // );
}

export function modal(modalName) {
  if (modalName != null) { }// log(`modalview triggered for ${modalName}`);
}


export function exception(description = "", fatal = false) {
  log(
    `${fatal ? "Fatal exception" : "Exception"
    } with description ${description}`
  );
}
