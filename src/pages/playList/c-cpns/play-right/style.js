import styled from "styled-components";

export const PlayRightWrapper = styled.div`
  .header {
    width: 100%;
    height: 20px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
  }
  .avatar {
    width: 220px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    /* column-gap: 20px;
    row-gap: 20px; */
    gap: 20px;
    margin-bottom: 20px;
    .image {
      width: 40px;
      height: 40px;
    }
  }
  .playlist {
    width: 100%;
    height: 50px;
    margin-bottom: 10px;
    display: flex;
    .img {
      width: 50px;
      height: 50px;
      margin-right: 10px;
    }
    .info {
      text-decoration: none;
      width: 160px;
      height: 50px;
      .text {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-wrap: normal;
        width: 100%;
        height: 25px;
        line-height: 25px;
        :nth-child(1) {
          font-size: 14px;
          color: #000;
        }
        :nth-child(2) {
          color: #666;
          font-size: 12px;
        }
      }
    }
  }
`;
