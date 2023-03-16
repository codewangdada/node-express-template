// 导入 mysql 模块
const mysql = require('mysql')

// 创建数据库连接对象
const db = mysql.createPool({
  host: '', // 你的主机地址
  port: '3306',
  user: 'root',
  password: '', // 数据库密码
  database: '', // 数据库名
  multipleStatements: true // 多sql语句操作
})

// 向外共享 db 数据库连接对象
module.exports = db