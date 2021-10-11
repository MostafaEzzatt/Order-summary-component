import styled from "styled-components";
import svgBG from "../../images/bg-pattern-quotation.svg";

const Wrapper = styled.div`
  max-width: ${({ theme }) => theme.magerments.rem(1110)};
  display: grid;
  grid-template-columns: repeat(4, ${({ theme }) => theme.magerments.rem(255)});
  grid-template-rows: repeat(2, ${({ theme }) => theme.magerments.rem(282)});
  gap: ${({ theme }) => theme.magerments.rem(30)};

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    width: 100%;
    padding: ${({ theme }) => theme.magerments.rem(35)};
    grid-template-columns: repeat(1, 1fr);
    grid-template-rows: auto;
  }

  > div:nth-child(1) {
    grid-column: 1 / span 2;
    position: relative;
    background-color: ${({ theme }) => theme.light.colors.moderateViolet};
    color: ${({ theme }) => theme.light.colors.white};

    .thumbnail {
      img {
        border-color: ${({ theme }) => theme.light.colors.moderateVioletBorder};
      }
    }

    h2 {
      position: relative;
      z-index: 500;
    }

    h3,
    p {
      color: ${({ theme }) => theme.light.colors.white};
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: ${({ theme }) => theme.magerments.rem(80)};
      width: ${({ theme }) => theme.magerments.rem(104)};
      height: ${({ theme }) => theme.magerments.rem(102)};
      background: url(${svgBG});
      z-index: 1;
      @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
        right: ${({ theme }) => theme.magerments.rem(20)};
      }
    }
  }

  > div:nth-child(2) {
    background-color: ${({ theme }) => theme.light.colors.veryDarkGrayishBlue};
    .thumbnail {
      img {
        border-color: ${({ theme }) => theme.light.colors.lightGray};
      }
    }
    h3,
    p {
      color: ${({ theme }) => theme.light.colors.white};
    }
  }

  > div:nth-child(3) {
    grid-column: 4 / span 1;
    grid-row: 1 / span 2;
  }

  > div:nth-child(3),
  > div:nth-child(4) {
    .thumbnail {
      img {
        border-color: ${({ theme }) => theme.light.colors.lightGray};
      }
    }
    h1,
    h2,
    h3,
    p {
      color: ${({ theme }) => theme.light.colors.veryDarkGrayishBlue};
    }
  }
  > div:nth-child(5) {
    grid-column: 2 / span 2;
    background-color: ${({ theme }) => theme.light.colors.veryDarkBlackishBlue};
    .thumbnail {
      img {
        border-color: ${({ theme }) => theme.light.colors.moderateViolet};
      }
    }
    h1,
    h2,
    h3,
    p {
      color: ${({ theme }) => theme.light.colors.white};
    }
  }

  @media (max-width: ${({ theme }) => theme.breakPoints.mobile}) {
    > div:nth-child(1),
    > div:nth-child(2),
    > div:nth-child(3),
    > div:nth-child(4),
    > div:nth-child(5) {
      max-width: 305px;
      grid-column: auto;
      grid-row: auto;
    }
  }
`;

export default Wrapper;
