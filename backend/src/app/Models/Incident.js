const Sequelize = require('sequelize');

const { Model } = Sequelize;

class Incident extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        value: Sequelize.FLOAT,
      },
      {
        sequelize,
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Ong, { foreignKey: 'ong_id', as: 'ong' });
  }
}

module.exports = Incident;
