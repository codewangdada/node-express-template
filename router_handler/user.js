const db = require("../db/index");

exports.login = (req, res) => {
  const data = req.body;
  const sql = "insert into bk_user set ?";

  db.query(sql, data, (err, result) => {
    if (err) {
      res.send({
        status: 1,
        message: "失败",
      });
      return;
    }
    if (result.affectedRows !== 1) {
      res.send({
        status: 1,
        message: "失败",
      });
      return;
    }
    res.send({
      status: 0,
      message: "成功",
    });
  });
};

exports.getList = (req, res) => {
  let sql = `select count (*) as count from bk_user;select * from bk_user`;

  if (req.query.currentPage) {
    const currentPage = parseInt(req.query.currentPage);
    const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 10;
    const offset = (currentPage - 1) * pageSize;
    sql += ` limit ${offset},${pageSize}`;
  }

  db.query(sql, (err, results) => {
    if (err) {
      res.send({
        status: 1,
        message: "失败",
      });
      return;
    }
    const { count } = results[0][0];
    const list = results[1];
    res.send({
      status: 0,
      message: "获取列表成功！",
      data: {
        count,
        list,
      },
    });
  });
};
