const { Turma } = require('../Models/Turma')
const { Aluno } = require('../Models/Aluno')


const show = async (req, res) => {
  const turma = await Turma.findAll({
    attributes: [
      'id',
      'nome'
    ],
    order: [['id', 'DESC'], [Aluno, 'id', 'DESC']],
    include: {
      model: Aluno,
      attributes: ['nome', 'matricula']
    }
  })
  return res.json(turma)
}

const showOne = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ errors: ['Missing ID'] });

    const turma = await Turma.findByPk(id, {
      attributes: [
        'id',
        'nome',
      ],
      order: [['id', 'DESC'], [Aluno, 'id', 'DESC']],
      include: {
        model: Aluno,
        attributes: ['matricula', 'nome'],
      },
    });

    if (!turma) return res.status(404).json({ errors: ['Not Found'] });

    return res.json({ turma });
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map((err) => err.message) });
  }
}

const create = async (req, res) => {
  try {
    const turma = await Turma.create(req.body);

    return res.json({ turma });
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map((err) => err.message) });
  }
}

const deletar = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ errors: ['Missing ID'] });

    const turma = await Turma.findByPk(id);

    if (!turma) return res.status(404).json({ errors: ['Not Found'] });

    await turma.destroy();
    return res.json('Turma removida da base de dados');
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map((err) => err.message) });
  }
}

const update = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id) return res.status(400).json({ errors: ['Missing ID'] });

    const turma = await Turma.findByPk(id);

    if (!turma) return res.status(404).json({ errors: ['Not Found'] });

    const novaTurma = await turma.update(req.body);

    return res.json({ novaTurma });
  } catch (e) {
    return res.status(400).json({ errors: e.errors.map((err) => err.message) });
  }
}


module.exports = {
  show,
  create,
  deletar,
  update,
  showOne
}