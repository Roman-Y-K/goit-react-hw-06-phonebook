import React from 'react';
import shortid from 'shortid';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

const Filter = ({ filter, onChange }) => {
  const filterInputId = shortid.generate();
  return (
    <>
      <label htmlFor={filterInputId}>Find contact by name</label>
      <input
        className={styles.input}
        type="text"
        name="filter"
        value={filter}
        id={filterInputId}
        onChange={onChange}
      />
    </>
  );
};

const mapStateToProps = state => ({
  filter: state.contacts.filter,
});

const mapDispatchToProps = dispatch => ({
  onChange: e => dispatch(contactsActions.changeFilter(e.currentTarget.value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
