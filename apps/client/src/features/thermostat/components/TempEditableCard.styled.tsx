import styled from 'styled-components';

import { TempCardStyled } from './TempCard.styled';

const TempEditableCardStyled = styled(TempCardStyled)`
  .content-wrapper {
    display: flex;
    justify-content: space-between;
  }

  .buttons-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .button {
    color: ${({ theme }) => theme.colors.secondary};
    cursor: pointer;
  }
`;

export { TempEditableCardStyled };
