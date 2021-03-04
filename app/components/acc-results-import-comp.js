import Component from '@ember/component';
import {action} from '@ember/object';
import {tracked} from '@glimmer/tracking';
import {inject as service} from '@ember/service';

const R = requireNode('ramda');

export default class accResultsImportComp extends Component {
  @service applicationStore;
  @service resultsStore;
  @service paperToaster;
  @tracked isLoaded;

  @action
  async importJson(f) {
    this.applicationStore.savePath(f.files[0].path, true);
    await R.forEach(async (file) => this.resultsStore.save(file.path), f.files);
    this.isLoaded = true;
    this.paperToaster.show('Results imported');
  }
}
