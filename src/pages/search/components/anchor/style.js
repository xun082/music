import styled from "styled-components";

export const AnchorWrapper = styled.div`
  width: 150px;
  height: 203px;
  margin-right: 20px;
  margin-bottom: 30px;
  &:nth-child(5n) {
    margin-right: 0;
  }
  img {
    width: 150px;
    height: 150px;
    margin-bottom: 10px;
  }
  .anchor {
    color: #333;
    font-size: 14px;
  }
  .nickname {
    height: 18px;
    line-height: 18px;
  }
`;
