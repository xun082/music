import styled from "styled-components";

export const ArtistCardWrapper = styled.div`
  width: 130px;
  height: 155px;
  margin-bottom: 20px;
  .image {
    width: 130px;
    height: 130px;

    margin-bottom: 5px;
  }
  .info {
    width: 100%;
    height: 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .tag {
      width: 18px;
      height: 18px;
      background-position: 0 -740px;
    }
  }
`;
