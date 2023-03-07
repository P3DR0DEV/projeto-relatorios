const Sequelize = require('sequelize');

class Turma extends Sequelize.Model {
  static init(sequelize) {
    super.init({
      nome: {
        type: Sequelize.STRING,
        defaultValue: '',
        validate: {
          len: {
            args: [3, 255],
            msg: 'Nome precisa ter entre 3 e 255 caracteres',
          },
        },
      }
    }, {
      sequelize,
    })
    return this
  }
  static associate(models) {
    this.hasMany(models.Aluno, { foreignKey: 'turma_id' });
  }
}


module.exports = {
  Turma
}