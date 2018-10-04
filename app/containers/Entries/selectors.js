import { createSelector } from 'reselect';
import { entriesInitialState } from './reducer';

const selectEntries = state => state.get('entries', entriesInitialState);

const makeSelectEntries = () =>
  createSelector(selectEntries, entriesState =>
    entriesState.get('entries').toJS(),
  );

export { selectEntries, makeSelectEntries };
