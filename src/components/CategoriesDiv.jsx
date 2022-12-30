import { Link } from "react-router-dom";

const CategoriesDiv = () => {
  return (
    <>
      <ul className="noticiasCatUl">
      <Link to="/">
          <li className="noticiasCatLi">
            <label className="noticiasCatLab">Todo</label>
          </li>
        </Link>
        <Link to="/category/1">
          <li className="noticiasCatLi">
            <label className="noticiasCatLab">Componentes</label>
          </li>
        </Link>
        <Link to="/category/2">
          <li className="noticiasCatLi">
            <label className="noticiasCatLab">Accesorios</label>
          </li>
        </Link>
        <Link to="/category/3">
          <li className="noticiasCatLi">
            <label className="noticiasCatLab">Equipos</label>
          </li>
        </Link>
        <Link to="/category/4">
          <li className="noticiasCatLi">
            <label className="noticiasCatLab">Otros</label>
          </li>
        </Link>
      </ul>
    </>
  );
};

export default CategoriesDiv;
