'use client';

import { GlobalStyle } from '@/styles/globalStyles';
import { ThemeProvider } from 'styled-components';

const RootProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <ThemeProvider theme={{}}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default RootProvider;
