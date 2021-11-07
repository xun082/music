import styled from "styled-components";

export const SongHeaderWrapper = styled.div`
  display: flex;
  .image {
    width: 205px;
    height: 205px;
    margin-right: 15px;
    background-position: -141px -580px;
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      border-radius: 50%;
    }
  }
  .content {
    width: 410px;
    .header {
      display: flex;
      height: 24px;
      width: 100%;
      align-items: center;
      margin-bottom: 10px;
      .category {
        width: 54px;
        height: 100%;
        margin-right: 10px;
        background-position: 0 -463px;
      }
      .name {
        height: 24px;
        line-height: 24px;
        font-size: 24px;
        color: #333;
        margin-right: 10px;
      }
      .mv {
        width: 21px;
        height: 18px;
        background-position: 0 -18px;
      }
    }
    .info {
      margin-bottom: 10px;
      .text {
        color: #999;
        margin-right: 5px;
      }
      a {
        color: #0c73c2;
      }
    }
    .control {
      width: 100%;
      height: 31px;
      margin-bottom: 30px;
    }
    .lyric {
      white-space: pre-wrap;
      color: #666;
      .lyric-list {
        margin-bottom: 5px;
        white-space: pre-wrap;
      }
    }
  }
`;
