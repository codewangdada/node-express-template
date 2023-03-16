# Introduce
- 本项目是node+express+mysql基础模板项目，包括基础get,post请求等
# Install
`npm install`

# Quick Start
```
/db/index.js
// 创建数据库连接对象
const db = mysql.createPool({
  host: '', // 你的主机地址
  port: '3306',
  user: 'root',
  password: '', // 数据库密码
  database: '', // 数据库名
  multipleStatements: true // 多sql语句操作
})
```

## Run
- nodemon app.js