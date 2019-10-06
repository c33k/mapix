import styled from 'styled-components';

// area with the buttons
export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  padding: 0;
`;

export const Controllers = styled.div`
  flex: 1;
`;

export const ExportBtn = styled.button`
  width: 100px;
  height: 50px;
  font-weight: bold;
  line-height: 50px;
  font-size: 18px;
  cursor: pointer;
`;
