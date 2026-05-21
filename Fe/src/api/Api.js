import { env } from "../config/env";
import axiosClient from "./axiosClient";

export default class Api {
  HOSTNAME = env.REACT_APP_API;

  table = "";
  axiosClient = null;
  constructor(table) {
    this.table = table;
    this.axiosClient = axiosClient;
  }
  getAll(page = 1, limit = 20, filter, order) {
    console.log("getAll filter:", filter);
    const url = `${this.HOSTNAME}/${this.table}
		}&filter=${filter}&page=${page}&limit=${limit}&order=[${
      order || '["created_at_unix_timestamp","desc"]'
    }]`;
    return axiosClient.get(url);
  }
  update(body, id) {
    const url = `${this.HOSTNAME}/${this.table}/${id}`;
    console.log("url...", url);
    return axiosClient.put(url, body);
  }
  delete(id) {
    const url = `${this.HOSTNAME}/${this.table}/${id}`;
    return axiosClient.delete(url);
  }
  add(body) {
    console.log("url", body);
    const url = `${this.HOSTNAME}/${this.table}`;
    console.log("url", url);
    return axiosClient.post(url, body);
  }
  findOne(id) {
    const url = `${this.HOSTNAME}/${this.table}/${id}`;
    return axiosClient.get(url);
  }
}
