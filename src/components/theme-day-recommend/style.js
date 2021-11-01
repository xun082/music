import styled from "styled-components";

export const ScheduleWrapper = styled.div`
  .day {
    display: block;
    text-decoration: none;
    cursor: pointer;
    width: 140px;
    background-position: -260px -310px;
    .image {
      width: 100%;
      height: 140px;
      .week {
        width: 100%;
        height: 30px;
        line-height: 30px;
        color: #fed9d9;
        font-size: 14px;
        text-shadow: 0 -1px #962626;
        text-align: center;
        text-align: center;
      }
      .data {
        width: 100%;
        height: 110px;
        line-height: 110px;
        text-align: center;
        font-size: 94px;
        font-family: Arial, Helvetica, sans-serif;
        font-weight: bold;
        color: #202020;
      }
    }
  }
`;
