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
  const getNavStr = `SELECT * FROM navlist`;

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
  route.post('/api/getJobDetail', (req, res) => {
    let num = req.query.num;
    // const imagesStr = `select image_url from product_image where product_id='${produId}'`;
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

  });

  //商品表单查询
 /* const getCommodityStr = `SELECT commodity_id,commodity_name,commodity_price,commodity_sort,commodity_norm,commodity_unit,commodity_shelf_life,commodity_purchase_notes,commodity_quantity FROM commodity`;
  route.get('/index/commodityPage', (req, res) => {
    getCommodityDatas(getCommodityStr, res);
  });
  function getCommodityDatas(getCommodityStr, res) {
    db.query(getCommodityStr, (err, data) => {
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

  //购物车减少商品
  route.delete('/index/delete', (req, res) => {
    let id = req.body.id;
    let quantity = req.body.quantity;
    console.log(quantity);
    const  sql=`delete from commodity(commodity_quantity) where values('${id}','${quantity}')`;
    deleteInfo(sql, res);
  });
  function deleteInfo(sql, res) {
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


  //购物车增加商品
  route.get('/index/add', (req, res) => {
    let name = req.query.name;
    const  sql=`insert into commodity(commodity_name) values('${name}')`;
    addInfo(sql, res);
  });
  function addInfo(sql, res){
    db.query(sql, (err, data) => {
      if (err) {
        console.log(err);
        res.status(500).send('database err').end();
      } else {
        res.send("ok");
      }
    });
  }



  //动态获取商家页面
  route.get('/category', (req, res) => {
    getCateNamesDatas(getCateNames, res);
  });

  function getCateNamesDatas(getCateNames, res) {
    db.query(getCateNames, (err, data) => {
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
  };
  route.get('/categorygoods', (req, res) => {
    let mId = req.query.mId;
    const sql = `select * from store where store.store_id='${mId}'`;
    getCateGoods(sql, res);
  });
  function getCateGoods(sql, res) {
    db.query(sql, (err, data) => {
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

  route.get('/storeDetail', (req, res) => {
    let storeId = req.query.mId;
    // const imagesStr = `select image_url from product_image where product_id='${produId}'`;
    const storeStr = `select * from store where store_id='${storeId}'`;
    // let storeDetailDatas = [];
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

  return route;
}
