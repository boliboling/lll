const express = require('express');
const mysql = require('mysql');
const db = mysql.createPool({
   host: 'localhost',
   user: 'root',
   password: '123456',
   database: 'yaoyao'
});
module.exports = () => {
  const route = express.Router();
/*  const getNavStr = `SELECT * FROM navlist`;

  route.post('/api/getNavList', (req, res) => {
    getNavDatas(getNavStr, res);
  });
  function getNavDatas(getNavStr, res) {
    db.query(getNavStr, (err, data) => {
      if (err) {
        console.log('111'+err);
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data);
        }
      }
    });
  }
  //工作信息查询
   const getJobStr = `SELECT * FROM joblist`;

  route.post('/api/getJobList', (req, res) => {
    getJobDatas(getJobStr, res);
  });
  function getJobDatas(getJobStr, res) {
    db.query(getJobStr, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        if (data.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send(data);
        }
      }
    });
  }
  route.post('/api/getJobDetail', (req, res) => {
    let num = req.body.num;
    console.info(num);
    const storeStr = `select * from joblist where id='${num}'`;
    db.query(storeStr, (err, data) => {
      if (err) {
        console.error(err);
        res.status(500).send('database err').end();
      } else {
        // storeDetailDatas.push(data);
        res.send(data);
      }
    });

  });*/
//登录
  route.post('/api/login', (req, res) => {
    let name = req.body.username;
    let pass = req.body.password;
    console.log('11'+name);
    console.log('11'+pass);
    const  sql=`select * from userinfo where name='${name}' and pass='${pass}'`;
    goLogin(sql, res);
  });
  function goLogin(sql, res) {
    db.query(sql, (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        if (result.length == 0) {
          res.status(500).send('no datas').end();
        } else {
          res.send("yes");
        }
      }
    });
  }



  return route;
}
