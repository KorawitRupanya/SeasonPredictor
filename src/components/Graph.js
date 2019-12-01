import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled-base';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const options = {
  chart: {
    type: 'spline',
  },
  title: {
    text: 'Temperature',
  },
  series: [
    {
      data: [1, 2, 1, 4, 3, 6],
    },
  ],
};

const Graph = props => {
  const [hasError, setErrors] = useState(false);
  const [info, setInfo] = useState({});
  const province = props.province;
  const year = props.year;
  const month = props.month;
  console.log(province, year, month);
  // if (year !== '' && month != '') `http://localhost:3000/${province}/${year}/${month}`

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

  console.log(info);

  return (
    <>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
};

export default Graph;
