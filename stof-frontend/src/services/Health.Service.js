import Axios from "axios";
import { baseURLs } from "../utils/Base.URLs";

const env = process.env.NODE_ENV || "local";
export const getHealth = (setHealth) => {
  const endpoint = `${baseURLs[env]}/html/health`;
  console.log(`${env}:${endpoint}`);
  Axios.get(endpoint).then((response) => {
    if (response.status === 200) {
      setHealth(response.data.health);
    }
  });
};
