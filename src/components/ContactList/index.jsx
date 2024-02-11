import React, { Component } from 'react';
import styles from './ContactList.module.css';

class ContactList extends Component {
  render() {
    const { filteredContacts, onDeleteContact } = this.props;
    return (
      <ul className={styles.list}>
        {filteredContacts.map(({ name, number, id }) => (
          <li className={styles.item} key={id}>
            <p>
              {name}: {number}
            </p>
            <button
              className={styles.button}
              onClick={() => onDeleteContact(id)}
              type="button"
            >
              delete
            </button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ContactList;
