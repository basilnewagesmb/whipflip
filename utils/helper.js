export function isLocal(host) {
  return location.hostname === host;
}

export function isDev() {
  return process.env.APP_MODE !== "production";
}
