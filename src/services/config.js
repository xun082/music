const devBaseURL = "http://localhost:4000";
const proBaseURL = "http://localhost:3001";
export const BASE_URL =
  process.env.NODE_ENV === "development" ? devBaseURL : proBaseURL;

export const TIMEOUT = 5000;
