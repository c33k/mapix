import styled from 'styled-components';
import cursorImg from '../assets/cursor.png';

export const TileCanvas = styled.div`
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
  display: flex;
  flex-direction: row;
`;
