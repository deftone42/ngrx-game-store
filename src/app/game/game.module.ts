import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { GameComponent } from './game.component';
import { GamesListComponent } from './games-list/games-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { ChartService } from '../chart/chart.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  declarations: [
    GameComponent,
    GamesListComponent,
    GameDetailComponent
  ],
  exports: [
    GameComponent,
    GamesListComponent,
    GameDetailComponent
  ],
  providers: [ChartService]
})
export class GameModule {}
