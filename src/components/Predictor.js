import React from 'react';
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
  box-shadow: 0px 4px 16px rgba(0, 191, 255);
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

const Predictor = () => (
  <>
    <TextInner>Prediction</TextInner>
    <BoxInLine>
      <PredictorStyle>
        <img src={RainyImg} alt="Rainny Image" /> 20/06
      </PredictorStyle>
      <PredictorStyle>
        <img src={SnowyImg} alt="Snowy Image" /> 14/08
      </PredictorStyle>
      <PredictorStyle>
        <img src={SunnyImg} alt="Sunny Image" /> 15/03
      </PredictorStyle>
    </BoxInLine>
    <TextInner>Now</TextInner>
    <BoxInLine>
      <PredictorStyle>
        <img src={RainyImg} alt="Rainny Image" /> 20/06
      </PredictorStyle>
      <PredictorStyle>
        <img src={SnowyImg} alt="Snowy Image" /> 14/08
      </PredictorStyle>
      <PredictorStyle>
        <img src={SunnyImg} alt="Sunny Image" /> 15/03
      </PredictorStyle>
    </BoxInLine>
  </>
);

export default Predictor;
