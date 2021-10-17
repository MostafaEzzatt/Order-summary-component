import styled from "styled-components";

const CounterInputStyled = styled.div`
  width: 100%;
  padding: ${({ theme }) => theme.sizeUnite.twoRem(20, 15)};
  border-radius: ${({ theme }) => theme.sizeUnite.rem(10)};
  background-color: ${({ theme }) => theme.colors.lightGrayishBlue};
  margin-top: ${({ theme }) => theme.sizeUnite.rem(26)};
  margin-bottom: ${({ theme }) => theme.sizeUnite.rem(16)};

  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    max-width: ${({ theme }) => theme.sizeUnite.rem(156)};
    margin: 0;
  }

  input {
    text-align: center;
    background: transparent;
    border: 0;
    outline: none;
    flex: 1 0 auto;
    font-weight: bold;
    @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
      width: 80%;
    }
  }
`;

export default CounterInputStyled;
