import styled from "styled-components";

export const LyricWrapper = styled.div`
  width: 100%;
  .lyric {
    padding: 10px 0 10px 50px;
    box-sizing: border-box;

    height: ${(props) => (props.unfold === true ? "auto" : "100px")};
    overflow: hidden;
    .lyric_list {
      height: 23px;
      line-height: 23px;
      color: #666666;
      b {
        color: #0c73c2;
      }
    }
  }
  .unfold {
    margin: 10px 0 20px 0;
    width: 100%;
    height: 23px;
    line-height: 23px;
    padding-left: 50px;
    box-sizing: border-box;
    cursor: pointer;
    .icon {
      margin-left: 5px;
    }
  }
`;
