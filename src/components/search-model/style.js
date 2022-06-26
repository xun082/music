import styled from "styled-components";

export const SearchModelWrapper = styled.div`
  height: auto;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 4fr;

  .name {
    text-align: center;
    height: auto;
    border-right: 1px solid gray;
  }
  .list {
    width: 100%;
    height: auto;
    border-bottom: 1px solid gray;
    .item {
      display: block;
      width: 100%;
      height: 20px;
      line-height: 20px;
      box-sizing: border-box;
      padding-left: 10px;
      cursor: pointer;
    }
  }
`;
