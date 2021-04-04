import { combineReducers } from 'redux';
import { createReducer } from '@reduxjs/toolkit';
import * as actions from './contacts-actions';

const getContact = (state, payload) => {
  const verificationContact = state.find(
    contact => contact.name === payload.name,
  );

  if (verificationContact) {
    alert(`${payload.name} is already in contacts`);
  } else {
    return [...state, payload];
  }
};

const items = createReducer([], {
  [actions.addContact]: (state, { payload }) => getContact(state, payload),
  [actions.deleteContact]: (state, { payload }) =>
    state.filter(contact => contact.id !== payload),
});

const filter = createReducer('', {
  [actions.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
