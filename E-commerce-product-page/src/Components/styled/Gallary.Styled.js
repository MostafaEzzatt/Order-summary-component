import styled from "styled-components";

const GallaryStyled = styled.div`
  position: relative;
  width: 100%;

  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    > span {
      display: none;
    }
  }

  span {
    width: ${({ theme }) => theme.sizeUnite.rem(40)};
    height: ${({ theme }) => theme.sizeUnite.rem(40)};
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    background: ${({ theme }) => theme.colors.white};
    top: 50%;
    @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
      display: none;
    }
  }

  span:first-child {
    transform: translate(-50%, -50%);
    left: 10%;
  }

  span:last-child {
    transform: translate(50%, -50%);
    right: 10%;
  }

  .selected-image {
    width: 100%;

    @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
      border-radius: ${({ theme }) => theme.sizeUnite.rem(14)};
      overflow: hidden;
    }
  }
  .gallary-items__container {
    @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
      margin-top: ${({ theme }) => theme.sizeUnite.rem(10)};
      display: flex;
      justify-content: space-between;
    }
    .item {
      display: none;
      @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
        display: inline-block;
        width: 23%;
      }

      img {
        transition: border, opacity ease-in-out 300ms;
        @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
          border: ${({ theme }) => theme.sizeUnite.rem(3)} solid
            ${({ theme }) => theme.colors.white};
          border-radius: ${({ theme }) => theme.sizeUnite.rem(10)};
          overflow: hidden;
        }
        &.border-orange {
          border: ${({ theme }) => theme.sizeUnite.rem(3)} solid
            ${({ theme }) => theme.colors.orange};
          opacity: 0.5;
        }
      }
    }
  }
`;

export default GallaryStyled;
