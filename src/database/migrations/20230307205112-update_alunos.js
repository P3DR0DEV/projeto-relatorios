/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.addColumn('alunos', 'turma_id', {
      type: Sequelize.INTEGER,
      allowNull: true,
      references: {
        model: 'turmas',
        key: 'id',
      },
    }
    );
  }
};
