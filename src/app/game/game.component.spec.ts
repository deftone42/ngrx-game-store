/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { GameComponent } from './game.component';
import { GameModule } from './game.module';
import { chartReducer } from '../reducer/chart';

describe('GameComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        GameModule,
        StoreModule.provideStore({ chart: chartReducer })
      ]
    });
    TestBed.compileComponents();

    this.fixture = TestBed.createComponent(GameComponent);
    this.app = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(this.app).toBeTruthy();
  }));

  it('should have a list of games', async(() => {
    expect(this.app.games.length).toBe(3);
    expect(this.app.games[0]).toBeDefined();
    expect(this.app.games[0].name).toBeDefined();
  }));
});
