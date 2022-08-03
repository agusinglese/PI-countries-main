import styled from "styled-components";

const UlTag = styled.ul`
  display: inline;
  padding: 0;
  margin: 0 1rem;
`;

const LiTag = styled.li`
  color: ${(props) => props.color};
  float: left;
  padding: 8px 16px;
  text-decoration: none;
  list-style: none;
  border-radius: 0.5rem;
  cursor: pointer;
  background-color: ${(props) => props.bgcolor};
  border: 1px solid gray;
`;

const Buttons = styled.button`
  background-color: #e9d8a6;
  border: 1px solid gray;
  box-shadow: none;
  padding: 8px 16px;
  margin: 0 0.3rem;
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
        <Buttons onClick={() => firstHandler()}>&lt;&lt;</Buttons>
      )}
      {currentPage > 1 && <Buttons onClick={() => prevHandler()}>&lt;</Buttons>}

      <UlTag>
        {visibleNumbers &&
          visibleNumbers.map((number, index) => (
            // eslint-disable-next-line jsx-a11y/anchor-is-valid
            <a onClick={() => pagine(number)}>
              <LiTag
                key={index}
                bgcolor={number === currentPage ? "#E74C3C" : "#e9d8a6"}
                color={number === currentPage ? "whitesmoke" : "black"}
              >
                {number}
              </LiTag>
            </a>
          ))}
      </UlTag>
      {currentPage !== totalPages && (
        <Buttons onClick={() => nextHandler()}>&gt;</Buttons>
      )}
      {currentPage !== totalPages && (
        <Buttons onClick={() => lastHandler(totalPages)}>&gt;&gt;</Buttons>
      )}
    </DivTag>
  );
}

export default Paginated;
