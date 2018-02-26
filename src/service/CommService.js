import { ENDPOINT } from "../api";
import axios from "axios";

class CommService {
    getRequest(requestUrl, getDataHandler, errorHandler) {
        axios({
            method: "GET",
            url: ENDPOINT + requestUrl,
            responseType: "json"
        })
            .then(result => getDataHandler(result))
            .catch(error => errorHandler(error));
    }
}

export const commService = new CommService();