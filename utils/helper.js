export function isLocal(host) {
  return location.hostname === host;
}

export function isDev() {
  return process.env.NEXT_PUBLIC_APP_MODE !== "production";
}
