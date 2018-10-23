import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'
let user = sequelize.define('tb_projects', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  ownerId: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  parentId: {
    type: Sequelize.INTEGER,
    defaultValue: "none",
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  type: {
    type: Sequelize.STRING(32),
    allowNull: true
  },
  descript: {
    type: Sequelize.STRING(100),
    allowNull: true
  },
  descriptionMD: {
    type: Sequelize.TEXT('long'),
    allowNull: true,
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
  status: {
    type: Sequelize.STRING(8),
    defaultValue: '0',
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
});
export default user
