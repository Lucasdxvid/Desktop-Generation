import { Link } from "react-router-dom";

const CategoriesDiv = () => {
  return (
    <>
      <ul className="catUl">
      <Link to="/">
          <li className="catLi">
            <label className="catLab">Todo</label>
          </li>
        </Link>
        <Link to="/category/1">
          <li className="catLi">
            <label className="catLab">Componentes</label>
          </li>
        </Link>
        <Link to="/category/2">
          <li className="catLi">
            <label className="catLab">Accesorios</label>
          </li>
        </Link>
        <Link to="/category/3">
          <li className="catLi">
            <label className="catLab">Equipos</label>
          </li>
        </Link>
        <Link to="/category/4">
          <li className="catLi">
            <label className="catLab">Otros</label>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default CategoriesDiv;
