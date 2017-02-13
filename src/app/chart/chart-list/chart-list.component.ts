import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../../model/game.model';

@Component({
  selector: 'chart-list',
  templateUrl: './chart-list.component.html',
  styleUrls: ['./chart-list.component.scss']
})
export class ChartListComponent {

  /**
   * List of games
   */
  @Input()
  public list: Array<Game>;

  /**
   * Fires when game is selected to view details
   *
   * @type {EventEmitter<Game>}
   */
  @Output()
  public delete: EventEmitter<Game> = new EventEmitter<Game>();

}
