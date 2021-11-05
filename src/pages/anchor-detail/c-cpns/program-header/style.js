import styled from "styled-components";

export const ProgramHeaderWrapper = styled.div`
  width: 100%;
  padding-bottom: 0 !important;
  .header {
    height: 140px;
    display: flex;
    .image {
      width: 140px;
      height: 140px;
      background-color: red;
      margin-right: 10px;
    }
    .content {
      width: 499px;
      height: 140px;
      .title {
        width: 100%;
        display: flex;
        .tag {
          width: 72px;
          height: 24px;
          background-position: 0 -1050px;
          margin-right: 5px;
        }
        .text {
          color: #333;
          font-size: 20px;
        }
      }
      .info {
        margin-top: 10px;
        display: flex;
        .common {
          font-size: 16px;
          height: 25px;
          color: #666;
        }
        .music {
          width: 20px;
          margin-right: 5px;
          background-position: -46px -16px;
        }
        .name {
          height: 25px;
          line-height: 25px;
          width: auto;
          margin-right: 10px;
        }
        .sub {
          position: relative;
          border-radius: 5px;
          width: 100px;
          height: 25px;
          background-position: -3px -2519px;
          .text {
            position: absolute;
            height: 20px;
            line-height: 20px;
            top: 50%;
            color: #fff;
            font-size: 14px;
            transform: translateY(-50%);
            left: 30%;
          }
        }
      }
      .category {
        margin-top: 10px;
        display: flex;
        height: 20px;
        width: 100%;
        .tag {
          line-height: 20px;
          text-align: center;
          width: auto;
          padding: 0 5px;
          height: 100%;
          color: #cc0000;
          border: 1px solid #cc0000;
          margin-right: 10px;
        }
        .text {
          height: 20px;
          font-size: 14px;
          margin-right: 10px;
          line-height: 20px;
        }
      }
      .program {
        margin-top: 10px;
        display: flex;
        height: 20px;
        .count {
          height: 20px;
          line-height: 20px;
          color: #999;
          margin-right: 15px;
          .number {
            color: #c20c0c;
            margin: 0 5px;
          }
        }
      }
    }
  }
  .control {
    margin-top: 20px;
  }
  .desc {
    margin-top: 20px;
    color: #999;
    white-space: pre-wrap;
  }
`;
