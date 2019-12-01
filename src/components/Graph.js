import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled-base';
import Highcharts, { Axis } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graph = props => {
  const [hasError, setErrors] = useState(false);
  const [info, setInfo] = useState({});
  const province = props.province;
  const year = props.year;
  const month = props.month;
  const tempMaxArr = [];
  const tempAvgArr = [];
  const tempMinArr = [];
  console.log(province, year, month);

  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Temperature',
    },
    series: [
      {
        name: 'tempMax',
        data: [1, 2, 1, 4, 3, 6],
      },
      {
        name: 'tempAvg',
        data: [3, 3, 3, 4, 3, 6],
      },
      {
        name: 'tempMin',
        data: [4, 4, 4, 4, 4, 4],
      },
    ],
  };

  async function fetchData() {
    const res = await fetch(
      `http://localhost:3000/${province}/${year}/${month}`,
    );
    res
      .json()
      .then(res => setInfo(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData();
  }, [year, month, province]);

  for (let i = 0; i < info.length; i++) {
    tempMaxArr[i] = info[i].tempMax;
    tempAvgArr[i] = info[i].tempAvg;
    tempMinArr[i] = info[i].tempMin;
  }

  console.log(info.length);

  options.series[0].data = tempMaxArr;
  options.series[1].data = tempAvgArr;
  options.series[2].data = tempMinArr;

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default Graph;
