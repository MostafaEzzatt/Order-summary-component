import styled from "styled-components";

export const Btn = styled.button`
  width: 100%;
  padding: ${({ theme }) => theme.sizeUnite.twoRem(20, 15)};
  font-size: ${({ theme }) => theme.sizeUnite.rem(12)};
  font-weight: bold;
  border-radius: ${({ theme }) => theme.sizeUnite.rem(10)};
  border: 0;
  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    flex: 0 1 auto;
  }
  svg {
    margin-right: ${({ theme }) => theme.sizeUnite.rem(14)};
    path {
      fill: ${({ theme }) => theme.colors.white};
    }
  }
`;

export const PrimaryBtn = styled(Btn)`
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.orange};
`;
