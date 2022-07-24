import { searchByName } from "../../actions";
import { useState } from "react";
import { useDispatch } from "react-redux";

function SearchBar({ setFilterActive }) {
  const [name, setName] = useState("");
  const dispatch = useDispatch();

  const handleChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleSearch = (event) => {
    event.preventDefault();
    dispatch(searchByName(name));
    setFilterActive(true);
    setName("");
  };

  return (
    <div>
      <input
        type="text"
        name="name"
        placeholder="Enter country name"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default SearchBar;
