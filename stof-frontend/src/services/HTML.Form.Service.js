import Axios from "axios";
import { baseURLs } from "../utils/Base.URLs";

const env = "local";

export const postAudioData = (blob) => {
  console.log(`Uploading blob: ${blob.blob}`);
  var fd = new FormData();
  fd.append("audio", blob.blob, "audio.mp3");

  Axios.post(`${baseURLs[env]}/html/audio`, fd).then((resp) => {
    console.log(resp);
  });
};
