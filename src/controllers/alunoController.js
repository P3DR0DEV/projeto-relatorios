const { Aluno } = require('../Models/Aluno')
const { Foto } = require('../Models/Foto')
const { Turma } = require('../Models/Turma')

const show = async (req, res) => {
  const alunos = await Aluno.findAll({
    attributes: [
      'id',
      'nome',
      'matricula',
    ],
    order: [['id', 'DESC'], [Turma, 'id', 'DESC']],
    include: {
      model: [Turma],
      attributes: ['nome'],
    }
  });
  res.json(alunos);
}

const create = async (req, res) => {
  try {
    const aluno = await Aluno.create(req.body);

    return res.json({ aluno });
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map((err) => err.message) });
  }
}

const deletar = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ errors: ['Missing ID'] });

    const aluno = await Aluno.findByPk(id);

    if (!aluno) return res.status(404).json({ errors: ['Not Found'] });

    await aluno.destroy();
    return res.json('Aluno removido da base de dados');
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map((err) => err.message) });
  }
}


module.exports = {
  show,
  create,
  deletar
}