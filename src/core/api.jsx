import { domain } from "../api/config";

class Api {
  accessToken;

  useToken = false;

  token() {
    this.useToken = true;
    return this;
  }

  json(res) {
    if (res.status === 200) {
      return res.json();
    }

    if (res.state === 403) {
    }

    return new Promise((resolve, reject) => {});
  }

  async refreshToken() {
    let refreshToken = JSON.parse(localStorage.getItem("token"))?.refreshToken;

    let res = await fetch(`${domain}elearning/v4/refresh-token`, {
      method: "POST",
      body: JSON.stringify({
        refreshToken,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());

    if (res.data.accessToken) {
      localStorage.setItem("token", JSON.stringify(res.data));
    }

    return true;
  }

  _setupHeader() {
    let headers = {
      "Content-Type": "application/json",
    };

    if (this.useToken) {
      let token = JSON.parse(localStorage.getItem("token"));

      if (token?.accessToken) {
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
      await this.refreshToken();

      let token = JSON.parse(localStorage.getItem("token"));

      if (token?.accessToken) {
        options.headers.Authorization = `Bearer ${token.accessToken}`;
      }

      return fetch(url, options);
    }

    return new Promise((resolve, reject) => {});
  }

  get(url) {
    let headers = this._setupHeader();
    return this.request(`${domain}${url}`, { headers }).then(this.json);
  }
  post(url, data = {}) {
    let headers = this._setupHeader();

    let body = JSON.stringify(data);

    return this.request(`${domain}${url}`, {
      method: "POST",
      headers,
      body,
    }).then(this.json);
  }
  put(url, data = {}) {
    let headers = this._setupHeader();

    let body = JSON.stringify(data);
    return this.request(`${domain}${url}`, {
      method: "PUT",
      headers,
      body,
    }).then(this.json);
  }
  delete(url) {
    let headers = this._setupHeader();
    return this.request(`${domain}${url}`, { method: "DELETE", headers }).then(
      this.json
    );
  }
}

export default new Api();
