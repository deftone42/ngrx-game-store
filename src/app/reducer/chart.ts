import { Action } from '@ngrx/store';
import * as _ from 'lodash';

import { Game } from '../model/game.model';

export const ADD = 'ADD';
export const DELETE = 'DELETE';
export const RESET = 'RESET';

export function chartReducer(state: Array<Game> = [], action: Action) {
  const game: Game = action.payload;

  switch (action.type) {
    case RESET:
      state = [];
      return state;

    case ADD:
      return state.concat(game);

    case DELETE:
      return _.filter(state, (obj: Game) => {
        return obj.id !== game.id;
      });

    default:
      return state;
  }
}
