import styled from "styled-components";

export const RanKingMainWrapper = styled.div`
  /* 修改自定义组件默认样式 */
  .limTJz {
    padding-left: 0;
    padding-right: 0;
  }
  .sc-kEjbQP {
    margin-top: 20px;
  }
  .line {
    display: none;
  }
  .ranking-main {
    border: 1px solid #d9d9d9;

    .main-header {
      display: flex;
      .header-item {
        width: 74px;
        height: 34px;
        line-height: 18px;
        padding: 8px 10px;
        background-position: 0 0;
        background-repeat: repeat-x;
        background-color: #f2f2f2;
        color: #666;

        &:first-child {
          border-right: 1px solid #dadada;
        }
        &.header-title {
          width: 327px;
          border-right: 1px solid #dadada;
        }
        &.header-singer {
          width: 173px;
        }
        &.header-time {
          width: 91px;
          border-right: 1px solid #dadada;
        }
      }
    }

    .main-list {
      .song_item:nth-child(odd) {
        background: #f7f7f7 !important;
      }
      .song_item:nth-child(-n + 3) {
        height: 70px !important;
      }
    }
  }
  .comment {
    width: 100%;
    height: auto;
    margin-top: 40px;
    .comment-control {
      width: 100%;
      height: auto;
    }
    .comment-list {
      margin-top: 20px;
      .hot-title a {
        font-size: 12px;
        color: #333;
      }
    }
  }
`;
