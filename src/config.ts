const dev = process.env.NODE_ENV !== "production";

export const server = dev ? "http://localhost:3000" : "https://phusitsom.me";

export const api = dev
  ? "http://localhost:3000/api"
  : "https://phusitsom.me/api";
