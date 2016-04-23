import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS} from 'angular2/router';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

@Component({
  moduleId: __moduleName,
  selector: 'ng2-cli-test-app',
  providers: [ROUTER_PROVIDERS],
  templateUrl: 'ng2-cli-test.html',
  styleUrls: ['ng2-cli-test.css'],
  directives: [ROUTER_DIRECTIVES, MD_CARD_DIRECTIVES],
  pipes: []
})
@RouteConfig([
])
export class Ng2CliTestApp {
  defaultMeaning: number = 42;

  meaningOfLife(meaning?: number) {
    return `The meaning of life is ${meaning || this.defaultMeaning}`;
  }
}
