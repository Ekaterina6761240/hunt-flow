/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Candidates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        type: Sequelize.STRING,
      },
      email: {
        type: Sequelize.STRING,
      },
      second_name: {
        type: Sequelize.STRING,
      },
      age: {
        type: Sequelize.INTEGER,
      },
      img: {
        type: Sequelize.STRING,
      },
      pdf: {
        type: Sequelize.STRING,
      },
      comments: {
        type: Sequelize.TEXT,
      },
      phone: {
        type: Sequelize.STRING,
      },
      skills: {
        type: Sequelize.TEXT,
      },
      prof_id: {
        type: Sequelize.INTEGER,
        referenses: {
          model: 'Professions',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      status_id: {
        type: Sequelize.INTEGER,
        referenses: {
          model: 'Statuses',
          key: 'id',
        },
        onDelete: 'CASCADE',
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: Sequelize.fn('NOW'),
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Candidates');
  },
};
