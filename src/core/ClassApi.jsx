import { domain } from "../api/config";
class Api {
  accessToken;
  useToken = false;
  token() {
    this.useToken = true;
    return this;
  }
  json(response) {
    if (response.status === 200) {
      return response.json();
    }
    if (response.status === 403) {
    }
    return new Promise((resolve, reject) => {});
  }
  async refreshToken() {
    let { refreshToken } = JSON.parse(localStorage.getItem("tokenUser"));
    let res = await fetch(`${domain}elearning/v4/refresh-token`, {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        refreshToken,
      }),
    }).then((res) => res.json());
    if (res.data.accessToken) {
      localStorage.setItem("tokenUser", JSON.stringify(res.data));
    }
    return true;
  }
  setupHeader() {
    let headers = {
      "Content-Type": "application/json",
    };
    if (this.useToken) {
      let token = JSON.parse(localStorage.getItem("tokenUser"));
      if (token.accessToken) {
        headers.Authorization = `Bearer ${token.accessToken}`;
      }
    }
    this.useToken = false;
    return headers;
  }
  async request(url, options) {
    let response = await fetch(url, options);
    if (response.status === 200) {
      return response;
    }
    if (response.status === 403) {
      // await this.refreshToken();
      let { accessToken } = JSON.parse(localStorage.getItem("tokenUser"));
      if (accessToken) {
        options.headers.Authorization = `Bearer ${accessToken}`;
      }
      return fetch(url, options);
    }
    return new Promise((resolve, reject) => {});
  }
  get(url) {
    let headers = this.setupHeader();
    return this.request(`${domain}${url}`, { headers }).then(this.json);
  }
  post(url, data = {}) {
    let headers = this.setupHeader();
    let body = JSON.stringify(data);
    return this.request(`${domain}${url}`, {
      method: "POST",
      body,
      headers,
    }).then(this.json);
  }
  put(url, data = {}) {
    let headers = this.setupHeader();
    let body = JSON.stringify(data);
    return this.request(`${domain}${url}`, {
      method: "PUT",
      headers,
      body,
    }).then(this.json);
  }
  delete(url) {
    let headers = this.setupHeader();
    return this.request(`${domain}${url}`, {
      method: "DELETE",
      headers,
    }).then(this.json);
  }
}
export default new Api();
