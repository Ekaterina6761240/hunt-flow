const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Candidate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate({ Profession, Status }) {
      this.belongsTo(Profession, { foreignKey: 'prof_id' });
      this.belongsTo(Status, { foreignKey: 'status_id' });
      // define association here
    }
  }
  Candidate.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      second_name: DataTypes.STRING,
      age: DataTypes.STRING,
      img: DataTypes.STRING,
      pdf: DataTypes.STRING,
      comments: DataTypes.TEXT,
      phone: DataTypes.STRING,
      skills: DataTypes.TEXT,
      prof_id: DataTypes.INTEGER,
      status_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'Candidate',
    },
  );
  return Candidate;
};
