import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Authorization: Client-ID 4853619e7f774030612bfada6e06be1094a9e211465fc95d6a1694e3fba35ee7"
  }
});
