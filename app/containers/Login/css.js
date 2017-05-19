import styled from 'styled-components';

export const WrapperLoginForm = styled.div`
  .login-form {
    max-width: 300px;
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
`;

export const LoginBackground = styled.div`
  display          : flex;
  flex-direction   : column;
  min-height       : 100vh;
  align-items      : center;
  justify-content  : center;
  background-color : #273135;

  form {
    width         : 340px;
    margin        : 0;
    padding       : 3em 2em 2em 2em;
    color         : rgba(0, 0, 0, 0.870588);
    background    : #fafafa;
    border        : 1px solid #273135;
    border-radius : 3px;
  }

  .link-back {
    color         : rgba(0, 0, 0, 0.870588);
  }

  .alert {
    margin-top : 10px;
    margin-bottom : 10px;
  }
`;
