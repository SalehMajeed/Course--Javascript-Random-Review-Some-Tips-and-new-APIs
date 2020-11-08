// eg1
// function divide(a, b) {
//     return new Promise(function (resolve, reject) {
//         if (b == 0) {
//             reject(new Error('You cannot divide by 0'));
//             return;
//         }
//         resolve(a / b);
//     });
// }

// divide(10, 0)
//     .then(function (result) {
//         console.log(`Division Success: ${result}`);
//     })
//     .catch(function (error) {
//         console.log(`There was an error wht the division`);
//         console.log(error);
//     });

// eg2
// function wait(ms) {
//     return new Promise(function (resolve, reject) {
//         if (ms <= 0) {
//             reject(new Error('Can not wait 0 seconds or less than 0'));
//         }

//         setTimeout(function () {
//             resolve();
//         }, ms);
//     });
// }
// wait(1000)
//     .then(function () {
//         console.log('We have been waited for 1 second');
//     })
//     .catch(function (err) {
//         console.log(err);
//     });

// eg3
// const mysql = require('mysql');

// function connect_to_database(config) {
//     return new Promise(function (resolve, reject) {
//         const connection = mysql.createConnection(config);

//         connection.connect(function (err) {
//             if (err) {
//                 reject(err)
//                 return;
//             }

//             resolve(connection)
//     });
// }

// connect_to_database({
//     host:'localhost',
//     user:'root',
//     password:'',
//     database:'chatroom'
// }).then(function (conn){
//     console.log('successful')
//     conn.end();
// }).catch(function(err){
//     console.log(err)
// })
