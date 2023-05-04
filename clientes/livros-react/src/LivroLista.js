import { useState, useEffect } from 'react';
import ControleEditora from './controle/ControleEditora';
import ControleLivro from './controle/ControleLivros';

const controleLivro = new ControleLivro();
const controleEditora = new ControleEditora();

const LinhaLivro = (props) => {
  const { livro, excluir } = props;
  const nomeEditora = controleEditora.getNomeEditora(livro.codEditora);

  return (
    <tr className='table-light'>
      <td>
        <p>
        {livro.titulo} 
        </p>
        <button className='btn btn-danger' onClick={() => excluir(livro.codigo)}>Excluir</button>
        
      </td>
      <td >{livro.resumo}</td>
      <td>{nomeEditora}</td>
      <td>
        <ul>
          {livro.autores.map((autor, index) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
};

const LivroLista =() => {
  const [livros, setLivros] = useState([]);
  const [carregado, setCarregado] = useState(false);

  useEffect(()=>{
    controleLivro.obterLivros().then((resultado)=>{
      setLivros(resultado);
      setCarregado(true)
    })
  },[carregado])

  const excluir = async (codigo) => {
    await controleLivro.excluir(codigo).then(()=>{
      setCarregado(false);
    });
  };

  return (
    <main className='container'>
      <h1 className='my-3'>Catálogo de Livros</h1>
      <table className='table table-success table-striped'>
        <thead>
          <tr className=' table-dark'>
            <th>Título</th>
            <th>Resumo</th>
            <th>Editora</th>
            <th>Autores</th>
          </tr>
        </thead>
        <tbody>
          {livros.map((livro, index) => (
            <LinhaLivro
              key={index}
              livro={livro}
              excluir={excluir}
            />
          ))}
        </tbody>
      </table>
    </main>
  );
}

export default LivroLista
