import styled from "styled-components";

export const AlbumMainWrapper = styled.div`
  margin-top: 30px;
  width: 100%;
  height: auto;
  .content {
    .song-header {
      width: 100%;
      height: 34px;
      display: flex;
      div {
        color: #666;
        background-position: 0 -56px;
        height: 100%;
        padding-left: 8px;
        box-sizing: border-box;
        line-height: 34px;
      }
      .none {
        width: 95px;
      }
      .title {
        width: 300px;
      }
      .time {
        width: 90px;
      }
      .singer {
        width: 165px;
      }
    }
    .comment {
      margin-top: 40px;
      .comment-header {
        margin-top: 20px;
        width: 100%;
        height: 22px;
        line-height: 22px;
        border-bottom: 1px solid #cfcfcf;
      }
    }
  }
  .line {
    display: none;
  }
`;
