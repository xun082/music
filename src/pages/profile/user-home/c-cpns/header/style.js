import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  img {
    margin-right: 40px;
  }
  .content {
    width: 100%;
    height: 188px;

    .header {
      display: flex;
      height: 30px;
      margin-bottom: 10px;
      div {
        height: 100%;
        line-height: 30px;
        font-size: 22px;
      }
      .name {
        width: auto;
        font-weight: normal;
      }
      .level {
        color: #e03a24;
        font-style: italic;
        margin: 0 10px;
      }
      .button {
        text-align: center;
        width: 80px;
        margin-left: 10px;
        background-color: #757592;
        border-radius: 5px;
        font-size: 16px;
        color: #fff;
      }
    }

    .count {
      margin-bottom: 20px;
      .link {
        font-size: 20px;
        margin-right: 15px;
      }
    }
  }
`;
