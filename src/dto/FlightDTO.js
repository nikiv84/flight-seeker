export default class FlightDTO {
    constructor(cityFrom, cityTo, dTime, aTime, price, flyDuration) {
        this._cityFrom = cityFrom;
        this._cityTo = cityTo;
        this._dTime = dTime;
        this._aTime = aTime;
        this._price = price;
        this._flyDuration = flyDuration;
    }

    get cityFrom() {
        return this._cityFrom;
    }
    get cityTo() {
        return this._cityTo;
    }
    get dTime() {
        return this._dTime;
    }
    get aTime() {
        return this._aTime;
    }
    get price() {
        return this._price;
    }
    get flyDuration() {
        return this._flyDuration;
    }
}