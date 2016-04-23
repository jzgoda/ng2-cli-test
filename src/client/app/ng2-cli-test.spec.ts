import {describe, it, expect, beforeEachProviders, inject} from 'angular2/testing';
import {Ng2CliTestApp} from '../app/ng2-cli-test';

beforeEachProviders(() => [Ng2CliTestApp]);

describe('App: Ng2CliTest', () => {
  it('should have the `defaultMeaning` as 42', inject([Ng2CliTestApp], (app: Ng2CliTestApp) => {
    expect(app.defaultMeaning).toBe(42);
  }));

  describe('#meaningOfLife', () => {
    it('should get the meaning of life', inject([Ng2CliTestApp], (app: Ng2CliTestApp) => {
      expect(app.meaningOfLife()).toBe('The meaning of life is 42');
      expect(app.meaningOfLife(22)).toBe('The meaning of life is 22');
    }));
  });
});

