import { compose } from '@ngrx/core';
import { useLogMonitor } from '@ngrx/store-log-monitor';
import { combineReducers } from '@ngrx/store';

import { chartReducer } from './reducer/chart';

export function reducer() {
  return compose(combineReducers)({
    chart: chartReducer
  });
}

export function instrumentStore() {
  return {
    monitor: compose(useLogMonitor)({ visible: false, position: 'right' })
  };
}
