import styled from "styled-components";

export const ArtistDetailWrapper = styled.div`
  display: flex;
`;

export const ArtistMenu = styled.div`
  width: 640px;
  height: 39px;
  border: 1px solid #ccc;
  border-width: 0 1px;
  background-position: 0 0;
  background-repeat: repeat-x;
  display: flex;
  margin-bottom: 20px;
  .child {
    width: 136px;
    height: 100%;
    &:hover {
      background-position: right -90px;
    }
    a {
      font-weight: 500;
      font-size: 14px;
      cursor: pointer;
      width: 100%;
      display: inline-block;
      height: 39px;
      line-height: 39px;
      color: #333;
      text-align: center;
    }
  }
  .active {
    background-position: right -90px;
  }
`;
