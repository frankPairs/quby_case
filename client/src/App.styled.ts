import styled from 'styled-components';

const AppStyled = styled.main`
  box-sizing: border-box;
  display: grid;
  grid-auto-columns: 2fr 8fr 2fr;
  grid-auto-rows: 80px auto 25%;
  grid-template-areas:
    '. header .'
    '. content .'
    '. . .';
  height: 100%;
  padding: 1.5rem;

  @media only screen and (max-width: ${({ theme }) => theme.media.mobile}) {
    grid-auto-columns: unset;
    grid-auto-rows: 60px auto;
    grid-template-areas:
      'header'
      'content ';
  }
`;

const HeaderStyled = styled.header`
  grid-area: header;
  box-sizing: border-box;

  h1 {
    color: #38023b;
    font-size: 2em;
    text-align: center;
    text-transform: uppercase;
    margin: 0;
  }
`;

const ContentStyled = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: center;
  grid-area: content;

  @media only screen and (max-width: ${({ theme }) => theme.media.desktopSmall}) {
    flex-direction: column;
  }
`;

export { AppStyled, ContentStyled, HeaderStyled };
