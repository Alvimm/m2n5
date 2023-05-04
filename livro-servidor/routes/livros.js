const livroDao = require('../modelo/livro-dao')

let express = require('express');
let router = express.Router();

router.get('/', async(req, res)=>{
    const livros = await livroDao.obterLivros()
    res.json(livros)
});

router.post('/', async(req, res)=>{
    const livro = req.body
    const resultado = await livroDao.incluir(livro)
    res.json({mensagem: resultado?'Livro incluído com sucesso!' : 'Falha ao incluir o livro'})
})
router.delete('/:id', async(req, res)=>{
    const id = req.params.id
    const resultado = await livroDao.excluir(id)
    res.json({ mensagem: resultado ? 'Livro excluído com sucesso' : 'Falha ao excluir livro' })
})
  
  module.exports = router;