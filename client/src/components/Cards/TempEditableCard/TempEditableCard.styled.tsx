import styled from 'styled-components';

import { TempCardStyled } from '../TempCard/TempCard.styled';

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
    cursor: pointer;
  }
`;

export { TempEditableCardStyled };
