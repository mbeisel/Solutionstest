import { AngulargithubtestPage } from './app.po';

describe('angulargithubtest App', () => {
  let page: AngulargithubtestPage;

  beforeEach(() => {
    page = new AngulargithubtestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
