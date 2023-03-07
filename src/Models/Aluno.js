const Sequelize = require('sequelize');

class Aluno extends Sequelize.Model {
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
      },
      matricula: {
        type: Sequelize.INTEGER,
        defaultValue: '',
        validate: {
          isInt: {
            msg: 'Idade precisa ser um número inteiro',
          },
        },
      },
    }, {
      sequelize,
    })
    return this
  }
  static associate(models) {
    this.belongsTo(models.Turma, { foreignKey: 'turma_id' })
    this.hasMany(models.Foto, { foreignKey: 'aluno_id' });
  }
}


module.exports = {
  Aluno
}