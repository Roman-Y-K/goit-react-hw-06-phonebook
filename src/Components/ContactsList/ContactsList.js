import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import { connect } from 'react-redux';
import * as contactsActions from '../../redux/contacts/contacts-actions';

const ContactsList = ({ contacts, onDelete }) => {
  return (
    <ul className={styles.list}>
      {contacts.map(contact => {
        return (
          <li className={styles.item} key={contact.id}>
            <span>{contact.name}:</span>
            <span> {contact.number}</span>
            <button
              className={styles.button}
              type="button"
              onClick={() => {
                onDelete(contact.id);
              }}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

const getVisibleContact = (contacts, filter) => {
  const nolmalizedFilter = filter.toLowerCase();

  return contacts.filter(contact =>
    contact.name.toLowerCase().includes(nolmalizedFilter),
  );
};

const mapStateToProps = ({ contacts: { items, filter } }) => ({
  contacts: getVisibleContact(items, filter),
});

const mapDispatchToProps = dispatch => ({
  onDelete: id => dispatch(contactsActions.deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);

ContactsList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDelete: PropTypes.func.isRequired,
};
