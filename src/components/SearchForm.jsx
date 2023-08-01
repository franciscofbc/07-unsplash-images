import { useGlobalContext } from '../AppContext';

const SearchForm = () => {
  const { setSearchValue } = useGlobalContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const searchValue = e.target.elements.search.value;
    if (!searchValue) return;
    setSearchValue(searchValue);
  };

  return (
    <section>
      <h1 className="title">unsplash images</h1>
      <form onSubmit={handleSubmit} className="search-form">
        <input
          type="text"
          name="search"
          placeholder="cat"
          className="search-input form-input"
        />
        <button type="submit" className="btn">
          search
        </button>
      </form>
    </section>
  );
};

export default SearchForm;
