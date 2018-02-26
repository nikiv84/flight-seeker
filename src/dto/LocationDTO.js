export default class LocationDTO {
    constructor(name, code, country, type) {
        this._name = name;
        this._code = code;
        this._country = country;
        this._type = type;
    }

    get name() {
        return this._name;
    }
    get code() {
        return this._code;
    }
    get country() {
        return this._country;
    }
    get type() {
        return this._type;
    }
}