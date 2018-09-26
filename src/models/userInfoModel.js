import sequelize from '../lib/sequelize'
import Sequelize from 'sequelize'
let user = sequelize.define('tb_userinfo', {
  id: {
    type: Sequelize.STRING(64),
    primaryKey: true,
    allowNull: false
  },
  loginAccount: {
    type: Sequelize.STRING(40),
    allowNull: false
  },
  name: {
    type: Sequelize.STRING(20),
    allowNull: false
  },
  mobile: {
    type: Sequelize.STRING(32),
    validate: {
      isEmail: true
    },
    allowNull: true
  },
  email: {
    type: Sequelize.STRING(64),
    allowNull: true
  },
  gender: {
    type: Sequelize.STRING(20),
    allowNull: true
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: true,
    validate: {
      max: {
        args: 100,
        msg: "age is larger"
      },
      min: {
        args: 1, // 不能为0
        msg: 'age is small'
      },
      customFunc(val){
        if(val===50){
          //error中的string就相当于min中的msg
          throw new Error('Only even values are allowed!')
        }
      }
    }
  },
  profilePicture: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  address: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  personalitySign: {
    type: Sequelize.BIGINT,
    allowNull: true
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
    allowNull: false
  },
}, {
  timestamps: false,
  freezeTableName: true
});
export default user
