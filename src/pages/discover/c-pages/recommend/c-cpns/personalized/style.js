import styled from "styled-components";

export const PersonalizedWrapper = styled.div`
  margin-bottom: 40px;
  .content {
    width: 100%;
    height: 200px;
    display: flex;
    justify-content: space-between;
    .day {
      display: block;
      text-decoration: none;
      cursor: pointer;
      margin-top: 10px;
      width: 140px;
      .info {
        width: 100%;
        height: 60px;
        .text {
          box-sizing: border-box;
          padding-top: 5px;
        }
      }
    }
  }
`;
