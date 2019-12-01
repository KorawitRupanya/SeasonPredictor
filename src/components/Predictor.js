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

const Predictor = props => {
  const year = props.year;
  let sunnyTMD = '';
  let rainnyTMD = '';
  let snowyTMD = '';
  console.log('predict', year);
  if (year == 2018) {
    sunnyTMD = '03/03';
    rainnyTMD = '26/05';
    snowyTMD = '27/10';
  } else if (year == 2019) {
    sunnyTMD = '03/03';
    rainnyTMD = '26/05';
    snowyTMD = '27/10';
  } else if (year == 2020) {
    sunnyTMD = '--/--';
    rainnyTMD = '--/--';
    snowyTMD = '--/--';
  }
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
