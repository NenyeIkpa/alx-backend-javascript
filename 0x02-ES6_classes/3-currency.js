export default class Currency {
  constructor(code, name) {
    if (typeof name === 'string' && typeof code === 'string') {
      this._name = name;
      this._code = code;
    }
  }

  getName() {
    return this._name;
  }

  getCode() {
    return this._code;
  }

  setName(name) {
    if (typeof name === 'string') {
      this._name = name;
    }
  }

  setCode(code) {
    if (typeof code === 'string') {
      this._code = code;
    }
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
