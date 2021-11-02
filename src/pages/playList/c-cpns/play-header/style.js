import styled from "styled-components";

export const PlayHeaderWrapper = styled.div`
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
      .time {
        height: 35px;
        color: #999;
        line-height: 35px;
      }
    }
    .control {
      margin-top: 20px;
    }
    .tag {
      cursor: pointer;
      height: 22px;
      width: 100%;
      line-height: 22px;
      display: flex;
      color: #666;
      margin-bottom: 10px;
      .icon {
        text-align: center;
        margin-right: 10px;
        width: 50px;
        border: 1px solid #fff;
        border-radius: 5px;
        height: 22px;
      }
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      color: #666;
    }
  }
`;
