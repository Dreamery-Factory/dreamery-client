import { colors } from '@/styles/colors';
import { breakpoints, paddings } from '@/styles/size';
import Link from 'next/link';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const BottomNav = () => {
  return (
    <Container>
      <Inner>
        <motion.button whileTap={{ scale: 0.95 }}>
          <PostButton href='/'>
            <IconX />
          </PostButton>
        </motion.button>
      </Inner>
      <ScrollWatcher />
    </Container>
  );
};

const IconX = () => {
  return (
    <svg
      id='Layer_1'
      version='1.1'
      viewBox='0 0 32 32'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M28,14H18V4c0-1.104-0.896-2-2-2s-2,0.896-2,2v10H4c-1.104,0-2,0.896-2,2s0.896,2,2,2h10v10c0,1.104,0.896,2,2,2  s2-0.896,2-2V18h10c1.104,0,2-0.896,2-2S29.104,14,28,14z' />
    </svg>
  );
};

const scrollWatcherKeyframes = keyframes`
	to {
		scale: 1 1;
	}

`;

const ScrollWatcher = styled.div`
  height: 7px;
  position: fixed;
  bottom: 0;
  z-index: 1000;
  background-color: ${colors.violet300};
  width: 100%;
  scale: 0 1;
  transform-origin: left;
  left: 0;
  animation: ${scrollWatcherKeyframes} linear;
  animation-timeline: scroll();
`;

const PostButton = styled(Link)`
  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;

  & > svg {
    width: 20px;
    height: 20px;
  }
`;

const Container = styled.div`
  position: fixed;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  padding: ${paddings.sm};
  max-width: ${breakpoints.sm}px;
  width: 100%;
`;

const Inner = styled.div`
  display: flex;
  justify-content: center;
`;
export default BottomNav;
