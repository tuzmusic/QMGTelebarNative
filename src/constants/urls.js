// @flow
import secrets from "../../secrets";

const rootUrl = "https://telebardelivery.com";
const apiBase = rootUrl + "/wp-json/wc/v3";

export const auth = {
  consumer_key: secrets.CONSUMER_KEY,
  consumer_secret: secrets.CONSUMER_SECRET
};

const authString =
  "?consumer_key=" +
  auth.consumer_key +
  "&consumer_secret=" +
  auth.consumer_secret;

export const ApiUrls = {
  getProducts: [apiBase, "/products", authString].join("")
};
