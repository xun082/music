import styled from "styled-components";

export const UserEventWrapper = styled.div`
  .wrapper {
    display: flex;
    justify-content: space-between;
    .event-list {
      margin-top: 30px;
      width: 650px;
      .event {
        margin-bottom: 20px;
        .content {
          border-bottom: 1px solid #e8e8e9;
          padding: 10px 10px 10px 55px;
          .title {
            font-size: 14px;
          }
          .song {
            width: 100%;
            height: 60px;
            background: #f5f5f5;
            padding: 10px;
            box-sizing: border-box;
            margin: 4px 0 5px;
            display: flex;
            img {
              width: 40px;
              height: 40px;
              margin-right: 10px;
            }
            .song_name {
              color: #333;
              font-size: 14px;
            }
            .song_create {
              width: auto;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
              color: #666;
            }
          }
          .pics {
            height: auto;
            img {
              width: 100px;
              height: 110px;
              margin: 10px 10px 10px 0;
            }
          }
          .support {
            margin: 15px 0;
            width: 100%;
            height: 14px;
            display: flex;
            justify-content: end;
            align-items: center;
            .common {
              cursor: pointer;
              display: flex;
              padding: 0 10px;
              box-sizing: border-box;
              border-right: 2px solid #c7c7c7;
              &:nth-child(3) {
                border-right: none;
              }
              .info {
                color: #0c73c2;
              }
              .count {
                margin-left: 5px;
              }
            }
            .link {
              .frd_dyn_sprite {
                background-position: 0 -20px;
                width: 15px;
                height: 14px;
                margin-right: 5px;
              }
            }
          }
        }
      }
    }
    .fans {
      width: 225px;
      height: 200px;
      padding-top: 10px;
      box-sizing: border-box;
      h4 {
        height: 23px;
        border-bottom: 1px solid #ccc;
        color: #333;
      }
      .fans_list {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        .list {
          width: 64px;
          height: auto;
          margin-bottom: 20px;
          img {
            width: 64px;
            height: 64px;
          }
          .name {
            color: #333;
            margin: 5px 0;
            cursor: pointer;
          }
        }
      }
    }
  }
`;
