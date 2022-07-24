import { Link } from "react-router-dom";
import style from "./Error.module.css";
function Error() {
  return (
    <div className={style.error}>
      <h3 className={style.error}>Error 404</h3>
      <p className={style.error}>Page not found</p>
      <Link to="/">
        <button className={style.error}>Back to home page</button>
      </Link>
    </div>
  );
}

export default Error;
