const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const connection = mysql.createConnection({
  host: '158.108.34.31',
  user: 'b6010546915',
  password: 'sirarat.t@ku.th',
  database: 'b6010546915',
});

const app = express();

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.get('/bangkok/2017/January', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/February', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/March', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/April', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/May', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/June', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/July', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/August', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/September', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/October', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/November', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/December', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/January', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/February', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/March', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/April', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/May', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/June', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/July', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/August', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/September', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/October', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/November', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/December', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/January', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/February', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/March', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/April', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/May', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/June', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/July', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/August', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/September', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/October', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/November', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/December', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.tempMax, bangkok.tempAvg, bangkok.tempMin FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', '*');
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// };

// app.configure(function() {
//   app.use(allowCrossDomain);
//   //some other code
// });

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/bangkok/2017/January to see posts');
});

// var allowCrossDomain = function(req, res, next) {
//   res.header('Access-Control-Allow-Origin', "*");
//   res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
//   res.header('Access-Control-Allow-Headers', 'Content-Type');
//   next();
// };
