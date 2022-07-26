import styled from "styled-components";

const UlTag = styled.ul`
  display: inline;
  padding: 0;
`;

const LiTag = styled.li`
  color: ${(props) => (props.color ? "white" : "black")};
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  list-style: none;
  border-radius: 0.3rem;
  border: 1px solid gray;
  cursor: pointer;
  background-color: ${(props) => (props.color ? "black" : "none")};
`;

const Img = styled.img`
  width: 10px;
  height: 10px;
`;

const DivTag = styled.div`
  margin: 1rem;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

function Paginated({
  countriesPage,
  totalCountries,
  pagine,
  currentPage,
  nextHandler,
  prevHandler,
  firstHandler,
  lastHandler,
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
    <DivTag>
      {currentPage > 1 && (
        <button onClick={() => firstHandler()}>Primera</button>
      )}
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
            <a onClick={() => pagine(number)}>
              <LiTag key={index} color={number === currentPage}>
                {number}
              </LiTag>
            </a>
          ))}
      </UlTag>
      {currentPage !== totalPages && (
        <button onClick={() => nextHandler()}>Next</button>
      )}
      {currentPage !== totalPages && (
        <button onClick={() => lastHandler()}>Ultima</button>
      )}
    </DivTag>
  );
}

export default Paginated;
