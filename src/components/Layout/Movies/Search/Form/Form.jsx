import css from './Form.module.css';

const Form = ({ handleSearch, value, handleChange }) => {
  return (
    <div className={css.movies}>
      <form className={css.form} onSubmit={handleSearch}>
        <input
          className={css.input}
          type="text"
          placeholder="Plese enter name of the movie"
          name="input"
          value={value}
          onChange={handleChange}
          autoComplete="off"
        ></input>
        <button className={css.button} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default Form;
