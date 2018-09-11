import axios from 'axios';
import { server } from './config';

export default {
    getHouse(houseId) {
        return axios.get(server + "/house/" + houseId)
            .then(response => {
                return response.data;
            })
            .catch(response => {
            })
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
            })
    },
    postHouse(json) {
        return axios.post(server + '/House/', json)
            .then(response => {
                return response.data.id;
            });
    }
}

