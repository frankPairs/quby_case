import styled from 'styled-components';

const AppStyled = styled.main`
  display: grid;
  grid-auto-columns: 25% auto 25%;
  grid-auto-rows: 25% auto 25%;
  grid-template-areas:
    '. . .'
    '. content .'
    '. . .';
  height: 100%;
`;

const ContentStyled = styled.div`
  align-items: flex-start;
  display: flex;
  justify-content: space-between;
  grid-area: content;
`;

export { AppStyled, ContentStyled };
