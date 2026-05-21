import Api from "./Api";
import axiosClient from "./axiosClient";

export default class hostApi extends Api {
  createPackage(body) {
    const url = `${this.HOSTNAME}${this.table}/createPackage`;
    console.log("url", body, url);
    return axiosClient.post(url, body);
  }
  getListPackage() {
    const url = `${this.HOSTNAME}${this.table}/packages`;
    return axiosClient.get(url);
  }
  getListLocation() {
    const url = `${this.HOSTNAME}${this.table}/locations`;
    return axiosClient.get(url);
  }
  deletePackage(id) {
    const url = `${this.HOSTNAME}${this.table}/deletePackage/${id}`;
    return axiosClient.post(url);
  }
  editPackage(id, body) {
    const url = `${this.HOSTNAME}${this.table}/editPackage/${id}`;
    return axiosClient.put(url, body);
  }
  getDetail(id) {
    const url = `${this.HOSTNAME}${this.table}/packages/${id}`;
    return axiosClient.get(url);
  }
}
