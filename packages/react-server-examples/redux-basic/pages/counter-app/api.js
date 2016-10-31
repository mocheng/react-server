import JsonEndpoint from '../../middleware/json_endpoint';

var count = 123;

export default class CounterAPI {
  static middleware() {
    return [JsonEndpoint];
  }

  handleRoute() {
    return {code: 200};
  }

  getResponseData() {
    return Promise.resolve(count++);
  }

}
