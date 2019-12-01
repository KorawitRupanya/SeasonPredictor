const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '158.108.34.31',
  user: 'b6010546915',
  password: 'sirarat.t@ku.th',
  database: 'b6010546915',
});

const app = express();

app.get('/bangkok/2017/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2017/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2018/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/2019/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month, bangkok.sunrise, bangkok.sunset, bangkok.length, bangkok.difference FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

// Start the server
// app.listen(3000, () => {
//   console.log(
//     'Go to http://localhost:3000/bangkok/2017/January/sun to see posts',
//   );
// });
