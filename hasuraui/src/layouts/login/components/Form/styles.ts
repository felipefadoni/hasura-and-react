import styled from "styled-components";

export const FormLogin = styled.form`
  display: 1;

  .form-login_input {
    display: flex;
    align-items: center;
    justify-content: start;
    margin-bottom: 1rem;
    span {
      padding: 0.5rem;
      font-size: 1.2rem;
      font-weight: 600;
      width: 70px;
      height: 50px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: red;
      border-radius: 3px 0 0 3px;
      background-color: #363b41;
      border-radius: 3px 0 0 3px;
      color: #606468;
    }
    input {
      border: none;
      padding: 0.5rem;
      height: 50px;
      font-size: 0.9rem;
      font-weight: 400;
      width: 100%;
      background-color: #3b4148;
      border-radius: 0 3px 3px 0;
      color: #606468;
      padding: 0 16px;
      :focus {
        outline: 2px solid #d44179;
      }
    }
  }

  .form-login_button {
    display: flex;
    align-items: center;
    justify-content: center;

    button {
      border: none;
      padding: 0.5rem;
      height: 50px;
      font-size: 0.9rem;
      font-weight: 400;
      width: 100%;
      background-color: #ea4c88;
      border-radius: 3px;
      color: #fff;
      cursor: pointer;
      &:hover {
        background-color: #d44179;
      }
    }
  }

  .form-login_new-user {
    display: flex;
    align-items: center;
    font-size: 0.8rem;
    margin-top: 1rem;
    justify-content: center;
    gap: 0.5rem;

    h4 {
      font-weight: 400;
    }

    span {
      color: #606468;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    a {
      color: #ea4c88;
      &:hover {
        color: #d44179;
      }
    }
  }
`;
