import styled from "styled-components";

export const AlbumWrapper = styled.div`
  width: ${(props) => props.width + "px"};

  .album-image {
    position: relative;
    width: ${(props) => props.width + "px"};
    height: ${(props) => props.size + "px"};
    overflow: hidden;
    margin-top: 15px;
    .play {
      position: absolute;
      width: ${(props) => props.play + "px"};
      height: ${(props) => props.play + "px"};
      right: 30px;
      display: none;
      bottom: 5px;
      background-position: ${(props) => props.play_bgp};
    }
    &:hover .play {
      display: block !important;
    }
    img {
      width: ${(props) => props.size + "px"};
      height: ${(props) => props.size + "px"};
    }

    .cover {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background-position: 0 ${(props) => props.bgp};
      text-indent: -9999px;
    }
  }

  .album-info {
    font-size: 13px;
    width: ${(props) => props.size};
    .name {
      cursor: pointer;
      margin: 5px 0;
      color: #000;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
    }
    .artist {
      cursor: pointer;
      color: #666;
    }
  }
`;
