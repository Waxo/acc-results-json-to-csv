import Component from '@ember/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
import {inject as service} from '@ember/service';

const fs = requireNode('fs-extra');

export default class accResultsImportComp extends Component {
  @service applicationStore;
  @service resultsStore;
  @service paperToaster;
  @tracked isLoaded;

  @action
  async importJson(f) {
    this.applicationStore.savePath(f.files[0].path, true);
    this.resultsStore.save(await fs.readFile(f.files[0].path, 'utf8'));
    this.isLoaded = true;
    this.paperToaster.show('Results imported');
  }
}
