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
      .chat_frame {
        height: 490px;
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
        .content {
          .time {
            width: 100%;
            text-align: center;
            margin: 20px 0;
          }
          .user {
            height: auto;
            display: flex;
            img {
              width: 50px;
              height: 50px;
            }
            .info {
              margin-left: 20px;
              padding: 16px 20px;
              box-sizing: border-box;
              max-width: 440px;
              background-color: #f4f4f4;
              border-radius: 10px;
            }
          }
          .my {
            justify-content: end;
            .info {
              margin: 0 20px 0 0;
              background-color: #79ace5;
            }
          }
        }
      }
      .control {
        padding: 20px 40px;
        width: 100%;
        height: 100%;
        .input {
          width: 100%;
          height: 65px;
          resize: none;
          background: #fcfcfc;
        }
        .tag {
          margin-top: 10px;
          display: flex;
          justify-content: space-between;
          .emo {
            width: 18px;
            height: 18px;
            margin-top: 7px;
            background-position: -40px -490px;
            cursor: pointer;
          }
          .submit {
            display: flex;
            height: 25px;
            .count {
              height: 100%;
              line-height: 25px;
              color: #999;
              margin-right: 10px;
            }
            .btn {
              width: 46px;
              height: 100%;
              background-position: -84px -64px;
              color: #fff;
              text-align: center;
              line-height: 25px;
              cursor: pointer;
            }
          }
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
