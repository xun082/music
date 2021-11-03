import styled from "styled-components";

export const ArtistRightWrapper = styled.div`
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
    grid-template-columns: 1fr 1fr 1fr;
    gap: 30px;
    margin-bottom: 20px;
    .image {
      width: 50px;
      height: 71px;
      .img {
        width: 50px;
        height: 50px;
      }
      .name {
        margin-top: 5px;
        text-align: center;
        width: 100%;
        height: 16px;
        line-height: 16px;
      }
    }
  }
`;
