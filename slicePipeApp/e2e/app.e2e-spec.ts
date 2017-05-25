import { SlicePipeAppPage } from './app.po';

describe('slice-pipe-app App', function() {
  let page: SlicePipeAppPage;

  beforeEach(() => {
    page = new SlicePipeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
