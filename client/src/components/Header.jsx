import Toggle from "./Toggle";

function Header() {
  return (
    <div className="header">
      <div className="title">
        <h1>Countries App</h1>
      </div>
      <div>
        <Toggle />
      </div>
    </div>
  );
}

export default Header;
