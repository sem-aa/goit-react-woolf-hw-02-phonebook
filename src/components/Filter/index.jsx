import React, { Component } from 'react';
import styles from './Filter.module.css';

class Filter extends Component {
  render() {
    const { onChange } = this.props;
    return (
      <label>
        Search
        <input
          className={styles.input}
          type="text"
          name="filter"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          onChange={onChange}
          required
        />
      </label>
    );
  }
}

export default Filter;
