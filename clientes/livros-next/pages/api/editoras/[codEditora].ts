import { NextApiRequest, NextApiResponse } from 'next';
import { controleEditora } from ".";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'GET') {
      const nomeEditora = await controleEditora.getNomeEditora(Number(req.query.codEditora));
      res.status(200).json({ nome: nomeEditora});
    } else {
      res.status(405).json({ message: `Método ${req.method} não permitido.` });
    }
  } catch (error) {
    res.status(500).json({ message: `Erro interno do servidor` });
  }
}
