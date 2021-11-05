import styled from "styled-components";

export const RadioCardWrapper = styled.div`
  width: 435px;
  height: 160px;
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  .image {
    width: 120px;
    height: 120px;
    margin-right: 10px;
  }
  .content {
    cursor: pointer;
    width: 305px;
    height: 120px;
    .radio {
      width: 100%;
      white-space: nowrap !important;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333;
      height: 65px;
      font-size: 24px;
      font-weight: 700;
      line-height: 65px;
    }
    .name {
      height: 25px;
      color: #999;
      line-height: 25px;
    }
    .info {
      height: 55px;
      .user {
        height: 20px;
        display: flex;
        .image {
          width: 20px;
          height: 20px;
          background-position: 0 -418px;
        }
        .name {
          width: 100%;
          cursor: pointer;
          text-decoration: none;
          color: #333;
          height: 20px;
          line-height: 20px;
        }
      }
      .anchor-info {
        margin-top: 5px;
        height: 30px;
        padding-top: 5px;
        box-sizing: border-box;
        color: #999999;
        span:nth-child(1) {
          padding-right: 10px;
        }
      }
    }
  }
`;
