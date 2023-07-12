import axios from "axios";

class HttpClient {
  private BASE_URL = "https://api.github.com";
  private TOKEN = process.env.REACT_APP_AUTHORIZATION;

  protected axiosInstance = axios.create({
    baseURL: this.BASE_URL,
    headers: {
      Authorization: this.TOKEN,
    },
  });
}

export default HttpClient;
