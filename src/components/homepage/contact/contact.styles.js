import styled from 'styled-components';
import img from '../../../assets/images/contact-bg.png';

export const ContactStyled = styled.section`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 50px 300px;
  background: url(${img}) no-repeat center;
  background-size: cover;
  width: 100%;
  
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
`;