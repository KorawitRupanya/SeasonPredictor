import React from 'react';
import { Link } from 'gatsby';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import Layout from '../components/layout';
import SEO from '../components/seo';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex: 1;
`;

const DropDownCenterBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-left: 25vw;
`;

const IndividualDropBoxAlignment = styled.div`
  margin: 5vh;
`;

const IndexPage = () => (
  <Container>
    <Layout>
      <DropDownCenterBox>
        <IndividualDropBoxAlignment>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </DropdownButton>
        </IndividualDropBoxAlignment>
        <IndividualDropBoxAlignment>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </DropdownButton>
        </IndividualDropBoxAlignment>
        <IndividualDropBoxAlignment>
          <DropdownButton id="dropdown-basic-button" title="Dropdown button">
            <Dropdown.Item>Action</Dropdown.Item>
            <Dropdown.Item>Another action</Dropdown.Item>
            <Dropdown.Item>Something else</Dropdown.Item>
          </DropdownButton>
        </IndividualDropBoxAlignment>
      </DropDownCenterBox>
      <SEO title="Temp" />
      Page1
    </Layout>
  </Container>
);

export default IndexPage;
