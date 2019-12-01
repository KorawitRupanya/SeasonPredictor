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

app.get('/bangkok/summer/2017', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2017 AND ((bangkok.month = "February" AND bangkok.date >= 15 AND bangkok.tempDiff > 5) OR (bangkok.month = "March" AND bangkok.tempDiff > 5) OR (bangkok.month = "April" AND bangkok.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/summer/2018', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2018 AND ((bangkok.month = "February" AND bangkok.date >= 15 AND bangkok.tempDiff > 5) OR (bangkok.month = "March" AND bangkok.tempDiff > 5) OR (bangkok.month = "April" AND bangkok.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/summer/2019', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2019 AND ((bangkok.month = "February" AND bangkok.date >= 15 AND bangkok.tempDiff > 5) OR (bangkok.month = "March" AND bangkok.tempDiff > 5) OR (bangkok.month = "April" AND bangkok.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/rainy/2017', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2017 AND bangkok.month = "June" AND bangkok.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/rainy/2018', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2018 AND bangkok.month = "June" AND bangkok.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/rainy/2019', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2019 AND bangkok.month = "June" AND bangkok.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/winter/2017', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2017 AND ((bangkok.month = "October" AND bangkok.date >= 15 AND bangkok.tempDiff < -4.9) OR (bangkok.month = "November" AND bangkok.tempDiff < -4.9) OR (bangkok.month = "December" AND bangkok.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/winter/2018', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2018 AND ((bangkok.month = "October" AND bangkok.date >= 15 AND bangkok.tempDiff < -4.9) OR (bangkok.month = "November" AND bangkok.tempDiff < -4.9) OR (bangkok.month = "December" AND bangkok.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/bangkok/winter/2019', function(req, res) {
  connection.query(
    'SELECT year, date, bangkok.month AS month FROM bangkok WHERE bangkok.year = 2019 AND ((bangkok.month = "October" AND bangkok.date >= 15 AND bangkok.tempDiff < -4.9) OR (bangkok.month = "November" AND bangkok.tempDiff < -4.9) OR (bangkok.month = "December" AND bangkok.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/summer/2017', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2017 AND ((khonKaen.month = "February" AND khonKaen.date >= 15 AND khonKaen.tempDiff > 5) OR (khonKaen.month = "March" AND khonKaen.tempDiff > 5) OR (khonKaen.month = "April" AND khonKaen.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/summer/2018', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2018 AND ((khonKaen.month = "February" AND khonKaen.date >= 15 AND khonKaen.tempDiff > 5) OR (khonKaen.month = "March" AND khonKaen.tempDiff > 5) OR (khonKaen.month = "April" AND khonKaen.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/summer/2019', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2019 AND ((khonKaen.month = "February" AND khonKaen.date >= 15 AND khonKaen.tempDiff > 5) OR (khonKaen.month = "March" AND khonKaen.tempDiff > 5) OR (khonKaen.month = "April" AND khonKaen.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/rainy/2017', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "June" AND khonKaen.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/rainy/2018', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "June" AND khonKaen.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/rainy/2019', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "June" AND khonKaen.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/winter/2017', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2017 AND ((khonKaen.month = "October" AND khonKaen.date >= 15 AND khonKaen.tempDiff < -4.9) OR (khonKaen.month = "November" AND khonKaen.tempDiff < -4.9) OR (khonKaen.month = "December" AND khonKaen.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/winter/2018', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2018 AND ((khonKaen.month = "October" AND khonKaen.date >= 15 AND khonKaen.tempDiff < -4.9) OR (khonKaen.month = "November" AND khonKaen.tempDiff < -4.9) OR (khonKaen.month = "December" AND khonKaen.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/winter/2019', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month AS month FROM khonKaen WHERE khonKaen.year = 2019 AND ((khonKaen.month = "October" AND khonKaen.date >= 15 AND khonKaen.tempDiff < -4.9) OR (khonKaen.month = "November" AND khonKaen.tempDiff < -4.9) OR (khonKaen.month = "December" AND khonKaen.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/summer/2017', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2017 AND ((chiangMai.month = "February" AND chiangMai.date >= 15 AND chiangMai.tempDiff > 5) OR (chiangMai.month = "March" AND chiangMai.tempDiff > 5) OR (chiangMai.month = "April" AND chiangMai.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/summer/2018', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2018 AND ((chiangMai.month = "February" AND chiangMai.date >= 15 AND chiangMai.tempDiff > 5) OR (chiangMai.month = "March" AND chiangMai.tempDiff > 5) OR (chiangMai.month = "April" AND chiangMai.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/summer/2019', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2019 AND ((chiangMai.month = "February" AND chiangMai.date >= 15 AND chiangMai.tempDiff > 5) OR (chiangMai.month = "March" AND chiangMai.tempDiff > 5) OR (chiangMai.month = "April" AND chiangMai.tempDiff > 5)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/rainy/2017', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "June" AND chiangMai.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/rainy/2018', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "June" AND chiangMai.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/rainy/2019', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "June" AND chiangMai.difference = "< 1s" LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/winter/2017', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2017 AND ((chiangMai.month = "October" AND chiangMai.date >= 15 AND chiangMai.tempDiff < -4.9) OR (chiangMai.month = "November" AND chiangMai.tempDiff < -4.9) OR (chiangMai.month = "December" AND chiangMai.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/winter/2018', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2018 AND ((chiangMai.month = "October" AND chiangMai.date >= 15 AND chiangMai.tempDiff < -4.9) OR (chiangMai.month = "November" AND chiangMai.tempDiff < -4.9) OR (chiangMai.month = "December" AND chiangMai.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangMai/winter/2019', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month AS month FROM chiangMai WHERE chiangMai.year = 2019 AND ((chiangMai.month = "October" AND chiangMai.date >= 15 AND chiangMai.tempDiff < -4.9) OR (chiangMai.month = "November" AND chiangMai.tempDiff < -4.9) OR (chiangMai.month = "December" AND chiangMai.tempDiff < -4.9)) LIMIT 1',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
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

app.get('/chiangmai/2017/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2017/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2017 AND chiangMai.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2018/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2018 AND chiangMai.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/January/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/February/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/March/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/April/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/May/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/June/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/July/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/August/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/September/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/October/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/November/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/chiangmai/2019/December/sun', function(req, res) {
  connection.query(
    'SELECT year, date, chiangMai.month, chiangMai.sunrise, chiangMai.sunset, chiangMai.length, chiangMai.difference FROM chiangMai WHERE chiangMai.year = 2019 AND chiangMai.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

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

app.get('/khonkaen/2017/January', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/February', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/March', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/April', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/May', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/June', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/July', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/August', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/September', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/October', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/November', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2017/December', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2017 AND khonKaen.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/January', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/February', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/March', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/April', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/May', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/June', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/July', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/August', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/September', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/October', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/November', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2018/December', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2018 AND khonKaen.month = "December"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/January', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "January"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/February', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "February"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/March', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "March"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/April', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "April"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/May', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "May"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/June', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "June"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/July', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "July"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/August', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "August"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/September', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "September"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/October', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "October"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/November', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "November"',
    function(error, results, fields) {
      if (error) throw error;
      res.send(results);
    },
  );
});

app.get('/khonkaen/2019/December', function(req, res) {
  connection.query(
    'SELECT year, date, khonKaen.month, khonKaen.tempMax, khonKaen.tempAvg, khonKaen.tempMin FROM khonKaen WHERE khonKaen.year = 2019 AND khonKaen.month = "December"',
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
