import styled from "styled-components";

export const AnchorWrapper = styled.div`
  border: 1px solid #d3d3d3;
  padding: 40px;
  .content {
    width: 100%;
    height: auto;
    .banner-category {
      margin-bottom: 40px;
    }
    .recommend {
      display: flex;
      justify-content: space-between;
      width: 100%;
    }
    .radio-station {
      margin-top: 20px;

      .item {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        margin-bottom: 20px;
      }
    }
  }
`;
