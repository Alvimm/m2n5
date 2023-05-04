import { NextApiRequest, NextApiResponse } from 'next';
import { controleLivro } from ".";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'DELETE') {
      await controleLivro.excluir(Number(req.query.codigo));
      res.status(200).json('Livro excluído com sucesso.');
    } else {
      res.status(405).json({ message: `Método ${req.method} não permitido.` });
    }
  } catch (error) {
    res.status(500).json({ message: `Erro interno do servidor` });
  }
}
