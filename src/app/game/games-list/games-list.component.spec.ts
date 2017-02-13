/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GamesListComponent } from './games-list.component';

describe('GameComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GamesListComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(GamesListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
