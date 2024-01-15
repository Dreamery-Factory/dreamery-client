'use client';

import { colors } from '@/styles/colors';
import { breakpoints, paddings } from '@/styles/size';
import styled from 'styled-components';
import BottomNav from './BottomNav';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Container>
      <Inner>
        {children}
        <BottomNav />
      </Inner>
      <BG />
    </Container>
  );
};

const BG = styled.div`
  @media (min-width: ${breakpoints.sm}px) {
    position: fixed;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    background: linear-gradient(
      125deg,
      ${colors.violet500},
      ${colors.violet100}
    );
    display: initial;
  }
  display: none;
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100dvh;
`;

const Inner = styled.div`
  max-width: ${breakpoints.sm}px;
  width: 100%;
  background-color: ${colors.white};
  padding: ${paddings.sm};
  position: relative;
  height: 200dvh;
  z-index: 1;
`;

export default RootLayout;
