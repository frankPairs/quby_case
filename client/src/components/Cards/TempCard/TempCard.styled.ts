import styled from 'styled-components';

const TempCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0 2px 16px 0, rgba(0, 0, 0, 0.08) 0 0 1px 0;
  border-radius: 1rem;
  min-width: 25em;
  margin-right: 1rem;
  box-sizing: border-box;

  .title {
    color: ${({ theme }) => theme.colors.secondary};
    font-size: 1em;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  .temperature {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 5em;
    margin-bottom: 0.75rem;
  }

  .date {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 0.75em;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.desktopSmall}) {
    margin-right: 0;
    margin-bottom: 1rem;
  }

  @media only screen and (max-width: ${({ theme }) => theme.media.tablet}) {
    min-width: unset;
    width: 100%;
  }
`;

export { TempCardStyled };
