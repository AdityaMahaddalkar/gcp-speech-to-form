import Axios from "axios";
import { baseURLs } from "../utils/Base.URLs";

const env = "local";
export const getHealth = (setHealth) => {
  const endpoint = `${baseURLs[env]}/html/health`;
  Axios.get(endpoint).then((response) => {
    if (response.status === 200) {
      setHealth(response.data.health);
    }
  });
};
