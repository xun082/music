import styled from "styled-components";

export const AnchorRankingWrapper = styled.div`
  width: 425px;
  height: 60px;
  padding: 10px 0;
  display: flex;
  align-items: center;
  &:hover {
    background: #eee;
  }
  .rank {
    width: 40px;
    height: 40px;
  }
  .image {
    position: relative;
    width: 40px;
    height: 40px;
    .hover {
      position: absolute;
      top: 10px;
      left: 10px;
      width: 24px;
      z-index: 1;
      background-position: -43px -53px;
      height: 24px;
      display: none;
    }
  }
  &:hover {
    .image .hover {
      display: block;
    }
  }
  .content {
    box-sizing: border-box;
    margin: 0 5px 0 5px;
    height: 40px;
    width: 210px;
    .text {
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      width: 100%;
      height: 50%;
      line-height: 20px;
      :nth-child(2) {
        color: #999;
      }
    }
  }
  .tag {
    position: relative;
    border: 1px solid #999;
    color: #999;
    width: 120px;
    height: 10px;
  }
`;
