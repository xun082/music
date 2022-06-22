import styled from "styled-components";

export const LatterWrapper = styled.div`
  width: 400px;
  height: auto;
  background-color: #fff;
  position: fixed;
  z-index: 999;
  width: 480px;
  top: 100px;
  left: calc(50% - 240px);
  border-radius: 5px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
  display: ${(props) => (props.isShow === false ? "none" : "block")};
  .header {
    width: 100%;
    height: 38px;
    background-position: 0 -48px;
    padding-left: 20px;
    user-select: none;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    line-height: 38px;
    position: relative;
    cursor: move;
    border-radius: 5px 5px 0 0;
    .close {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      background-position: 0 -95px;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
  }
  .content {
    padding: 20px 40px 30px;
    .select {
      border: 1px solid #d9d9d9;
      border-radius: 2px;
      margin-bottom: 10px;
      .ant-select-selector {
        border: none;
      }
    }
    .footer {
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 10px;
      height: 35px;
      .emo {
        cursor: pointer;
      }
      .submit {
        .length {
          font-size: 12px;
          color: #333;
          font-family: Arial, Helvetica, sans-serif;
          -webkit-text-size-adjust: none;
          margin-right: 10px;
        }
        .button {
          height: 100%;
          display: inline-block;
          width: 46px;
          height: 25px;
          background-position: -84px -64px;
          color: #fff;
          text-align: center;
          line-height: 25px;
        }
      }
    }
  }
`;
