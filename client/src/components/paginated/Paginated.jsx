import styled from "styled-components";

const UlTag = styled.ul`
  display: inline-block;
  padding: 0;
  margin: 0;
`;

const LiTag = styled.li`
  display: inline;
  color: black;
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  list-style: none;
  border-radius: 0.3rem;
  background-color: ${(props) => (props.activeClass ? "black" : "none")};
`;

const Img = styled.img`
  width: 10px;
  height: 10px;
`;

function Paginated({
  countriesPage,
  totalCountries,
  pagine,
  currentPage,
  nextHandler,
  prevHandler,
}) {
  let pageNumbers = [];
  let totalPages = Math.ceil(totalCountries / countriesPage);

  for (let i = 1; i < totalPages + 1; i++) {
    pageNumbers.push(i);
  }

  const visibleNumbers = pageNumbers.filter(
    (e) => e === currentPage - 1 || e === currentPage || e === currentPage + 1
  );

  return (
    <>
      {currentPage > 1 && (
        <button onClick={() => prevHandler()}>
          <Img
            src="https://cdn-icons-png.flaticon.com/128/7180/7180250.png"
            alt="prev"
          />
        </button>
      )}

      <UlTag>
        {visibleNumbers &&
          visibleNumbers.map((number, index) => (
            <LiTag key={index}>
              <a onClick={() => pagine(number)}>{number}</a>
            </LiTag>
          ))}
      </UlTag>
      {currentPage !== totalPages && (
        <button onClick={() => nextHandler()}>>></button>
      )}
    </>
  );
}

export default Paginated;
