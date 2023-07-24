import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: { key: "d61807e2ad074985b26b15e47fd89501" },
});
