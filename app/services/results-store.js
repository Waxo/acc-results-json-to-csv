import Service from '@ember/service';
import parseResults from '../utils/parse-results';
import mergeResults from '../utils/merge-results';

const R = requireNode('ramda');

export default class ResultsStoreService extends Service {
  jsonImport = {};

  async save(path) {
    const results = await parseResults(path);
    if (results.sessionType !== 'Q') {
      this.jsonImport = results;
    } else {
      this.jsonImport = R.ifElse(
        R.isEmpty,
        R.always(results),
        mergeResults(results)
      )(this.jsonImport);
    }
  }

  get() {
    return this.jsonImport;
  }

  clear() {
    this.jsonImport = {};
  }
}
