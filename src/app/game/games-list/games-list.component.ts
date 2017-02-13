import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Game } from '../../model/game.model';

@Component({
  selector: 'games-list',
  templateUrl: './games-list.component.html',
  styleUrls: ['./games-list.component.scss']
})
export class GamesListComponent {

  /**
   * List of games
   */
  @Input()
  public games: Array<Game>;

  /**
   * Fires when game is selected to view details
   *
   * @type {EventEmitter<Game>}
   */
  @Output()
  public viewDetail: EventEmitter<Game> = new EventEmitter<Game>();

  /**
   * Fires when game is added
   *
   * @type {EventEmitter<Game>}
   */
  @Output()
  public add: EventEmitter<Game> = new EventEmitter<Game>();

}
