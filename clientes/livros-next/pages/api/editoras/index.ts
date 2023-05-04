import ControleEditora from '@/classes/controle/ControleEditora';
import Editora from '@/classes/modelo/Editora';
import type { NextApiRequest, NextApiResponse } from 'next';

export const controleEditora = new ControleEditora();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Editora[]>| any
) {
  try {
    if (req.method === 'GET') {
      const editoras = await controleEditora.getEditoras();
      res.status(200).json(editoras);
    } else {
      res.status(405).json({ message: `Método ${req.method} não permitido.` })
    }
  } catch (error) {
    res.status(500).json({ message: `Erro interno do servidor`});
  }
}
