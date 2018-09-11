import axios from 'axios';
import { server } from './config';

var config = {
    // headers: {
    //
    // }
};

export default {
    getHouse(houseId) {
        return axios.get(server + "/house/" + houseId)
            .then(response => {
                return response.data;
            })
            .catch(response => {
                console.log(response);
            })
    },
    getPerson(personId) {
        return axios
            .get(server + "/user/" + personId)
            .then(res => {
                //handle response
                console.log(res);
                return res.data;
            })
            .catch(res => {
                //handle response error
                console.log(res);
            })
    },
    postHouse(json) {
        return axios.post(server + '/House/', json)
            .then(response => {
                console.log(response);
                return response.data.id;
            });
    }
}

