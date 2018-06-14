import styled from 'styled-components';
import img from '../../../assets/images/contact-bg.png';
import * as variables from '../../../shared/style-variables';

export const ContactStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 300px;
  background: url(${img}) no-repeat center;
  background-size: cover;
  width: 100%;
  @media (max-width: ${variables.screenL}) {
    padding: 50px 60px;
  }
  @media (max-width: ${variables.screenS}) {
    padding: 50px 20px;
  }
  h1 {
    margin-bottom: 35px;
  }
  form {
    width: 100%;
  }
  input,
  textarea {
    margin-bottom: 15px;
  }
  button {
    @media (max-width: ${variables.screenS}) {
      float: none;
      width: 100%;
    }
  }
`;