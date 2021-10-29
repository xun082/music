import styled from "styled-components";

export const RadioCardWrapper = styled.div`
  width: 435px;
  height: 160px;
  padding: 20px 0;
  display: flex;
  border-bottom: 1px solid #e7e7e7;
  .image {
    width: 120px;
    height: 120px;
    margin-right: 10px;
  }
  .content {
    width: 305px;
    height: 120px;
    .radio {
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #333;
      width: 100%;
      height: 65px;
      font-size: 24px;
      font-weight: 700;
      line-height: 65px;
    }
    .name {
      width: 100%;
      height: 25px;
      color: #999;
      line-height: 25px;
    }
  }
`;
