import styled from "styled-components";

export const AnchorBannerWrapper = styled.div`
  width: 100%;
  height: 200px;
  margin-bottom: 20px;
  .banner {
    width: 100%;
    height: 100%;
    .control {
      position: relative;
      top: 80px;
      z-index: 999;
      display: flex;
      .btn {
        position: absolute;
        width: 20px;
        height: 30px;
        background-image: url("https://s2.music.126.net/style/web2/img/index_radio/radio_slide.png?3df082d69f034ec0d17f2e7ab0a60c7a");
        cursor: pointer;
      }
      .left {
        left: -20px;
        background-position: -4px -35px;
      }
      .right {
        left: 905px;
        background-position: -34px -35px;
      }
    }

    .page {
      box-sizing: border-box;
      margin: 0;
      width: 100%;
      height: 200px;
      display: flex !important;
      justify-content: flex-start;
      flex-wrap: wrap;
      .active {
        background-position: -70px 0;
        div {
          color: #d35757 !important;
        }
      }
      .tag {
        border: none;
        background-position: 0 0;
        cursor: pointer;
        margin-bottom: 22px;
        margin-right: 33.4px;
        width: 70px;
        box-sizing: border-box;
        height: 70px;
        :nth-child(9) {
          margin-right: 0;
        }
        :nth-child(18) {
          margin-right: 0;
        }
        .image {
          width: 48px;
          height: 48px;
          margin: 0 0 2px 11px;
          background-position: 0 0;
        }
        .name {
          width: 100%;
          height: 20px;
          line-height: 20px;
          text-align: center;
          color: #888888;
          font-size: 12px;
        }
      }
    }
  }

  .slick-dots li {
    z-index: 0;
    height: 10px !important;
    width: 10px !important;
    button {
      background-color: #333 !important;
    }
  }
  .slick-dots .slick-active {
    height: 10px;
    width: 10px;
    border-radius: 50%;
    button {
      background-color: #c20c0c !important;
    }
  }
  .slick-dots li button {
    height: 10px;
    width: 10px;
    border-radius: 50%;
  }
  .slick-dots-bottom {
    bottom: 0px !important;
  }
`;
