import { Routes, Route, Link } from 'react-router-dom';
import LivroLista from './LivroLista';
import LivroDados from './LivroDados';

function App() {
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark " data-bs-theme="dark">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Catálogo
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/dados" className="nav-link">
                Novo
              </Link>
            </li>
          </ul>
      </nav>
      <Routes>
        <Route path="/" element={<LivroLista />} />
        <Route path="/dados" element={<LivroDados />} />
      </Routes>
    </>
  );
}

export default App;
