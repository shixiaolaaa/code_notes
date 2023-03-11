// 安装MySQL模块;
//npm install mysql;
//导入
const mysql = require('mysql');
//建立与数据库的连接;
const db = mysql.createPool({
    host: '127.0.0.1', //数据库的IP地址
    user: 'root', //账号
    password: 'admin123', //密码
    database: 'my_db_01'
});
//测试是否正常工作
db.query('SELECT 1', (err, result) => {
    if (err) {
        console.log(err.message)
    } else {
        console.log(result)
    }
});
//查询数据
db.query('select * from users', (err, res) => {
    if (err) return console.log(err.massage);
    console.log(res);
});
// //插入数据
// const user = { username: 'lgq', password: '1860042' }
// const mystr = 'insert into users (username,password) values(?,?)'
// db.query(mystr, [user.username, user.password], (err, res) => {
//     if (err) return console.log(err.message);
//     console.log('插入数据成功');
// });
// //插入数据快捷方法
// const user1 = {
//     username: 'zzl',
//     password: '173560'
// };
// const strql = 'insert into users set ?';
// db.query(strql, user1, (err, res) => {
//     if (err) return console.log(res.message);
//     console.log('插入数据成功');
// });
//------------------------------------------------------------------------
//跟新数据
// const newuser = {
//     id: 15,
//     username: 'ZZL',
//     password: 'asdfgh'
// };
// const sqstr = 'update users set username = ?,password = ? where id = ?';
// db.query(sqstr, [newuser.username, newuser.password, newuser.id], (err, result) => {
//     if (err) return console.log(err.message)
//     if (result.affectedRows === 1) {
//         console.log('跟新成功')
//     };
// });
//-------------------------------------------------------------------------------
//删除数据
// const sql = 'delete from users where id = ?'
// db.query(sql, 13, (err, res) => {
//     if (err) return console.log(err.message);
//     console.log('删除成功')
// });
//-------------------------------------------------------------
//为保险使用模拟删除，改变status的状态
db.query('update users set status = 1 where id = 15', (err, res) => {
    if (err) return console.log(err.message);
    if (res.affectedRows === 1) {
        console.log("模拟删除成功")
    }
})