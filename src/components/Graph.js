import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled-base';
import Highcharts, { Axis } from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const Graph = props => {
  const [hasError, setErrors] = useState(false);
  const [info, setInfo] = useState({});
  const [tempMaxArr, settempMax] = useState([]);
  const [tempAvgArr, settempAvg] = useState([]);
  const [tempMinArr, settempMin] = useState([]);
  const province = props.province;
  const year = props.year;
  const month = props.month;

  const options = {
    chart: {
      type: 'spline',
    },
    title: {
      text: 'Temperature(°F)',
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

  async function fetchData() {
    const res = await fetch(
      `http://localhost:3000/${province}/${year}/${month}`,
    );
    res
      .json()
      .then(res => {
        setInfo(res);
        let tempMax2 = [];
        let tempAvg2 = [];
        let tempMin2 = [];

        for (let i = 0; i < res.length; i++) {
          tempMax2[i] = res[i].tempMax;
          tempAvg2[i] = res[i].tempAvg;
          tempMin2[i] = res[i].tempMin;
        }
        settempMax(tempMax2);
        settempAvg(tempAvg2);
        settempMin(tempMin2);
      })
      .catch(err => {
        setErrors(err);
        settempMax([]);
        settempAvg([]);
        settempMin([]);
      });
  }

  options.series[0].data = tempMaxArr;
  options.series[1].data = tempAvgArr;
  options.series[2].data = tempMinArr;

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
