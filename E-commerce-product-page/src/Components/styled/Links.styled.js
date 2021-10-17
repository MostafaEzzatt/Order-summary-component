import styled from "styled-components";

const LinksStyled = styled.ul`
  li {
    display: inline-block;
    color: ${({ theme }) => theme.colors.darkGrayishBlue};
    font-size: ${({ theme }) => theme.sizeUnite.rem(12)};

    &:not(:first-child) {
      margin-left: 15px;
    }
  }
`;

export default LinksStyled;
