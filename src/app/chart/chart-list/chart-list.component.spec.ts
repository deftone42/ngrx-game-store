/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { ChartListComponent } from './chart-list.component';

describe('ChartListComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChartListComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the component', async(() => {
    const fixture = TestBed.createComponent(ChartListComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
