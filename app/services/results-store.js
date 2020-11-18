import Service from '@ember/service';
import parseResults from '../utils/parse-results';

export default class ResultsStoreService extends Service {
  jsonImport = {};

  save(json) {
    this.jsonImport = parseResults(json);
    console.log(this.jsonImport);
  }

  get() {
    return this.jsonImport;
  }
}
