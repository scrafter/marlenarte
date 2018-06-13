import styled from 'styled-components';

export const PortfolioItemStyled = styled.div`
  width: calc(50% - 50px);
  margin-bottom: 90px;
  position: relative;
  
  .photo-box {
    margin-bottom: 30px;
    width: 100%;
    padding-bottom: 100%;
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