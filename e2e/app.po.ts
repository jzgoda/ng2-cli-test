export class Ng2CliTestPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ng2-cli-test-app p')).getText();
  }
}
