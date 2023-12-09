import { Link } from "react-router-dom";
import "./style.css";

function Topo() {
  return (
    
      <header>
        <div className="limitar-secao">
          <img src="assets/logo.png" alt="Logomarca" />
          <nav>
            <Link className="link-topo" to="/">Home</Link>
            <Link className="link-topo" to="/Sabores">Sabores</Link>
            <Link className="link-topo" to="/Sobre">Sobre</Link>
          </nav>
        </div>
      </header>
    
  );
}
export default Topo;
