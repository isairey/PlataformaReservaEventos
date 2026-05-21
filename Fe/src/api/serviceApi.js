import Api from "./Api";
import axiosClient from "./axiosClient";

export default class servicdeApi extends Api {
  getListservice() {
    const url = `${this.HOSTNAME}${this.table}/service/getall`;
    return axiosClient.get(url);
  }
  getListpackageByCustomer() {
    const url = `${this.HOSTNAME}${this.table}/packages`;
    return axiosClient.get(url);
  }
  getPackageDetailByCustomer(id) {
    const url = `${this.HOSTNAME}${this.table}/package/${id}`;
    return axiosClient.get(url);
  }
}
