import { Action, State } from '@ngrx/store'
import * as TutorialActions from '../actions/tutorial.action'

export interface Tutorial {
  name: string;
  url: string;
}

/**初期状態 */
const initialState: Tutorial = {
  name: 'Initial Tutorial',
  url: 'http://google.com'
}

/**Reducer actipnによって変える */
export function reducer(state: Tutorial[] = [initialState], action: TutorialActions.Actions) {
  switch (action.type) {
    case TutorialActions.ADD_TUTORIAL:
      return [...state, action.payload];
    case TutorialActions.REMOVE_TUTORIAL:
      state.splice(action.payload, 1)
      return state;
    default:
      return state;
  }
}

/**
 * セレクタ（Storeから特定の状態を取得する）
 */
export const getName = (state: Tutorial) => state.name;
export const getUrl = (state: Tutorial) => state.url;