import styled from "styled-components";

export const CommentWrapper = styled.div`
  .comment {
    display: flex;
    margin-bottom: 20px;
    .container {
      padding: 11px 20px 14px 20px;
      background: #f2f2f2;
      width: 100%;
      margin-left: 20px;
      .header {
        display: flex;
        justify-content: space-between;
        height: 21px;
        .nickname {
          color: #0c73c2;
        }
      }
      .content {
        margin: 6px 0 0 0;
        word-break: break-word;
      }
      .source {
        display: flex;
        justify-content: space-between;
        margin-top: 5px;
        .song {
          color: #999;
        }
        .control {
          color: #0c73c2;
          .del {
            opacity: 0;
            cursor: pointer;
            padding-right: 10px;
            border-right: 1px solid #999;
          }

          .reply {
            padding-left: 10px;
            cursor: pointer;
          }
        }
      }
    }
    &:hover {
      .del {
        opacity: 1 !important;
      }
    }
  }
`;
