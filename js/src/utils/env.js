export const isDev = process.env.NODE_ENV === "development";

export const isProd = process.env.NODE_ENV === "production";

export const useAxe = process.env.REACT_APP_AXE;

export const apiEndpoint = `${window.location.protocol}//${
  window.location.host
}/${process.env.REACT_APP_JSONAPI_BASE || "jsonapi"}`;
