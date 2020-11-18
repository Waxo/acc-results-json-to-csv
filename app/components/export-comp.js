import Component from '@ember/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import moment from 'moment';
import resultsToCSV from '../utils/results-to-csv';

const fs = requireNode('fs-extra');

export default class ExportComp extends Component {
  @service applicationStore;
  @service resultsStore;
  @service paperToaster;

  @action
  async exportCSV() {
    const path = `${this.applicationStore.getPath()}\\results-export-${moment().format(
      'YYYY-MM-DD'
    )}.csv`;

    fs.writeFile(path, resultsToCSV(this.resultsStore.get()));
    this.paperToaster.show(`Exported to CSV (${path})`);
  }
}
