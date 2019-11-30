import React from 'react';
import { Link } from 'gatsby';

import Layout from '../components/layout';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown';
import SEO from '../components/seo';

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <DropdownButton id="dropdown-basic-button" title="Dropdown button">
      <Dropdown.Item>Action</Dropdown.Item>
      <Dropdown.Item>Another action</Dropdown.Item>
      <Dropdown.Item>Something else</Dropdown.Item>
    </DropdownButton>
    Page2
  </Layout>
);

export default SecondPage;
