import styled from "styled-components";

export const RecommendDocker = styled.div`
  height: auto;
  width: 100%;
`;

export const RecommendWrapper = styled.div`
  .content {
    background-position: 0 0;
    height: 126px;
    width: 100%;
    .context {
      width: 205px;
      height: 50px;
      margin: 0 auto;
      padding: 16px 0;
      color: #666;
    }

    .loginBtn {
      margin-top: 25px;
      width: 100%;
      height: 31px;
      display: flex;
      justify-content: center;

      button {
        background-position: 0 -195px;
        display: block;
        width: 100px;
        height: 31px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        text-shadow: 0 1px 0 #8a060b;
      }
    }
  }
`;

export const Recommend = styled.div`
  padding: 20px 20px 0 20px;
  box-sizing: border-box;
  height: 165px;
  width: 100%;
  background-position: 0 -270px;
  .content {
    .header {
      width: 100%;
      height: 100%;
      display: flex;
      .image {
        display: block;
        width: 80px;
        height: 80px;
      }
      .info_right {
        display: flex;
        flex-flow: column;
        justify-content: space-between;
        height: 80px;
        margin-left: 20px;
        .name {
          color: #333;
          font-size: 12px;
        }
        .level {
          line-height: 20px;
          width: 50px;
          height: 20px;
          padding-left: 3px;
          border: 1px solid #666;
          border-radius: 8px;
        }
        .register {
          width: 100px;
          height: 30px;
          border-radius: 20px;
          color: #fff;
          background-color: #4692d8;
          text-align: center;
          line-height: 30px;
        }
      }
    }
    .bottom {
      margin-bottom: 10px;
      margin-top: 20px;
      width: 100%;
      display: flex;
      height: 50px;
      .info {
        border-left: 1px solid #e4e4e4;
        width: 50px;
        height: 45px;
        .text {
          text-align: center;
          width: 100%;
          height: 50%;
          color: #666;
          font-size: 12px;
          line-height: 22.5px;
        }
      }
    }
  }
`;
