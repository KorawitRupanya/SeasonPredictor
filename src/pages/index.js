import React from 'react';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';
import Dropdown from '../components/Dropdown';
import MonthDropdown from '../components/MonthDropdown';
import Predictor from '../components/Predictor';
import Graph from '../components/Graph';

const PickerStyle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: auto;
`;

const Box1 = styled.div`
  position: relative;
  margin: 4vh 5vh;
  align-items: center;
  height: 400px;
  width: 50%;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(255, 99, 71);
  border-radius: 16px;
  color: #737373;
  justify-content: space-between;
`;

const Box2 = styled.div`
  position: relative;
  margin: 4vh 40vh;
  align-items: center;
  height: 400px;
  width: 50%;
  display: flex;
  background: #ffffff;
  box-shadow: 0px 4px 16px rgba(0, 128, 0);
  border-radius: 16px;
  color: #737373;
  justify-content: space-between;
`;

const BoxAlignment = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`;

const TextStyle = styled.div`
  margin-left: 20vw;
`;

const PredictorAlignment = styled.div`
  margin-left: 10vw;
`;

const ProvinceAlignment = styled.div`
  position: relative;
  height: 2vh;
  text-align: center;
  background-size: 100% auto;
`;

const IndexPage = () => {
  const [year, setYear] = React.useState('');
  const [month, setMonth] = React.useState('');
  return (
    <Layout>
      <SEO title="Bangkok" />
      <ProvinceAlignment>
        <h1>Bangkok</h1>
      </ProvinceAlignment>
      <PickerStyle>
        <Dropdown year={year} setYear={setYear} />
        <MonthDropdown month={month} setMonth={setMonth} />
      </PickerStyle>
      <TextStyle>
        <h2>First Date of Season</h2>
      </TextStyle>
      <PredictorAlignment>
        <Predictor year={year} />
      </PredictorAlignment>
      <BoxAlignment>
        <Box1 key="Box1">
          <Graph />
        </Box1>
        <Box2 key="Box2">Table</Box2>
      </BoxAlignment>
    </Layout>
  );
};

export default IndexPage;
