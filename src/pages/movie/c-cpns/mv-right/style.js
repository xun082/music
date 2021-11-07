import styled from "styled-components";

export const MvMainWrapper = styled.div`
  width: 100%;
  .header {
    width: 100%;
    height: 25px;
    line-height: 25px;
    margin-bottom: 20px;
    border-bottom: 1px solid #ccc;
    color: #333;
  }
  .info {
    width: 100%;
    height: 18px;
    line-height: 18px;
    color: #999;
  }
  .desc {
    margin-top: 10px;
    margin-bottom: 30px;
  }
  .content {
    margin-bottom: 10px;
    width: 100%;
    height: 54px;
    display: flex;
    justify-content: space-between;
    .image {
      width: 96px;
      height: 54px;
      position: relative;
      .count {
        width: 96px;
        z-index: 22;
        position: absolute;
        top: 0;
        left: 6px;
        height: 20px;
        line-height: 20px;
        color: #fff;
        box-sizing: border-box;
        text-shadow: -2px 1px rgb(0 0 0 / 40%);
        display: flex;
        line-height: 20px;
        .icon {
          margin-left: 20px;
          width: 15px;
          height: 20px;
          background-position: -60px -305px;
          margin-right: 5px;
        }
      }
    }

    .info {
      width: 95px;
      height: 54px;
      .name {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        width: 100%;
        height: 18px;
        line-height: 18px;
        color: #999;
      }
    }
  }
`;
