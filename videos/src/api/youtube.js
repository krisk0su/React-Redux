import axios from "axios";

const key = "AIzaSyA-T0hl8owaNSEmW37Cx1tycHwQ3o8dOD8";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key
  }
});
