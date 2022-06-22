import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
  img {
    width: 188px;
    height: 188px;
    margin-right: 40px;
  }
  .content {
    width: 100%;
    height: 188px;
    .header {
      display: flex;
      align-items: center;
      height: 30px;
      margin-bottom: 10px;
      div {
        height: 100%;
      }
      .name {
        color: #000;
        margin-top: 3px;
        font-size: 22px;
        font-weight: normal;
        line-height: 30px;
      }
      .vip {
        width: 57px;
        height: 36px;
        background-size: 100% 20px;
        background-repeat: no-repeat;
        background-position: center;
        float: left;
        margin-left: 10px;
      }
      .level {
        color: #e03a24;
        font-style: italic;
        margin: 0 10px;
        font-size: 14px;
        width: 65px;
        height: 19px;
        line-height: 20px;
        padding-left: 40px;
        background-position: -135px -190px;
      }
      .gender {
        width: 20px;
        height: 20px;
        background-position: ${(props) =>
          props.gender === 1 ? "-41px -57px" : "-41px -27px"};
      }
      .follow {
        width: 75px;
        height: 31px;
        background-position: 0 -720px;
        color: #fff;
        line-height: 31px;
        padding-left: 10px;
        cursor: pointer;
        font-size: 12px;
        margin-left: 10px;
        .cancel {
          width: 70px;
          height: 31px;
          background-position: 0 -919px;
          line-height: 30px;
          padding-left: 26px;
          color: #666;
        }
      }
      .email {
        font-size: 12px;
        width: 75px;
        height: 31px;
        background-position: 0 -810px;
        line-height: 31px;
        margin-left: 10px;
        color: #333;
      }
    }

    .count {
      margin-bottom: 20px;
      .link {
        font-size: 20px;
        margin-right: 15px;
      }
    }
    .signature {
      color: #666;
    }
    .address {
      margin-top: 5px;
    }
  }
`;
