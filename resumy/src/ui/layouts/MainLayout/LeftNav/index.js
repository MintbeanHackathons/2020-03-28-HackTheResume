import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

// Styled Components
import { Container, Nav } from './styled';

export const LeftNav = () => {
  return (
    <Container>
      <Nav>
        <Button type='link'>
          <Link to='/'>Home</Link>
        </Button>

        <Button type='link'>
          <Link to='/my-resumes'>My Resumes</Link>
        </Button>

        <Button type='link'>
          <Link to='/create-resume'>Create Resume</Link>
        </Button>
      </Nav>
    </Container>
  );
};
