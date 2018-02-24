import { commService } from './CommService';
import FlightDTO from '../dto/FlightDTO';

class DataService {
    getFlights(serchData, flightsHandler) {
        const flights = [];
        commService.getRequest(serchData, responseData => {
            const flightsData = responseData.data;
            console.log(flightsData);
            flightsData.forEach(singleFlight => {
                const { cityFrom, cityTo, dTime, aTime, price, fly_duration } = singleFlight;
                const depTime = new Date(dTime * 1000).toUTCString().slice(0, -7) + "h";
                const arrTime = new Date(aTime * 1000).toUTCString().slice(0, -7) + "h";
                const flight = new FlightDTO(cityFrom, cityTo, depTime, arrTime, price, fly_duration);
                flights.push(flight);
            });
            flightsHandler(flights);
        }, (error) => {
            console.log(error);
        })
    }
}

export const dataService = new DataService();