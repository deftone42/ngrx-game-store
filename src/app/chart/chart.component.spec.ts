/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { StoreModule } from '@ngrx/store';
import { ChartComponent } from './chart.component';
import { ChartModule } from './chart.module';
import { chartReducer } from '../reducer/chart';

describe('ChartComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        ChartModule,
        StoreModule.provideStore({ chart: chartReducer })
      ]
    });
    TestBed.compileComponents();

    this.fixture = TestBed.createComponent(ChartComponent);
    this.app = this.fixture.componentInstance;
    this.fixture.detectChanges();
  });

  it('should create the component', async(() => {
    expect(this.app).toBeTruthy();
  }));
});
