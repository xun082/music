import styled from "styled-components";

export const ArtistDescWrapper = styled.div`
  width: 100%;
  padding-right: 10px;
  box-sizing: border-box;
  .content {
    width: 100%;
    .header {
      margin: 28px 0 8px 0;
      color: #333;
      font-size: 14px;
      border-left: 4px solid #c10d0c;
      padding-left: 5px;
      box-sizing: border-box;
      font-weight: 700;
    }
    .info {
      white-space: pre-wrap;
      line-height: 25px;
      color: #666;
      text-indent: 2em;
    }
    .desc {
      white-space: pre-wrap;
      margin: 28px 0 0 0;
      color: #333;
      font-size: 14px;
      .title {
        font-weight: 700;
      }
      .works {
        white-space: pre-wrap;
        color: #666;
      }
    }
  }
`;
