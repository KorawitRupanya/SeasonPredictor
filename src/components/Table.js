import React, { useEffect, useState } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles(theme => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.background.default,
    },
  },
}))(TableRow);

function createData(date, sunrise, sunset, lengthd, difference) {
  return { date, sunrise, sunset, lengthd, difference };
}

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    height: '100%',
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
}));
const CustomizedTables = props => {
  const classes = useStyles();

  const [hasError, setErrors] = useState(false);
  const [table, setTable] = useState([]);
  const province = props.province;
  const year = props.year;
  const month = props.month;
  console.log(province, year, month);

  async function fetchData() {
    const res = await fetch(
      `http://localhost:3000/${province}/${year}/${month}/sun`,
    );
    res
      .json()
      .then(res => {
        let tableArray = [];
        for (let i = 0; i < res.length; i++) {
          let temp = res[i];
          tableArray.push(
            createData(
              temp.date,
              temp.sunrise,
              temp.sunset,
              temp.length,
              temp.difference,
            ),
          );
        }
        setTable(tableArray);
      })
      .catch(err => {
        setErrors(err);
        setTable([]);
      });
  }

  useEffect(() => {
    fetchData();
  }, [year, month, province]);

  return (
    <Paper className={classes.root}>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Date</StyledTableCell>
            <StyledTableCell align="center">Sunrise</StyledTableCell>
            <StyledTableCell align="center">Sunset</StyledTableCell>
            <StyledTableCell align="center">Length</StyledTableCell>
            <StyledTableCell align="center">Difference</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {table.map(table => (
            <StyledTableRow key={table.date}>
              <StyledTableCell align="center" component="th" scope="row">
                {table.date}
              </StyledTableCell>
              <StyledTableCell align="center">{table.sunrise}</StyledTableCell>
              <StyledTableCell align="center">{table.sunset}</StyledTableCell>
              <StyledTableCell align="center">{table.lengthd}</StyledTableCell>
              <StyledTableCell align="center">
                {table.difference}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
};

export default CustomizedTables;
