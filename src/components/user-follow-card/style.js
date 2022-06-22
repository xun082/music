import styled from "styled-components";

export const FollowWrapper = styled.div`
  width: 100%;
  height: 100px;
  padding: 20px;
  border-right: 1px solid #d5d5d5;
  display: grid;
  grid-template-columns: 60px 4fr 66px;
  grid-gap: 10px;

  .info {
    display: grid;
    grid-template-rows: repeat(3, 1fr);
    .name {
      .nickname {
        color: #0c73c2;
        cursor: pointer;
        margin-right: 10px;
      }
      .gender {
        display: inline-block;
        width: 14px;
        height: 14px;
        background-position: ${(props) =>
          props.genders === 2 ? "-70px 0" : "-70px -20px"};
      }
    }
    .count {
      .link {
        text-decoration: none;
        color: #333;
        padding: 0 5px;
        box-sizing: border-box;
        border-right: 2px solid #999;
        :last-child {
          border: none;
        }
        :first-child {
          padding-left: 0;
        }
      }
      .desc {
        color: #666;
      }
    }
  }
`;
