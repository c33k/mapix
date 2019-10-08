import styled from 'styled-components';
import cursorImg from '../assets/cursor.png';

export const Canvas = styled.canvas`
  background-color: white;
  flex: 1;

  &:hover {
    cursor: url(${cursorImg}) 16 16, auto;
  }
`;
