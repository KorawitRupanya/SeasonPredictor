const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');
const bkkSun = require('./bangkok-sun');

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

/****** */

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
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/bangkok/2017/January to see posts');
});
