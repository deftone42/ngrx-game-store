import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { ChartStore } from '../model/chart-store.model';
import { Game } from '../model/game.model';
import { ChartService } from '../chart/chart.service';

@Component({
  selector: 'chart-component',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChartComponent implements OnInit {

  /**
   * Observable list of added games in chart
   */
  public list: Observable<Array<Game>>;

  /**
   * Constructor
   */
  constructor(private store: Store<ChartStore>,
              private chartService: ChartService) {
  }

  /**
   * Executes when initialises
   */
  public ngOnInit(): void {
    this.list = this.store.select('chart');
  }

  /**
   * Delete a game from chart
   *
   * @param game
   */
  public delete(game: Game): void {
    this.chartService.delete(game);
  }

  /**
   * Reset chart
   */
  public reset(): void {
    this.chartService.reset();
  }

}
