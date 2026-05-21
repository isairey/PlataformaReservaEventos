import Api from "./Api";
import axiosClient from "./axiosClient";

export default class authApi extends Api {
  login(body) {
    const url = `${this.HOSTNAME}${this.table}/authenticate`;
    console.log("url", body, url);
    return axiosClient.post(url, body);
  }
}
