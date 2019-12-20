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

app.get('/chiangmai/2017/January', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/February', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/March', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/April', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/May', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/June', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/July', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/August', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/September', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/October', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/November', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/December', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/January', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/February', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/March', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/April', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/May', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/June', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/July', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/August', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/September', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/October', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/November', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/December', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/January', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/February', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/March', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/April', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/May', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/June', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/July', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/August', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/September', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/October', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/November', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/December', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.tempMax, chiangMai.tempAvg, chiangMai.tempMin FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

// Start the server
app.listen(3000, () => {
  console.log(
    'Go to http://localhost:3000/chiangMai/2017/January to see posts',
  );
});
