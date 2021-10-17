import styled from "styled-components";

const ProductStyled = styled.section`
  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    display: flex;
    align-items: center;
    column-gap: ${({ theme }) => theme.sizeUnite.rem(126)};
    margin-top: ${({ theme }) => theme.sizeUnite.rem(90)};
  }

  .product__info {
    padding: ${({ theme }) => theme.sizeUnite.rem(24)};

    @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
      padding: 0;
    }

    h3 {
      font-size: ${({ theme }) => theme.sizeUnite.rem(10)};
      color: ${({ theme }) => theme.colors.orange};
      text-transform: uppercase;
    }
    h1 {
      font-size: ${({ theme }) => theme.sizeUnite.rem(22)};
      margin-top: ${({ theme }) => theme.sizeUnite.rem(22)};
      margin-bottom: ${({ theme }) => theme.sizeUnite.rem(27)};
      line-height: 1.2;
      @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        font-size: ${({ theme }) => theme.sizeUnite.rem(35)};
      }
    }
    p {
      font-size: ${({ theme }) => theme.sizeUnite.rem(15)};
      line-height: 2;
      margin-bottom: ${({ theme }) => theme.sizeUnite.rem(37)};
      color: ${({ theme }) => theme.colors.darkGrayishBlue};
    }

    > div {
      font-size: ${({ theme }) => theme.sizeUnite.rem(25)};
      font-weight: bold;

      &:first-of-type {
        @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
          justify-content: flex-start;
          flex-direction: column;
          align-items: start;
          > div:last-child {
            margin-top: ${({ theme }) => theme.sizeUnite.rem(14)};
          }
        }
      }

      div:first-child {
        span {
          padding: 6px 10px;
          font-size: ${({ theme }) => theme.sizeUnite.rem(14)};
          color: ${({ theme }) => theme.colors.orange};
          background-color: ${({ theme }) => theme.colors.paleOrange};
          border-radius: ${({ theme }) => theme.sizeUnite.rem(6)};
          margin-left: ${({ theme }) => theme.sizeUnite.rem(6)};
        }
      }

      div:last-child {
        font-size: ${({ theme }) => theme.sizeUnite.rem(14)};
        color: ${({ theme }) => theme.colors.grayishBlue};
        text-decoration: line-through;
      }

      &.product__cta {
        flex-direction: column;
        @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
          flex-direction: row;
          align-items: center;
          margin-top: ${({ theme }) => theme.sizeUnite.rem(40)};
          column-gap: ${({ theme }) => theme.sizeUnite.rem(14)};
        }
      }
    }
  }
`;

export default ProductStyled;
