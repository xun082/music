import styled from "styled-components";

export const ThemeAnchorExcellentWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  .content {
    height: 220px;
    width: 150px;
    .image {
      width: 150px;
      height: 150px;
    }
    .name {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      color: #333;
      font-weight: 700;
      height: 30px;
      line-height: 30px;
      width: 100%;
      font-size: 14px;
    }
    .desc {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
      width: 100%;
      height: 40px;
    }
  }
`;
