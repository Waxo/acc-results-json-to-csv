import Application from 'acc-results-json-to-csv/app';
import config from 'acc-results-json-to-csv/config/environment';
import { setApplication } from '@ember/test-helpers';
import { start } from 'ember-qunit';

setApplication(Application.create(config.APP));

start();
