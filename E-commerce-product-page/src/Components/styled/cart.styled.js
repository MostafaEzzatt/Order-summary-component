import styled from "styled-components";

const CartStyled = styled.div`
  width: 360px;
  padding-top: 26px;
  padding-bottom: 26px;
  position: absolute;
  right: 7px;
  top: 90px;
  background-color: white;
  z-index: 100;
  box-shadow: 10px 6px 13px rgb(0 0 0 / 43%);
  border-radius: 8px;

  > h4,
  > div {
    padding-left: 26px;
    padding-right: 26px;
  }

  h4 {
    width: 100%;
    padding-bottom: 26px;
    border-bottom: 1px solid lightgray;
  }

  > div {
    &:first-of-type {
      flex-direction: column;
      min-height: 188px;
      > div {
        &:first-child {
          margin-top: 24px;
        }
        margin-bottom: 24px;
        display: grid;
        grid-template-columns: 2fr 5fr 1fr;
        column-gap: 16px;
        align-items: center;
        > div {
          &:first-of-type {
            img {
              border-radius: 8px;
            }
          }

          h5 {
            max-width: 170px;
            color: hsl(220, 14%, 75%);
            font-size: 12px;
            font-weight: 400;
            text-overflow: ellipsis;
            white-space: nowrap;
            overflow: hidden;
          }

          p {
            margin-top: 12px;
            color: hsl(220, 14%, 75%);
            font-size: 12px;
            span {
              font-weight: bold;
              color: black;
            }
          }

          button {
            border: 0;
            background: transparent;
            cursor: pointer;
          }
        }
      }
    }
    > p {
      font-weight: bold;
      color: hsl(220, 14%, 75%);
    }
  }
`;

export default CartStyled;
