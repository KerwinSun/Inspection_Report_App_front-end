import axios from "axios";
import { server } from "./config";
import store from "store";

export default {
  getHouse(houseId) {
    return axios
      .get(server + "/house/" + houseId)
      .then(response => {
        return response.data;
      })
      .catch(response => {});
  },
  getPerson(personId) {
    return axios
      .get(server + "/user/" + personId)
      .then(res => {
        //handle response
        return res.data;
      })
      .catch(res => {
        //handle response error
      });
  },
  postHouse(json) {
    return axios.post(server + "/House/", json).then(response => {
      return response.data.id;
    });
  },
  postImage(formData, featureId) {
    return axios
      .post(server + "/Image/", formData, {
        headers: {
          "feature-id": featureId
        }
      })
      .then(response => {
        console.log(response);
      })
      .catch(response => {
        console.log("Error sending images");
      });
  },
  getImages(featureId) {
    return axios
      .get(server + "/Image/" + featureId)
      .then(response => {
        return response.data;
      })
      .catch(response => {
        console.log(response);
      });
  },
  login(email, password) {
    store.set("loggedIn", true);
    /*
    return axios
      .post(server + "/auth/", email)
      .then(response => {
        store.set("loggedIn", true);
        return response;
      })
      .catch(error => {
        return error;
      });
      */
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
    store.remove("loggedIn");
  }
};
