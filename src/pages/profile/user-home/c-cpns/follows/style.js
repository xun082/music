import styled from "styled-components";

export const FollowWrapper = styled.div`
  .follow {
    height: auto;
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-left: 1px solid #d5d5d5;
    .follow-list:nth-last-child(2),
    .follow-list:nth-last-child(1) {
      border-bottom: 1px solid #d5d5d5;
    }
  }
`;
