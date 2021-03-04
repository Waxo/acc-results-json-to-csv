import Component from '@ember/component';
import {action} from '@ember/object';
import {inject as service} from '@ember/service';
import moment from 'moment';
import resultsToCSV from '../utils/results-to-csv';
import resultsToInvertedGrid from '../utils/results-to-entry-list';

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

  @action
  async invertedGrid() {
    const path = `${this.applicationStore.getPath()}\\entrylist.json`;

    fs.writeJson(
      path,
      resultsToInvertedGrid(this.resultsStore.get()),
      'utf16le'
    );
    this.paperToaster.show(`Inverted Grid written (${path})`);
  }

  @action
  async clearData() {
    this.resultsStore.clear();
    this.paperToaster.show(`Cleared all results`);
  }
}
