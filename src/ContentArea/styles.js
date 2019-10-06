import styled from 'styled-components';

const contentHeight = '640px';

export const Container = styled.div`
  display: flex;
  flex: 2;
  flex-direction: row;
  background-color: #9d5bae;
  height: 100vh;
  width: 100vw;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`;

// area with the buttons
export const DrawingArea = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 0;
`;

export const ResultArea = styled.textarea`
  flex: 1;
  height: ${contentHeight};

  @media (max-width: 1200px) {
    height: auto;
  }
`;

export const Tile = styled.button`
  width: 32px;
  height: 32px;
  outline: none;
`;
