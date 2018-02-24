import { ENDPOINT } from "../Constants";
import axios from "axios";

class CommService {
    getRequest(searchData, getDataHandler, errorHandler) {
        let { flyFrom, flyTo, fDate } = searchData;
        fDate = encodeURIComponent(fDate);
        const requestUrl = `${ENDPOINT}?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${fDate}&dateTo=${fDate}&partner=picky&partner_market=us`;
        axios({
            method: "GET",
            url: requestUrl,
            responseType: "json"
        })
            .then(result => getDataHandler(result.data))
            .catch(error => errorHandler(error));
    }
}

export const commService = new CommService();