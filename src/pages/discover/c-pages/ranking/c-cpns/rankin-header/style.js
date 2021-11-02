import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;

  .title-image {
    margin-bottom: 40px;
    position: relative;
    padding: 3px;
    border: 1px solid #ccc;

    .msk {
      width: 150px;
      height: 150px;
      background-position: -230px -380px;
      top: 3px;
      left: 3px;
    }
  }

  .title-info {
    margin-left: 35px;
    padding: 16px 0 3px;

    .update-info {
      margin: 0 0 20px;
      line-height: 35px;

      .timer {
        font-size: 15px;
        margin-right: 5px;
      }
    }
  }
`;
