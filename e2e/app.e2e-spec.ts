import { FrontendTrainingAngularPage } from './app.po';

describe('frontend-training-angular App', () => {
  let page: FrontendTrainingAngularPage;

  beforeEach(() => {
    page = new FrontendTrainingAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
