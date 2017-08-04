import { ReferredPage } from './app.po';

describe('referred App', () => {
  let page: ReferredPage;

  beforeEach(() => {
    page = new ReferredPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
