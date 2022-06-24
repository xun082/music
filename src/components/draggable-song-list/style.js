import styled from "styled-components";

export const SongModelWrapper = styled.div`
  width: 480px;
  height: 380px;
  background-color: #fff;
  position: fixed;
  z-index: 99999;
  top: 100px;
  left: calc(50% - 240px);
  border-radius: 5px;
  box-shadow: 0 5px 16px rgb(0 0 0 / 80%);
  display: ${(props) => (props.isShow === false ? "none" : "block")};
  .header {
    width: 100%;
    height: 38px;
    background-position: 0 -48px;
    padding-left: 20px;
    user-select: none;
    font-weight: bold;
    font-size: 14px;
    color: #fff;
    line-height: 38px;
    position: relative;
    cursor: move;
    border-radius: 5px 5px 0 0;
    .close {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      right: 10px;
      background-position: 0 -95px;
      width: 10px;
      height: 10px;
      cursor: pointer;
    }
  }
  .addSongList {
    cursor: pointer;
    width: 100%;
    padding: 10px 0 10px 35px;
    height: 56px;
    display: flex;
    background: #e6e6e6;
    align-items: center;
    .add {
      background-position: 0 -495px;
      width: 35px;
      height: 36px;
      margin-right: 10px;
      font-size: 12px;
      color: #333;
      font-family: Arial, Helvetica, sans-serif;
      -webkit-text-size-adjust: none;
    }
  }
  .song_List {
    width: 100%;
    height: 286px;
    background-color: #fff;
    overflow-y: scroll;
    &::-webkit-scrollbar {
      width: 10px;
      height: 100%;
      background: transparent;
    }
    &::-webkit-scrollbar-track {
      background: transparent;
    }
    &::-webkit-scrollbar-thumb {
      background-color: transparent;
    }
    .song_card {
      width: 100%;
      height: 55px;
      padding: 6px 0 6px 35px;
      border-bottom: 1px solid #e0e0e0;
      display: flex;
      .info {
        margin-left: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        span {
          cursor: pointer;
        }
        .name {
          color: #000;
        }
        .total {
          color: #666;
        }
      }
    }
  }
`;
