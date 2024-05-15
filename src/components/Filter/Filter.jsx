// Filter.jsx
import PropTypes from 'prop-types';
import css from './Filter.module.css';

// Składnik filtrujący do wyszukiwania kontaktów według nazwy.
export const Filter = ({ filter, onChangeInput }) => {
  return (
    <>
      <label>
        Find contacts by name
        <br />
        <input
          className={css.inputContacts}
          onChange={onChangeInput}
          value={filter}
          type="text"
          name="filter"
        />
      </label>
    </>
  );
};

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChangeInput: PropTypes.func.isRequired,
};
