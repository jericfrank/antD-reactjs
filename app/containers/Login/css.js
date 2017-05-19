import styled from 'styled-components';

export const WrapperLoginForm = styled.div`
  .login-form {
    max-width: 500px;
  }

  .login-form-forgot {
    float: right;
  }

  .login-form-button {
    width: 100%;
  }
`;

export const AuthBackground = styled.div`
  display          : flex;
  flex-direction   : column;
  min-height       : 100vh;
  align-items      : center;
  justify-content  : center;
  background-color : #273135;

  .login-form {
    width         : 340px;
    margin        : 0;
    padding       : 3em 2em 2em 2em;
    color         : rgba(0, 0, 0, 0.870588);
    background    : #fafafa;
    border        : 1px solid #273135;
    border-radius : 3px;
  }

  .register-form {
    width         : 500px;
    margin        : 0;
    padding       : 3em 2em 2em 2em;
    color         : rgba(0, 0, 0, 0.870588);
    background    : #fafafa;
    border        : 1px solid #273135;
    border-radius : 3px;
  }
`;

export const DivHeader = styled.div`
  display : block;
  text-align : center;
  padding-bottom: 20px;

  span {
    letter-spacing : 2px;
    text-transform : uppercase;
    line-height    : 170%;
  }
`;

export const Img = styled.img`
  display       : block;
  margin        : auto;
  margin-bottom : 20px;
  width         : 100px;
`;
