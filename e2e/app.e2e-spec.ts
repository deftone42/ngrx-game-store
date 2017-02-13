import { GameListPage } from './app.po';

describe('game-list App', function() {
  let page: GameListPage;

  beforeEach(() => {
    page = new GameListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
