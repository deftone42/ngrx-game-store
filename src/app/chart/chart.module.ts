import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { ChartComponent } from './chart.component';
import { ChartListComponent } from './chart-list/chart-list.component';
import { ChartService } from '../chart/chart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    ChartComponent,
    ChartListComponent
  ],
  exports: [
    ChartListComponent,
    ChartComponent
  ],
  providers: [ChartService]
})
export class ChartModule {}
