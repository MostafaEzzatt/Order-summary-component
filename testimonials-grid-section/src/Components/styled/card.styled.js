import styled from "styled-components";

const CardStyled = styled.div`
  padding: ${({ theme }) => theme.magerments.rem(24)}
    ${({ theme }) => theme.magerments.rem(24)};
  background-color: ${(props) => props.bg || props.theme.light.colors.white};
  border-radius: ${({ theme }) => theme.magerments.rem(6)};
  .head {
    display: flex;
    align-items: center;
    .thumbnail {
      margin-right: ${({ theme }) => theme.magerments.rem(16)};
      width: ${({ theme }) => theme.magerments.rem(30)};
      height: ${({ theme }) => theme.magerments.rem(30)};
      img {
        max-width: 100%;
        border: ${({ theme }) => theme.magerments.rem(2)} solid;
        border-color: ${({ theme }) => theme.light.colors.lightGrayishBlue};
        border-radius: 50%;
      }
    }
  }

  h1,
  h3 {
    font-size: ${({ theme }) => theme.magerments.rem(10)};
    color: ${({ theme }) => theme.light.colors.white};
  }
  h1 {
    margin-top: 0;
    margin-bottom: ${({ theme }) => theme.magerments.rem(7)};
  }

  h2 {
    font-size: ${({ theme }) => theme.magerments.rem(20)};
    color: ${({ theme }) => theme.light.colors.white};
    font-weight: 600;
    margin-top: ${({ theme }) => theme.magerments.rem(20)};
    margin-bottom: ${({ theme }) => theme.magerments.rem(20)};
  }

  h3 {
    color: ${({ theme }) => theme.light.colors.moderateViolet};
    margin: 0;
    opacity: 0.7;
  }

  p {
    font-size: ${({ theme }) => theme.magerments.rem(12.8)};
    color: ${({ theme }) => theme.light.colors.lightGray};
    opacity: 0.7;
  }
`;

export default CardStyled;
