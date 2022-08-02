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
          src="https://cdn-icons.flaticon.com/png/128/3249/premium/3249897.png?token=exp=1658973231~hmac=9c04370eb1de4b6bb3b245cd7a01baa0"
          alt="search"
        />
      </Button>
    </div>
  );
}

export default SearchBar;
