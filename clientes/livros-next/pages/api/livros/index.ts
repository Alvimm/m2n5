import ControleLivro from '@/classes/controle/ControleLivros';
import Livro from '@/classes/modelo/Editora';
import type { NextApiRequest, NextApiResponse } from 'next';

export const controleLivro = new ControleLivro();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Livro[]> | any
) {
  try {
    if (req.method === 'GET') {
      const livros = await controleLivro.obterLivros();
      res.status(200).json(livros);
    } else if (req.method === 'POST') {
      await controleLivro.incluir(req.body);
      res.status(201).json({ message: 'Livro adicionado com sucesso.' });
    } else {
      res.status(405).json({ message: `Método ${req.method} não permitido.` });
    }
  } catch (error) {
    res.status(500).json({ message: 'Erro interno do servidor' });
  }
}
