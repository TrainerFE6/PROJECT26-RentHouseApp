let mysql = require('mysql');

let connection = mysql.createConnection({
  host: 'educalab.id',
  user: 'WfAjHThDptCwP8FA',
  password: 'VxqvThhECCDRVavr',
  database: 'Ckeoeq2LSZGLA110',
  port: 3307
});

connection.connect(function(err){
  if(!err) {
    console.log(err);
  } else {
    console.log('Terkonesi Dengan Databse!')
  }
});

module.exports = connection;