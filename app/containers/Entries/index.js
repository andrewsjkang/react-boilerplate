import React from 'react';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { array } from 'prop-types';
import { createStructuredSelector } from 'reselect';
import injectReducer from 'utils/injectReducer';
import { makeSelectEntries } from './selectors';
import reducer from './reducer';
import EntryCard from '../../components/EntryCard/index';

const Entries = props => (
  <div>
    <h1>Entries</h1>
    {props.entries.map(entry => <EntryCard key={entry.id} entry={entry} />)}
  </div>
);

Entries.propTypes = {
  entries: array,
};

const mapStateToProps = createStructuredSelector({
  entries: makeSelectEntries(),
});

const withConnect = connect(mapStateToProps);
const withReducer = injectReducer({ key: 'entries', reducer });

export default compose(
  withReducer,
  withConnect,
)(Entries);
