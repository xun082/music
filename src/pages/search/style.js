import styled from "styled-components";

export const SearchWrapper = styled.div`
  padding: 40px;
  height: auto;
  background-color: #fff;
  position: relative;
  .search {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .suggest {
    display: ${(props) => (props.isVisible === false ? "none" : "block")};
    width: 400px;
    left: 50%;
    transform: translateX(-50%);
    top: 80px;
    height: auto;
    position: absolute;
    z-index: 120;
    box-sizing: border-box;
    border: 1px solid #bebebe;
    border-radius: 4px;
    background: #fff;
    box-shadow: 0 4px 7px #555;
    text-shadow: 0 1px 0 rgb(255 255 255 / 90%);
    .title {
      width: 100%;
      height: 30px;
      border-bottom: 1px solid #e2e2e2;
      line-height: 30px;
      padding-left: 10px;
    }
    .common {
      height: auto;
      width: 100%;
      display: grid;
      grid-template-columns: 1fr 4fr;

      .name {
        text-align: center;
        height: auto;
        border-right: 1px solid gray;
      }
      .list {
        width: 100%;
        height: auto;
        border-bottom: 1px solid gray;
        .item {
          width: 100%;
          height: 20px;
          line-height: 20px;
          box-sizing: border-box;
          padding-left: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .count {
    margin: 28px 0 17px;
    color: #999;
  }
  .tab {
    width: 100%;
    height: 39px;
    border: 1px solid #ccc;
    border-width: 0 1px;
    background-position: 0 0;
    background-repeat: repeat-x;
    display: flex;
    margin: 20px 0;
    .child {
      width: 136px;
      height: 100%;
      &:hover {
        background-position: right -90px;
      }
      a {
        font-weight: 500;
        font-size: 14px;
        cursor: pointer;
        width: 100%;
        display: inline-block;
        height: 39px;
        line-height: 39px;
        color: #333;
        text-align: center;
      }
    }
    .active {
      background-position: right -90px;
    }
  }
  .result {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-gap: 20px;
  }
`;
