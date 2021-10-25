import styled from "styled-components";

export const RankingLeftWrapper = styled.div`
  width: 100%;
  margin: 10px 0 10px 20px;
  box-sizing: border-box;
  height: 40px;
  .link {
    display: flex;
    &:hover {
      text-decoration: none;
    }
  }
  .image {
    display: block;
    margin-right: 10px;
  }
  .content {
    width: 165px;
    height: 40px;
    .name {
      width: 165px;
      height: 50%;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      line-height: 20px;
      color: #333;
    }
    .name:nth-child(2) {
      color: #666;
    }
  }
`;
