import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';

import { ChartStore } from '../model/chart-store.model';
import { Game } from '../model/game.model';

@Injectable()
export class ChartService {

  /**
   * Constructor
   */
  constructor(private store: Store<ChartStore>) {
  }

  /**
   * Reset game selection detail
   */
  public reset(): void {
    this.store.dispatch({ type: 'RESET' });
  }

  /**
   * Add a game in the existing list
   *
   * @param game
   */
  public add(game: Game): void {
    this.store.dispatch({ type: 'ADD', payload: game });
  }

  /**
   * Delete a game from the existing list
   *
   * @param game
   */
  public delete(game: Game) {
    this.store.dispatch({ type: 'DELETE', payload: game });
  }
}
