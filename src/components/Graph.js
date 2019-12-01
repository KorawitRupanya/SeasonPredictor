import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled-base';
import Highcharts from 'highcharts';
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
        data: [],
      },
      {
        name: 'tempAvg',
        data: [],
      },
      {
        name: 'tempMin',
        data: [],
      },
    ],
  };

  for (let i = 0; i < info.length; i++) {
    tempMaxArr[i] = info[i].tempMax;
    tempAvgArr[i] = info[i].tempAvg;
    tempMinArr[i] = info[i].tempMin;
  }

  options.series[0].data = tempMaxArr;
  options.series[1].data = tempAvgArr;
  options.series[2].data = tempMinArr;

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

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default Graph;
