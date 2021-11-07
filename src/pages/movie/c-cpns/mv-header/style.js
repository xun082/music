import styled from "styled-components";

export const MvHeaderWrapper = styled.div`
  width: 100%;
  .header {
    width: 100%;
    height: 30px;
    display: flex;
    .tag {
      width: 30px;
      height: 30px;
      margin-right: 5px;
      background-position: -230px -480px;
    }
    .name {
      height: 30px;
      color: #333;
      font-size: 20px;
      line-height: 20px;
      margin-right: 5px;
    }
    a {
      color: #0c73c2;
      line-height: 30px;
    }
  }

  .control {
    margin-bottom: 40px;
    margin-top: 10px;
    height: 31px;
    width: 100%;
    display: flex;
    div {
      margin-right: 5px;
      height: 100%;
      display: flex;
      line-height: 31px;
      background-position: 0 -59px;
      border-radius: 5px;
      .icon {
        width: 25px;
        height: 100%;
      }
      .text {
        padding-right: 5px;
      }
    }
    .like {
      background-position: 0 -59px;
      .icon {
        background-position: 5px -88.5px;
      }
    }
    .collect {
      .icon {
        background-position: 0 -977px;
      }
    }
    .share {
      .icon {
        background-position: 0 -1225px;
      }
    }
  }
`;
