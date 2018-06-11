import styled from 'styled-components';

export const PortfolioItemStyled = styled.div`
  width: calc(50% - 60px);
  margin-bottom: 90px;
  
  .photo-box {
    margin-bottom: 30px;
    height: 550px;
    width: 550px;
    background-size: cover;
    background-position: center;
  }
  
  p {
    text-transform: capitalize;
    font-size: 20px;
    font-weight: 300;
    color: #000;
    line-height: 1.5em;
  }
`;