import { Menu } from '@/componentes/Menu';
import type { NextPage } from 'next';
import  {useState, ChangeEvent, FormEvent} from 'react';
import { useRouter } from 'next/router';
import ControleEditora from '@/classes/controle/ControleEditora';
import Head from 'next/head';
import ControleLivro from '@/classes/controle/ControleLivros';

const controleEditora = new ControleEditora();

const controleLivros = new ControleLivro()

const LivroDados: NextPage = () => {
  const opcoes = controleEditora.getEditoras().map((editora) => ({
    value: editora.codEditora,
    text: editora.nome,
  }));
  const [titulo, setTitulo] = useState('');
  const [resumo, setResumo] = useState('');
  const [autores, setAutores] = useState('');
  const [codEditora, setCodEditora] = useState(opcoes[0].value);
  const router = useRouter();
  const tratarCombo = (evento:ChangeEvent<HTMLSelectElement>) => setCodEditora(Number(evento.target.value));

  const incluir = (e:FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const livro = {
      codigo: '',
      titulo: titulo,
      resumo: resumo,
      codEditora: codEditora,
      autores: autores.split('\n'),
    };

     controleLivros.incluir(livro).then(()=>{
       router.push('/LivroLista');
     })
   
  };

  return (
    <>
      <Menu />

      <Head>
          <title>Loja Next</title>
          <meta name="description" content="Generated by create next app" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
        </Head>
      <main className="container">
      <h1 className="my-3">Dados do Livro</h1>
      <form onSubmit={incluir}>
        <div>
          <label htmlFor="titulo" className="form-label">
            Título
          </label>
          <input
            type="text"
            id="titulo"
            value={titulo}
            className="form-control"
            onChange={e => setTitulo(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="resumo" className="form-label mt-3">
            Resumo
          </label>
          <textarea
            className="form-control"
            id="resumo"
            value={resumo}
            onChange={e => setResumo(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="codEditora" className="form-label mt-3">
            Editora
          </label>
          <select className="form-select" value={codEditora} id="codEditora" onChange={tratarCombo}>
            {opcoes.map(opcao =>(
              <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="autores" className="form-label mt-3">
            Autores (1 por linha)
          </label>
          <textarea
            className="form-control"
            id="autores"
            value={autores}
            onChange={e => setAutores(e.target.value)}
            required
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary px-3 mt-3">
          Salvar Dados
        </button>
      </form>
      </main>
    </>
  );
};

export default LivroDados;
