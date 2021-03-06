import { all, takeLatest } from 'redux-saga/effects'

import { charactersActions } from '../store/characters'
import { characterDetailsActions } from '../store/characterDetails'

import { fetchCharacters, fetchCharactersByName } from './characters'
import { fetchCharacterSeries, fetchCharacterEvents } from './characterDetails'

export default function* root() {
  yield all([
    takeLatest(charactersActions.ui.request, fetchCharacters),
    takeLatest(charactersActions.ui.requestByName, fetchCharactersByName),
    takeLatest(characterDetailsActions.ui.requestSeries, fetchCharacterSeries),
    takeLatest(characterDetailsActions.ui.requestEvents, fetchCharacterEvents)
  ])
}
