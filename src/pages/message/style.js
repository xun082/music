import styled from "styled-components";

export const MessageWrapper = styled.div`
  background-color: #fff;
  display: flex;
  .left_table {
    width: 185px;
    border-right: 2px solid #f5f5f5;
    padding: 40px 0 40px 0;
    h2 {
      color: #333;
      padding-bottom: 15px;
      padding-left: 40px;
      box-sizing: border-box;
    }
    .table {
      width: 100%;
      background: #f5f5f5;
      .table_list {
        border-top: 1px solid #fff;
        width: 100%;
        height: 55px;
        padding-left: 40px;
        display: flex;
        align-items: center;
        .sprite_icon2 {
          height: 21px;
          width: 21px;
          margin-right: 5px;
          background-color: #f7f7f7;
        }
        .at {
          background-position: -64px -164px;
        }
        .private {
          background-position: -63px -193px;
        }
        .comment {
          background-position: -64px -245px;
        }
        .notify {
          background-position: -58px -399px;
        }
      }
      .active {
        background-color: #fff;
      }
    }
    .read_all {
      width: 112px;
      height: 28px;
      line-height: 28px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      border-radius: 15px;
      text-align: center;
      margin: 20px auto 0;
      font-size: 12px;
      color: rgba(0, 0, 0, 0.8);
      cursor: pointer;
    }
  }
  .right_content {
    width: 100%;
    height: 700px;
    padding: 40px;
    h3 {
      height: 35px;
      border-bottom: 2px solid #d13030;
      line-height: 35px;
      font-weight: 700;
    }
  }
`;
