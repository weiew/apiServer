import Sequelize from 'sequelize'
import sequelize from '../lib/sequelize'
import saltMD5 from '../lib/saltMD5'
import {uuid} from '../lib/mainUtil'

/*type 字段数据类型(sequlize. …)
allowNull(是否允许为空true,false)
autoIncrement(自增, true ,false)
unique(唯一性, true,false, string)
comment (解释 说明)
primaryKey (对主键的设置, true,false)
defaultValue(默认值的设置)
field*/
let user = sequelize.define('tb_login', {
  id: {
    type: Sequelize.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  loginAccount: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  mobile: {
    type: Sequelize.STRING(32),
    allowNull: false
  },
  email: {
    type: Sequelize.STRING(64),
    isEmail: true,
    allowNull: true
  },
  loginId: {
    type: Sequelize.STRING(64),
    defaultValue:uuid.db32(),
    allowNull: false
  },
  password: {
    type: Sequelize.STRING(64),
    allowNull: false,
  },
  salt: {
    type: Sequelize.STRING(64),
    allowNull: false,
  }
}, {
  timestamps: false,
  freezeTableName: true
});
export default user
