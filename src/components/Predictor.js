import React, { useEffect, useState } from 'react';
import RainyImg from '../images/rainy-6.svg';
import SnowyImg from '../images/snowy-6.svg';
import SunnyImg from '../images/day.svg';
import styled from '@emotion/styled';

const PredictorStyle = styled.div`
  position: relative;
  margin-left: 15vw;
  margin-top: 2vh;
  padding-right: 2vw;
  display: flex;
  flex-direction: row;
  box-shadow: 0px 4px 16px rgba(232, 232, 232);
  border-radius: 16px;
  color: #737373;
  align-items: center;
`;

const TextInner = styled.div`
  padding-left: 9vw;
`;

const BoxInLine = styled.div`
  display: flex;
`;

let sunnyFC = '';
let rainnyFC = '';
let snowyFC = '';

let sunnyTMD = '';
let rainnyTMD = '';
let snowyTMD = '';

const Predictor = props => {
  const [hasError, setErrors] = useState(false);
  const [info, setInfo] = useState({});
  const province = props.province;
  const year = props.year;
  const forcastDate = [];
  const actualDate = [];

  if (year == 2018) {
    sunnyTMD = '3 March';
    rainnyTMD = '26 May';
    snowyTMD = '27 October';
  } else if (year == 2019) {
    sunnyTMD = '21 February';
    rainnyTMD = '26 May';
    snowyTMD = '27 October';
  } else if (year == 2020) {
    sunnyTMD = '-- --';
    rainnyTMD = '-- --';
    snowyTMD = '-- --';
  }

  async function fetchData1() {
    const res = await fetch(`http://localhost:3000/${province}/summer/${year}`);
    res
      .json()
      .then(res => setInfo(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData1();
  }, [year, province]);

  console.log('date' + info[0].month);
  sunnyFC = info[0].date + ' ' + info[0].month;
  forcastDate[0] = sunnyFC;

  async function fetchData2() {
    const res = await fetch(`http://localhost:3000/${province}/rainy/${year}`);
    res
      .json()
      .then(res => setInfo(res))
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchData2();
  }, [year, province]);

  forcastDate[1] = info[0].date + ' ' + info[0].month;

  async function fetchData3() {
    const res = await fetch(`http://localhost:3000/${province}/winter/${year}`);
    res
      .json()
      .then(res => setInfo(res))
      .catch(err => setErrors(err));
  }

  forcastDate[2] = info[0].date + ' ' + info[0].month;

  useEffect(() => {
    fetchData3();
  }, [year, province]);

  return (
    <>
      <TextInner>Forcast</TextInner>
      <BoxInLine>
        <PredictorStyle>
          <img src={SunnyImg} alt="Sunny Image" /> {forcastDate[0]}
        </PredictorStyle>
        <PredictorStyle>
          <img src={RainyImg} alt="Rainny Image" /> {forcastDate[1]}
        </PredictorStyle>
        <PredictorStyle>
          <img src={SnowyImg} alt="Snowy Image" /> {forcastDate[2]}
        </PredictorStyle>
      </BoxInLine>
      <TextInner>Actuality</TextInner>
      <BoxInLine>
        <PredictorStyle>
          <img src={SunnyImg} alt="Sunny Image" /> 15/03
        </PredictorStyle>
        <PredictorStyle>
          <img src={RainyImg} alt="Rainny Image" /> 20/06
        </PredictorStyle>
        <PredictorStyle>
          <img src={SnowyImg} alt="Snowy Image" /> 14/08
        </PredictorStyle>
      </BoxInLine>
      <TextInner>TMD</TextInner>
      <BoxInLine>
        <PredictorStyle>
          <img src={SunnyImg} alt="Sunny Image" /> {sunnyTMD}
        </PredictorStyle>
        <PredictorStyle>
          <img src={RainyImg} alt="Rainny Image" /> {rainnyTMD}
        </PredictorStyle>
        <PredictorStyle>
          <img src={SnowyImg} alt="Snowy Image" /> {snowyTMD}
        </PredictorStyle>
      </BoxInLine>
    </>
  );
};

export default Predictor;
