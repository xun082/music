import styled from "styled-components";

export const ListCard = styled.div`
  box-sizing: border-box;
  margin: 15px 15px 0 15px;
  width: 215px;
  display: flex;
  justify-content: space-between;
  border: 1px solid #e9e9e9;
  border-left: none;
  height: 62px;

  .a {
    width: 100%;
    height: 100%;
    display: flex;
    .image {
      display: block;
      height: 61px;
      width: 62px;
    }
    .content {
      padding-left: 15px;
      width: 100%;
      height: 100%;

      .name {
        width: 100%;
        line-height: 31px;
        height: 50%;
        color: #666;
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .name:hover {
        text-decoration: none;
      }
      .name:nth-child(1) {
        color: #333;
        font-size: 16px;
      }
    }
  }
`;
