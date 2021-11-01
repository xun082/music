import styled from "styled-components";

export const SongHeaderWrapper = styled.div`
  .ranking-main {
    border: 1px solid #d9d9d9;
    .main-header {
      display: flex;
      .header-item {
        width: 75px;
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
          width: 235px;
          border-right: 1px solid #dadada;
        }
        &.header-time {
          width: 111px;
          border-right: 1px solid #dadada;
        }
        &.header-singer {
          width: 91px;
          border-right: 1px solid #dadada;
        }
        &.header-album {
          width: 127px;
        }
      }
    }
  }
`;
