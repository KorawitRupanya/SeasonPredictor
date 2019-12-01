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

let sunnyTMD = '';
let rainnyTMD = '';
let snowyTMD = '';

const Predictor = props => {
  const [hasError, setErrors] = useState(false);
  const [summer, setSummer] = useState('');
  const [rainy, setRainy] = useState('');
  const [winter, setWinter] = useState('');
  const province = props.province;
  const year = props.year;

  async function fetchDataSummer() {
    const res = await fetch(`http://localhost:3000/${province}/summer/${year}`);
    res
      .json()
      .then(res => {
        setSummer(res[0].date + '/' + res[0].month);
      })
      .catch(err => setErrors(err));
  }

  async function fetchDataRainy() {
    const res = await fetch(`http://localhost:3000/${province}/rainy/${year}`);
    res
      .json()
      .then(res => {
        setRainy(res[0].date + '/' + res[0].month);
      })
      .catch(err => setErrors(err));
  }

  async function fetchDataWinter() {
    const res = await fetch(`http://localhost:3000/${province}/winter/${year}`);
    res
      .json()
      .then(res => {
        setWinter(res[0].date + '/' + res[0].month);
      })
      .catch(err => setErrors(err));
  }

  useEffect(() => {
    fetchDataSummer();
    fetchDataRainy();
    fetchDataWinter();
  }, [year, province]);

  console.log(summer, rainy, winter);
  return (
    <>
      <TextInner>Forcast</TextInner>
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
      <TextInner>Actuality</TextInner>
      <BoxInLine>
        <PredictorStyle>
          <img src={SunnyImg} alt="Sunny Image" /> {summer}
        </PredictorStyle>
        <PredictorStyle>
          <img src={RainyImg} alt="Rainny Image" /> {rainy}
        </PredictorStyle>
        <PredictorStyle>
          <img src={SnowyImg} alt="Snowy Image" /> {winter}
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
