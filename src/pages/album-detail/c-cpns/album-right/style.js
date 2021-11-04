import styled from "styled-components";

export const AlbumMainWrapper = styled.div`
  width: 100%;
  .header {
    height: 25px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    .left {
      color: #333;
      height: 25px;
      line-height: 25px;
    }
    .all {
      display: block;
      height: 25px;
      line-height: 25px;
      color: #c20c0c;
    }
  }
  .content {
    cursor: pointer;
    margin-bottom: 10px;
    display: flex;
    height: 50px;
    width: 100%;
    .image {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .text {
      width: 160px;
      height: 100%;
      .name {
        height: 25px;
        line-height: 25px;
        :nth-child(1) {
          font-size: 14px;
          color: #000;
        }
        :nth-child(2) {
          color: #666;
        }
      }
    }
  }
`;
