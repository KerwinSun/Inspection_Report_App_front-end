import axios from "axios";
import { server } from "./config";
import store from "store";

const axiosInstance = axios.create({
  baseURL: "https://inspection-report-app-server.azurewebsites.net/api",
  method: "POST",
  withCredentials: true
});

export default {
  getHouse(houseId) {
    return axios
      .get(server + "/house/" + houseId, { withCredentials: true })
      .then(response => {
        return response.data;
      })
      .catch(response => {});
  },
  getPerson(personId) {
    return axios
      .get(server + "/user/" + personId, { withCredentials: true })
      .then(res => {
        //handle response
        return res.data;
      })
      .catch(res => {
        //handle response error
      });
  },
  postHouse(json) {
    let payload = {
      data: {
        json
      },
      url: "/House"
    };
    return axiosInstance(payload).then(response => {
      return response.data.id;
    });
  },
  postImage(formData, featureId) {
    let payload = {
      data: {
        formData
      },
      url: "/Image",
      headers: {
        "feature-id": featureId
      }
    };
    return axiosInstance(payload)
      .then(response => {
        console.log(response);
      })
      .catch(() => {
        console.log("Error sending images");
      });
  },
  getImages(featureId) {
    return axios
      .get(server + "/Image/" + featureId, { withCredentials: true })
      .then(response => {
        return response.data;
      })
      .catch(response => {
        console.log(response);
      });
  },
  deleteImage(featureId, imageName) {
    return axios
      .delete(server + "/Image/" + featureId, {
        headers: {
          "image-name": imageName
        },
        withCredentials: true
      })
      .then(response => {
        return response.data;
      })
      .catch(response => {
        console.log("Error sending images");
      });
  },
  getReport(houseID) {
    return axios
      .get(server + "/export/" + houseID, { withCredentials: true })
      .then(response => {
        return response.data;
      })
      .catch(response => {
        console.log(response);
      });
  },
  login(email, password) {
    let payload = {
      data: {
        email: email,
        password: password
      },
      url: "auth/login"
    };
    return axiosInstance(payload)
      .then(() => {
        store.set("loggedIn", true);
        return true;
      })
      .catch(() => {
        return false;
      });
  },
  isUserAuthenticated() {
    if (store.get("loggedIn") === undefined) {
      return false;
    }
    if (localStorage.getItem("loggedIn") === false) {
      return false;
    }
    return true;
  },
  logout() {
    return axios
      .post(server + "/auth/logout")
      .then(response => {
        store.remove("loggedIn", false);
        return response;
      })
      .catch(error => {
        return error;
      });
  }
};
