import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import theme from './theme';

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>Poop</Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  color: ${(props) => props.theme.colors.blue};
`;
