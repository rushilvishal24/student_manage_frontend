function SearchBar({ value, onChange, placeholder = 'Search...' }) {
  return (
    <input
      type="text"
      className="form-control"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}

export default SearchBar;
