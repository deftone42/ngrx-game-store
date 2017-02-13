import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Game } from '../model/game.model';
import { ChartService } from '../chart/chart.service';

@Component({
  selector: 'game-component',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameComponent implements OnInit {

  /**
   * List of games
   */
  public games: Array<Game>;

  /**
   * Current selected game
   */
  public selectedGame: Game;

  /**
   * Constructor
   */
  constructor(private chartService: ChartService) {
  }

  /**
   * Executes when initialises
   */
  public ngOnInit(): void {
    this.games = this.getMockGames();
  }

  /**
   * Add game to chart
   *
   * @param game
   */
  public addGame(game: Game): void {
    this.chartService.add(game);
  }

  /**
   * Selects a game to see details
   *
   * @param game
   */
  public viewDetail(game: Game): void {
    this.selectedGame = game;
  }

  /**
   * Create mock data
   */
  public getMockGames() {
    return [
      {
        id: 1,
        name: 'Final Fantasy VII',
        description: 'AVALANCHE performs a successful bombing operation at a Shinra Mako reactor in Midgar.' +
        'A second run on another reactor goes wrong, and Cloud falls into the slums of the city.' +
        'There, he meets Aerith and defends her from an attack by the Turks.' +
        'Meanwhile, Shinra finds AVALANCHE\'s location and collapses part of the upper city, ' +
        'killing most of AVALANCHE along with the slum population below.' +
        'Aerith is also captured, as her status as a Cetra can potentially reveal the "Promised Land", ' +
        'which Shinra believes is overflowing with exploitable Lifestream energy.' +
        'Cloud, Barret and Tifa rescue Aerith but are captured after encountering a specimen dubbed "Jenova".' +
        'They awaken to find their prison cells opened, and escape to find President Shinra killed. ' +
        'A katana in the President\'s body indicates that the attacker was Sephiroth, ' +
        'who was presumed dead seven years earlier. The party escape Midgar and pursue Sephiroth across the Planet; ' +
        'along the way, they are joined by Cait Sith and Cid, and can recruit Yuffie and Vincent.',
        image: 'http://www.3djuegos.com/juegos/4309/final_fantasy_vii/fotos/ficha/final_fantasy_vii-1713600.jpg'
      }, {
        id: 2,
        name: 'Final Fantasy XV',
        description: 'In Lucis, Noctis and his friends Gladiolus, Ignis and Prompto ' +
        'are en route to Accordo\'s capital city of Altissia, where Noctis\'s wedding to Lunafreya is to take place. ' +
        'Along the way, they receive news of the empire\'s attack on Insomnia and theft of ' +
        'the Crystal, and that Noctis\'s father King Regis has been assassinated.',
        image: 'http://media.ultimagame.com/final-fantasy-xv/imagen-i9010-pge.jpg'
      }, {
        id: 3,
        name: 'Uncharted 4: A Thief\'s End',
        description: 'Years before the events of Uncharted: Drake\'s Fortune,' +
        'brothers Nate and Sam Drake are hunting the treasure of infamous pirate Henry Avery, ' +
        'who plundered $400 million during the 1695 Gunsway Heist. ' +
        'Alongside their financier Rafe Adler, ' +
        'the Drakes infiltrate a Panamanian jail to access the cell once held by Avery\'s first mate, Burnes, ' +
        'where Nate discovers a hollow St. Dismas idol. During their escape, Sam is seemingly ' +
        'killed by pursuing guards, causing Nate to abandon the quest.',
        image: 'http://img1.meristation.com/files/imagenes/general/910bfmlqqjl._sl1500_.jpg'
      }
    ];
  }
}
