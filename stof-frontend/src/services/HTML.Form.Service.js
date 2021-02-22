import Axios from "axios";
import { baseURLs } from "../utils/Base.URLs";

const env = "local";

export const postMediaBlob = async (mediaBlobUrl) => {
  const endpoint = "/html/audio";

  //Read the audio data from blobUrl
  Axios.get(mediaBlobUrl).then((response) => {
    //Create blob
    let mediaBlob = new Blob([response.data], {
      type: "audio/wav",
    });

    //If the blob has some audio data
    if (mediaBlob.size > 0) {
      var fd = new FormData();
      fd.append("audio", mediaBlob, new Date().toISOString());

      var requestUrl = baseURLs[env] + endpoint;

      const promise = Axios.post(requestUrl, fd, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      promise.then((response) => {
        console.log(response);
      });
    }
  });
};
