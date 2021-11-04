import styled from "styled-components";

export const AlbumHeaderWrapper = styled.div`
  width: 100%;
  .header {
    display: flex;
    width: 100%;
    .image {
      width: 210px;
      height: 177px;
      background-position: 0 -986px;
      margin-right: 10px;
    }
    .info {
      height: 177px;
      .tag {
        height: 24px;
        display: flex;
        .icon {
          width: 54px;
          height: 100%;
          background-position: 0 -186px;
          margin-right: 10px;
        }
        .name {
          height: 24px;
          line-height: 24px;
          font-size: 20px;
        }
      }
      .singer {
        margin-top: 5px;
        height: 18px;
        color: #666;
        .link {
          color: #0c73c2;
          margin-left: 5px;
        }
      }
      .time {
        height: 18px;
        line-height: 18px;
        margin-top: 5px;
      }
      .compony {
        height: 18px;
        line-height: 18px;
        margin-top: 5px;
      }
      .control {
        margin-top: 10px;
      }
    }
  }
  .desc {
    margin-top: 15px;
    .title {
      color: #333;
      font-weight: 700;
    }
    .text {
      white-space: pre-wrap;
    }
  }
`;
