import styled from "styled-components";

export const UserSWrapper = styled.div`
  width: 100%;
  height: 50px;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  .user_info {
    width: 460px;
    height: 100%;
    margin-left: 20px;
    display: flex;

    flex-wrap: wrap;
    .name {
      width: 100%;
      display: flex;
      .nickname {
        cursor: pointer;
        color: #0c73c2;
        font-size: 14px;
      }
    }
    .signature {
      color: #999;
    }
  }
  .playlistCount,
  .fans {
    margin-left: 20px;
    color: #999;
  }
`;
