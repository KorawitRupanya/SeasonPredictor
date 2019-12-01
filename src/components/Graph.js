import React from 'react';
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

const Graph = () => (
  <>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </>
);

export default Graph;
