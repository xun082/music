import styled from "styled-components";

export const ArtistCategoryWrapper = styled.div`
  width: 100%;
  height: auto;
  .content {
    width: 100%;
    height: auto;
    .header {
      width: 100%;
      height: 30px;
      font-weight: 700;
      padding-left: 20px;
      line-height: 30px;
      font-size: 16px;
      font-family: "Microsoft Yahei";
    }
    .link {
      text-decoration: none;
    }
    .tag {
      display: block;
      text-decoration: none;
      color: #333;
      width: 160px;
      background-position: 0 -30px;
      margin-left: 10px;
      height: 29x;
      line-height: 29px;
      padding-left: 30px;
      cursor: pointer;
    }
    .bgc {
      background-position: 0 0 !important;
      text-decoration: none;
      color: #c20c0c !important;
    }
  }
`;
