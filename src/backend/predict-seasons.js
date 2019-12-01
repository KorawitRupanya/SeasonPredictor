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

// Start the server
app.listen(3000, () => {
  console.log('Go to http://localhost:3000/khonKaen/winter/2018 to see posts');
});
