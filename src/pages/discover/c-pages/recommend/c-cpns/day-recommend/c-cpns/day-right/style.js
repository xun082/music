import styled from "styled-components";

export const DayRecommendDescWrapper = styled.div`
  width: 100%;
  height: 200px;

  .header {
    display: flex;
    width: 100%;
    height: 36px;
    align-items: center;
    border-bottom: 1px solid #ccc;
    .img {
      width: 22px;
      height: 22px;
      margin-right: 5px;
      background-position: 0 0;
    }
    .why {
      height: 35px;
      line-height: 35px;
      font-size: 18px;
    }
  }
  .content {
    width: 100%;
    .desc {
      color: #666;
      width: 100%;
      height: 50px;
      padding: 5px 0;
      box-sizing: border-box;
    }
    .info {
      width: 100%;
      height: 200px;
      margin-top: 5px;
      background: #f7f7f7;
      padding: 17px 0 17px 12px;
      .content {
        width: 100%;
        height: 135px;
        .list {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          width: 100%;
          height: 45px;
          color: #999;
          .one {
            background-position: -25px 0;
          }
          .two {
            background-position: 0 -25px;
          }
          .three {
            background-position: -25px -25px;
          }
          .img {
            width: 22px;
            height: 22px;
            margin: 0 8px;
          }
          .number strong {
            color: #c20c0c;
          }
        }
        .you {
          margin-top: 5px;
          margin-bottom: 20px;
        }
      }
    }
  }
`;
