import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  .more {
    height: 32px;
    line-height: 32px;
    text-align: right;
    width: 100%;
    color: #666;
  }

  .song_card {
    padding-top: 20px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 30px;
  }
`;
