import React from 'react';
import { array } from 'prop-types';
import EntryCard from '../../components/EntryCard/index';

const Entries = props => (
  <div>
    <h1>Entries</h1>
    {props.entries
      // .filter(
      //   show =>
      //     `${show.date} ${show.todo}`
      //       .toUpperCase()
      //       .indexOf(props.searchTerm.toUpperCase()) >= 0,
      // )
      .map(entry => <EntryCard key={entry.id} entry={entry} />)}
  </div>
);

Entries.propTypes = {
  entries: array,
};

export default Entries;
