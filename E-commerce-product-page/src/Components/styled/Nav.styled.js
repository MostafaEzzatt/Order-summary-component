import styled from "styled-components";

export const NavStyled = styled.nav`
  padding: ${({ theme }) => theme.sizeUnite.twoRem(20, 24)};
  @media (min-width: ${({ theme }) => theme.breakPoints.medium}) {
    max-width: ${({ theme }) => theme.sizeUnite.rem(1112)};
    padding-top: ${({ theme }) => theme.sizeUnite.rem(43)};
    padding-bottom: ${({ theme }) => theme.sizeUnite.rem(49)};
    border-bottom: 1px solid ${({ theme }) => theme.colors.lightGrayishBlue};
  }
  button {
    border: 0;
    background-color: transparent;
    margin-right: 20px;
  }
  h1 {
    font-size: ${({ theme }) => theme.sizeUnite.rem(25)};
    line-height: ${({ theme }) => theme.sizeUnite.rem(25)};
  }

  img {
    width: ${({ theme }) => theme.sizeUnite.rem(24)};
    margin-left: ${({ theme }) => theme.sizeUnite.rem(20)};
    z-index: -2;
  }

  .cart {
    width: ${({ theme }) => theme.sizeUnite.rem(24)};
    height: ${({ theme }) => theme.sizeUnite.rem(24)};
    position: relative;

    > span {
      position: absolute;
      right: 0;
      top: 0;
      background-color: orange;
      padding: 0px 7px;
      border-radius: 50%;
      font-size: ${({ theme }) => theme.sizeUnite.rem(10)};
      color: white;
      transform: translate(50%, -50%);
      z-index: -1;
    }
  }
`;

export const Overlay = styled.div`
  position: absolute;
  inset: 0;
  background-color: ${({ theme }) => theme.colors.black};
  opacity: 0;
  visibility: hidden;
  transition: opacity 300ms ease-in-out;
  z-index: 1;
  &.open {
    visibility: visible;
    opacity: 0.5;
  }
`;

export const NavLinks = styled.aside`
  min-width: ${({ theme }) => theme.sizeUnite.rem(250)};
  background-color: ${({ theme }) => theme.colors.white};
  padding-top: ${({ theme }) => theme.sizeUnite.rem(24)};
  padding-left: ${({ theme }) => theme.sizeUnite.rem(15)};
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 2;

  left: ${({ theme }) => `-${theme.sizeUnite.rem(250)}`};
  visibility: hidden;
  opacity: 0;
  transition: all ease-in-out 300ms;

  &.open {
    left: 0;
    opacity: 1;
    visibility: visible;
  }

  button {
    background: transparent;
    border: 0;
    cursor: pointer;
    margin-bottom: ${({ theme }) => theme.sizeUnite.rem(56)};
  }
  ul {
    width: 100%;
    list-style: none;

    li {
      margin-bottom: ${({ theme }) => theme.sizeUnite.rem(32)};
      display: block;
      &:not(:first-child) {
        margin-left: 0px;
      }
      a {
        text-decoration: none;
        font-size: ${({ theme }) => theme.sizeUnite.rem(15)};
        color: ${({ theme }) => theme.colors.black};
        font-weight: bold;
      }
    }
  }
`;
