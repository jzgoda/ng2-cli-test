import {bootstrap} from 'angular2/platform/browser';
import {enableProdMode} from 'angular2/core';
import {environment} from './app/environment';
import {Ng2CliTestApp} from './app/ng2-cli-test';

if (environment.production) {
  enableProdMode();
}

bootstrap(Ng2CliTestApp);
