import styled from "styled-components";

export const CommentFormWrapper = styled.div`
  width: 100%;
  height: 100px;
  margin-top: 20px;
  display: flex;
  .image {
    width: 50px;
    height: 50px;
    img {
      display: block;
      width: 50px;
      height: 50px;
    }
  }
  .form {
    margin-left: 5px;
    width: 605px;
    height: 100%;
    .input {
      width: 100%;
      height: 65px;
      .textArea {
        height: 65px;
        width: 100%;
        resize: none;
      }
    }
    .form-control {
      margin-top: 10px;
      height: 25px;
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left-icon {
        height: 18px;
        width: auto;
        display: flex;
        div {
          height: 100%;
          width: 18px;
        }
        .ai-te {
          background-position: -65px -166px;
        }
        .express {
          margin-right: 12px;
          background-position: -40px -490px;
        }
      }
      .button {
        height: 25px;
        width: 46px;
        text-align: center;
        line-height: 25px;
        color: #fff;
        background-position: -84px -64px;
        background-repeat: repeat-x;
        cursor: pointer;
      }
    }
  }
`;
