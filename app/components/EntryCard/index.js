import React from 'react';
import { shape, string, number } from 'prop-types';

const EntryCard = props => (
  <div>
    <h2>{props.entry.date}</h2>
    <h2>{props.entry.todo}</h2>
  </div>
);

EntryCard.propTypes = {
  entry: shape({
    id: number,
    date: string,
    todo: string,
  }),
};

export default EntryCard;
