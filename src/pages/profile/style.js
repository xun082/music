import styled from "styled-components";

export const ProfileWrapper = styled.div`
  padding: 40px;
  height: auto;
  background-color: #fff;
  .user-info {
    display: flex;
    .user-pic {
      margin-right: 40px;
      img {
        padding: 3px;
        background: #fff;
        border: 1px solid #d5d5d5;
      }
    }
    .user-detail {
      .dynamic-wrap {
        display: flex;
      }
      padding-top: 10px;
      width: 100%;
      height: 52px;
      padding-bottom: 12px;
      margin-bottom: 10px;
      border-bottom: 1px solid #ddd;
      .nickname-wrap {
        display: flex;
        position: relative;
        .update-info {
          position: absolute;
          right: 0;
          width: 110px;
          text-decoration: none;
          height: 30px;
          color: #333;
          background-position: -10px -305px;
          text-align: center;
          border-radius: 3px;
          line-height: 30px;
        }
        .nickname {
          font-size: 22px;
          font-weight: normal;
          line-height: 30px;
        }
        .lev {
          display: flex;
          margin: 3px 5px 0 10px;
          display: inline-block;
          height: 19px;
          overflow: hidden;
          padding-left: 29px;
          line-height: 21px;
          color: #e03a24;
          font-size: 14px;
          font-weight: bold;
          font-style: italic;
          background-position: -135px -190px;
          vertical-align: middle;
          i {
            width: 9px;
            height: 19px;
            background-position: -191px -190px;
            display: inline-block;
            overflow: hidden;
            vertical-align: middle;
          }
        }
        .gender-icon {
          font-size: 16px;
          color: #e60026;
          &.man {
            color: #26a6e4;
          }
        }
      }
      .dynamic-wrap {
        margin-top: 18px;
        .dynamic-item {
          padding-right: 40px;

          .count {
            display: block;
            margin-top: -4px;
            font-size: 24px;
            font-weight: normal;
            cursor: pointer;
          }
          span {
            display: block;
            text-indent: 2px;
            cursor: pointer;
          }
        }
      }
      .recommend {
        margin: 15px 0;
      }
    }
  }
  .play-record {
    margin-top: 40px;
    .record-list {
      width: 100%;
    }
    .line {
      display: none;
    }
  }
  .play-list {
    margin-top: 25px;
    .playlist {
      display: flex;
      flex-wrap: wrap;
      .hzuIGv {
        margin-bottom: 0;
        margin-right: 40px;
      }
    }
    .creator {
      &:hover {
        text-decoration: underline;
        cursor: pointer;
      }
    }
  }
`;
