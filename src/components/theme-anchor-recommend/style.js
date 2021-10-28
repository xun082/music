import styled from "styled-components";

export const AnchorRecommendWrapper = styled.div`
  width: 425px;
  height: 60px;
  padding: 10px 20px;
  display: flex;
  align-items: center;
  .image {
    width: 40px;
    height: 40px;
  }
  .content {
    box-sizing: border-box;
    margin-left: 5px;
    height: 40px;
    width: 285px;
    margin-right: 5px;
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
    border: 1px solid #999;
    color: #999;
    text-align: center;
    width: 50px;
    height: 20px;
  }
`;
