/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { GameDetailComponent } from './game-detail.component';

describe('GameDetailComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        GameDetailComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(GameDetailComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
