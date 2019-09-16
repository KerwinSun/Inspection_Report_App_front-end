import axios from "axios";
import { server } from "./config";
import store from "store";

const axiosInstance = axios.create({
  baseURL: server,
  withCredentials: true
});

export default {
  getHouse(houseId) {
    let payload = {
      url: "/house/" + houseId,
      method: "GET"
    };
    return axiosInstance(payload).then(res => {
      return res.data;
    });
  },
  getPerson(personId) {
    let payload = {
      url: "/user/" + personId,
      method: "GET"
    };
    return axiosInstance(payload).then(res => {
      return res.data;
    });
  },
  getUsers() {
    let payload = {
      url: "/user/",
      method: "GET"
    };
    return axiosInstance(payload).then(res => {
      return res.data;
    });
  },
  postUser(json) {
    let payload = {
      data: json,
      url: "/User",
      method: "POST"
    };
    return axiosInstance(payload).then(response => {
      return response.data.id;
    });
  },
  postHouse(json) {
    let payload = {
      data: json,
      url: "/House",
      method: "POST"
    };
    return axiosInstance(payload).then(response => {
      return response.data.id;
    });
  },
  postImage(formData, featureId) {
    let payload = {
      data: formData,
      url: "/image",
      method: "POST",
      headers: {
        "feature-id": featureId
      }
    };
    return axiosInstance(payload)
      .then()
      .catch();
  },
  getImages(featureId) {
    let payload = {
      url: "/image/" + featureId,
      method: "GET"
    };
    return axiosInstance(payload)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  },
  deleteImage(featureId, imageName) {
    let payload = {
      url: "/image/" + featureId,
      method: "DELETE",
      headers: {
        "image-name": imageName
      }
    };
    return axiosInstance(payload)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        return error;
      });
  },
  getReport(houseId) {
    let payload = {
      url: "/export/" + houseId,
      method: "GET",
      responseType: "blob"
    };
    return axiosInstance(payload)
      .then(response => {
        const url = window.URL.createObjectURL(new Blob([response.data]));
        const link = document.createElement("a");
        link.href = url;
        link.setAttribute("download", "InspectionReport_" + houseId + ".pdf");
        document.body.appendChild(link);
        link.click();
      })
      .catch(error => {
        return error;
      });
  },
  login(email, password) {
    var payload = {
      data: {
        email: email,
        password: password
      },
      url: "auth/login",
      method: "POST"
    };
    return axiosInstance(payload).then(res => {
      store.set("user", res.data);
      store.set("loggedIn", true);
    });
  },
  isUserAuthenticated() {
    if (store.get("loggedIn") === undefined) {
      return false;
    }
    if (store.get("loggedIn") === false) {
      return false;
    }
    return true;
  },
  logout() {
    let payload = {
      url: "/auth/logout",
      method: "POST"
    };
    return axiosInstance(payload)
      .then(response => {
        store.clearAll();
        return response;
      })
      .catch(error => {
        store.clearAll();
        return error;
      });
  }
};
