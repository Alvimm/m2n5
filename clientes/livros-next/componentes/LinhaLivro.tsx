import ControleEditora from "@/classes/controle/ControleEditora";

interface Livro {
  codigo: string;
  titulo: string;
  resumo: string;
  codEditora: number;
  autores: string[];
}

interface LinhaLivroProps {
  livro: Livro;
  excluir: any; 
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
  const controleEditora = new ControleEditora();
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
          {livro.autores.map((autor:string, index:number) => (
            <li key={index}>{autor}</li>
          ))}
        </ul>
      </td>
    </tr>
  );

}
