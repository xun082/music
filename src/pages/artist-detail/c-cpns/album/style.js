import styled from "styled-components";

export const ArtistAlbumWrapper = styled.div`
  padding-right: 10px;
  width: 100%;
  .content {
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 10px;
    .pageNation {
      width: 100%;
      background-color: red;
    }
  }
`;
