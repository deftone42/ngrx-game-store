import { Component, Input } from '@angular/core';

import { Game } from '../../model/game.model';

@Component({
  selector: 'game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.scss']
})
export class GameDetailComponent {

  /**
   * Game object
   */
  @Input()
  public game: Game;

}
