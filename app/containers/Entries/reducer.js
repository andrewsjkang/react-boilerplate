// Entries reducer

import { fromJS } from 'immutable';

// Preload data
// import preload from '../../data.json';

export const entriesInitialState = fromJS({
  entries: [
    {
      id: 1,
      date: '2018-09-28',
      todo: 'first message',
    },
    {
      id: 2,
      date: '2018-09-29',
      todo: 'second message',
    },
  ],
});

// export const entriesInitialState = {
//   entries: ['foo', 'bar'],
// };

// const entriesReducer = (
//   state = [
//     {
//       id: 1,
//       date: '2018-09-28',
//       todo: 'first message',
//     },
//     {
//       id: 2,
//       date: '2018-09-29',
//       todo: 'second message',
//     },
//   ],
//   action,
// ) => {
//   switch (action.type) {
//     default:
//       return state;
//   }
// };

function entriesReducer(state = entriesInitialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default entriesReducer;
