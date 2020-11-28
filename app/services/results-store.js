import Service from '@ember/service';
import parseResults from '../utils/parse-results';
import mergeResults from '../utils/merge-results';

const R = requireNode('ramda');

export default class ResultsStoreService extends Service {
  jsonImport = {};

  save(json) {
    const results = parseResults(json);
    if (results.sessionType !== 'Q') {
      this.jsonImport = results;
    } else {
      console.log(R.isEmpty(this.jsonImport));
      this.jsonImport = R.ifElse(
        R.isEmpty,
        R.always(results),
        mergeResults(results)
      )(this.jsonImport);
      console.log(results.sessionResult.leaderBoardLines);
      console.log(this.jsonImport.sessionResult.leaderBoardLines);
    }
  }

  get() {
    return this.jsonImport;
  }

  clear() {
    this.jsonImport = {};
  }
}
