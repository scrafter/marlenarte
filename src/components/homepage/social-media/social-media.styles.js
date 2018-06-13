import styled from 'styled-components';

export const SocialMediaStyled = styled.section`
  padding: 150px 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  
  h1 {
    margin-bottom: 150px;
  }
  div {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  .mdi-icon {
    cursor: pointer;
    transition: all 0.3s ease-in-out;
  }
`;