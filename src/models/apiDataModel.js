import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'
let user = sequelize.define('tb_apiData', {
  id: {
    type: Sequelize.STRING(64),
    primaryKey: true,
    allowNull: true
  },
  projectId: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(80),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  address: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  paramIn: {
    type: Sequelize.TEXT('long'),
    allowNull: true,
  },
  paramOut: {
    type: Sequelize.TEXT('long'),
    allowNull: true,
  },
  status: {
    type: Sequelize.STRING(10),
    allowNull: true
  },
  editor: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  version: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  createTime: {
    type: Sequelize.DATE,
    defaultValue:Sequelize.NOW,
    allowNull: false
  },
  updateTime: {
    type: Sequelize.DATE,
    defaultValue:Sequelize.NOW,
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
});
export default user
