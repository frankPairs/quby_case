import styled from 'styled-components';

const WrapperStyled = styled.div`
  box-sizing: border-box;
  align-items: center;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: ${({ theme }) => theme.media.desktopSmall}) {
    flex-direction: column;
  }
`;

export { WrapperStyled };
