import { commService } from './CommService';
import FlightDTO from '../dto/FlightDTO';
import LocationDTO from '../dto/LocationDTO';

class DataService {
    getFlights(searchData, flightsHandler) {

        let { flyFrom, flyTo, fDate } = searchData;
        fDate = encodeURIComponent(fDate);
        const requestUrl = `flights?flyFrom=${flyFrom}&to=${flyTo}&dateFrom=${fDate}&dateTo=${fDate}&partner=picky&partner_market=us`;

        const flights = [];
        commService.getRequest(requestUrl, responseData => {
            const flightsData = responseData.data.data;
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
        });
    }
    getLocations(searchTerm, locationsHandler) {
        const requestUrl = `locations/?term=${searchTerm}`;
        const locations = [];
        commService.getRequest(requestUrl, responseData => {
            const locationsData = responseData.data.locations;
            locationsData.forEach(singleLocation => {
                const { name, code, country, type } = singleLocation;
                const location = new LocationDTO(name, code, country, type);
                locations.push(location);
            });
            locationsHandler(locations);
        }, (error) => {
            console.log(error);
        });
    }
}

export const dataService = new DataService();