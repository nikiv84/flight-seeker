export default class LocationDTO {
    constructor(name, code, type) {
        this._name = name;
        this._code = code;
        this._type = type;
    }

    get name() {
        return this._name;
    }
    get code() {
        return this._code;
    }
    get type() {
        return this._type;
    }
}