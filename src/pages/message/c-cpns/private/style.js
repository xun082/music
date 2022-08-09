import styled from "styled-components";

export const PrivateWrapper = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 10px;
    height: 100%;
    background: transparent;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background-color: transparent;
  }
  .private {
    cursor: pointer;
    width: 100%;
    height: 83px;
    padding: 16px 0;
    border-bottom: 1px dotted #ccc;
    display: flex;
    &:hover {
      background: #f5f5f5;
    }
    .content {
      margin-left: 20px;
      width: 550px;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .nickname {
        color: #000;
        font-size: 14px;
        cursor: pointer;
      }
      .info {
        color: #999;
      }
    }
    .right {
      width: 100%;
      text-align: end;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      color: #999;
      .del {
        opacity: 0;
        color: #0c73c2;
      }
    }
  }
  .model {
    display: ${(props) => (props.isShow === false ? "none" : "block")};
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    z-index: 999;
    background: rgba(0, 0, 0, 0.5);
    .message {
      padding: 20px 20px 0 20px;
      width: 800px;
      height: 94%;
      background: #e9e9e9;
      margin: 0 auto;
      .header {
        display: flex;
        justify-content: space-between;
        padding-bottom: 10px;
        border-bottom: 2px solid #d13030;
        .nickname {
          font-size: 14px;
          font-weight: 700;
        }
      }
    }
  }
  & :hover {
    .del {
      opacity: 1 !important;
    }
  }
`;
