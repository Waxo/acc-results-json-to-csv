import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | view-results', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:view-results');
    assert.ok(route);
  });
});
