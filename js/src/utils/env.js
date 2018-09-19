export const isDev = process.env.NODE_ENV === "development";
export const isProd = process.env.NODE_ENV === "production";

export const useAxe = process.env.REACT_APP_AXE;

export const ICU = window.ICU;

export const { store } = ICU;

export const apiEndpoint =
  process.env.REACT_APP_API_ENDPOINT ||
  `${window.location.protocol}//${window.location.host}/${process.env
    .REACT_APP_JSONAPI_BASE || "jsonapi"}`;
