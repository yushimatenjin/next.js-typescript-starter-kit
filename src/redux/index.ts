import {reducer as persist, PersistState} from './persist'
import {reducer as system, SystemState} from './system'
import { persistCombineReducers } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const config = {
  key: 'primary',
  storage
}

export const reducer = persistCombineReducers<RootState>(config,{
  persist,
  system,
})

export interface RootState {
  persist: PersistState,
  system: SystemState,
}
