/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('alunos',
      {
        id: {
          type: Sequelize.INTEGER,
          allowNull: false,
          autoIncrement: true,
          primaryKey: true
        },
        nome: {
          type: Sequelize.STRING,
          allowNull: false,
        },
        matricula: {
          type: Sequelize.INTEGER,
          allowNull: false,
        },
        created_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        updated_at: {
          type: Sequelize.DATE,
          allowNull: false,
        },
        turma_id: {
          type: Sequelize.INTEGER,
          allowNull: true,
          references: {
            model: 'turmas',
            key: 'id',
          },
          onDelete: 'SET NULL', // ou 'CASCADE', para apagar junto
          onUpdate: 'CASCADE',
        }
      });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('alunos');
  }
};
