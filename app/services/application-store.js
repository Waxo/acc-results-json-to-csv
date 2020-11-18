import Service from '@ember/service';

const R = requireNode('ramda');


export default class ApplicationStoreService extends Service {
  exportPath = '';

  savePath(path, forceOverride = false) {
    if (!this.exportPath || forceOverride) {
      this.exportPath = R.pipe(
        R.split('\\'),
        R.init,
        R.join('\\')
      )(path);
    }
  }

  getPath() {
    return this.exportPath;
  }
}
