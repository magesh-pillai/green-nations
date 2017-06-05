import { GreenNationsPage } from './app.po';

describe('green-nations App', () => {
  let page: GreenNationsPage;

  beforeEach(() => {
    page = new GreenNationsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
