import styled from "styled-components";

export const ProgramCardWrapper = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  color: #666;
  border-bottom: 1px solid #c20c0c;
  border-top: none;
  &:hover {
    background-color: #e6e6e6;
  }
  .all {
    height: 55px;
    line-height: 55px;
  }
  .play {
    height: 55px;
    width: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 10px;
    box-sizing: border-box;
    &:hover {
      .icon {
        background-position: 0 -128px;
      }
    }
    .index {
      text-align: center;
      line-height: 18px;
      color: #999;
    }
    .icon {
      background-position: 0 -103px;
    }
    div {
      width: 18px;
      height: 18px;
    }
  }

  .program {
    position: relative;
    width: 240px;
    padding-left: 5px;
    .link {
      display: inline-block;
      max-width: 180px;
    }
    .control {
      z-index: 11;
      position: absolute;
      width: 60px;
      height: 20px;
      display: flex;
      right: 0;
      top: 50%;
      transform: translateY(-50%);
      opacity: 0;
      div {
        flex: 1;
      }
      .add {
        background-position: -21px -695px;
      }
      .share {
        background-position: -45px -155px;
      }
      .down {
        background-position: -103px -170px;
      }
    }
  }
  &:hover {
    .program .control {
      opacity: 1;
    }
  }
  .play-count {
    width: 90px;
    text-align: center;
    padding-left: 5px;
  }
  .liked {
    width: 90px;
    padding-left: 5px;
  }
  .create {
    width: 90px;
    text-align: center;
  }
  .time {
    width: 60px;
  }
`;
