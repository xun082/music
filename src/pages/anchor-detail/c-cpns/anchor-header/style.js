import styled from "styled-components";

export const AnchorHeaderWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: space-between;
  .image {
    width: 200px;
    height: 200px;
  }
  .content {
    width: 420px;
    height: 100%;
    .title {
      display: flex;
      height: 24px;
      width: 100%;
      .tag {
        margin-right: 10px;
        width: 54px;
        height: 100%;
        background-position: 0 -243px;
      }
      .text {
        height: 100%;
        line-height: 24px;
        font-size: 20px;
        font-weight: normal;
      }
    }
    .user-info {
      width: 100%;
      height: 35px;
      margin-top: 10px;
      display: flex;
      .image {
        height: 35px;
        line-height: 35px;
        width: 35px;
        margin-right: 5px;
      }
      .name {
        color: #0c73c2;
        display: block;
        height: 35px;
        line-height: 35px;
        text-decoration: none;
        margin-right: 10px;
      }
    }
    .control {
      margin-top: 10px;
    }
    .category {
      margin-top: 10px;
      .icon {
        width: 60px;
        height: 18px;
        text-align: center;
        line-height: 18px;
        color: #cc0000;
        border: 1px solid #cc0000;
        margin-right: 5px;
        display: inline-block;
      }
      .desc {
        color: #666;
      }
    }
  }
`;
