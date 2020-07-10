import styled from 'styled-components';

const TempCardStyled = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.75rem;
  box-shadow: rgba(0, 0, 0, 0.12) 0 2px 16px 0, rgba(0, 0, 0, 0.08) 0 0 1px 0;
  border-radius: 1rem;
  min-width: 20em;
  margin-right: 1rem;

  .title {
    color: #8db1ab;
    font-size: 1em;
    margin-bottom: 0.75rem;
    text-transform: uppercase;
  }

  .temperature {
    font-size: 5em;
    margin-bottom: 0.75rem;
  }

  .date {
    font-size: 0.75em;
  }
`;

export { TempCardStyled };
