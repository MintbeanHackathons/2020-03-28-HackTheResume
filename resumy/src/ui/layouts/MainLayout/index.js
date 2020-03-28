import React from 'react';

// Styled components
import { Container, Content } from './styled';

// Components
import { LeftNav } from './LeftNav';

export const MainLayout = ({ children }) => (
  <Container>
    <LeftNav />
    <Content>{children}</Content>
  </Container>
);
