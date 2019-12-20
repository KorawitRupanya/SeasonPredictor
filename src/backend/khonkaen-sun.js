const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: '',
});

const app = express();

app.get('/khonkaen/2017/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.sunrise, khonKaen.sunset, khonKaen.length, khonKaen.difference FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

// Start the server
app.listen(3000, () => {
  console.log(
    'Go to http://localhost:3000/khonkaen/2017/January/sun to see posts',
  );
});
