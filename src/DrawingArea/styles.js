import styled from 'styled-components';
import cursorImg from '../assets/cursor.png';

// area with the buttons
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

export const DrawingArea = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0;

  &:hover {
    cursor: url(${cursorImg}) 16 16, auto;
  }
`;

export const Row = styled.div`
  justify-content: center;
`;

export const ControllersArea = styled.div`
  flex: 1;
`;
