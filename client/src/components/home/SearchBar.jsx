import { searchByName } from "../../actions";
import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";

const Img = styled.img`
  width: 20px;
  height: auto;
`;

const Button = styled.button`
  border-radius: 50%;
  padding: 0.5rem;
`;

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
      <Button type="submit" onClick={handleSearch}>
        <Img
          src="https://cdn-icons-png.flaticon.com/128/694/694985.png"
          alt="search"
        />
      </Button>
    </div>
  );
}

export default SearchBar;
