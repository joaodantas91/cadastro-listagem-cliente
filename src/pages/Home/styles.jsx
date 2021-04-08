import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1110px;
  margin: 40px auto 0;
  padding: 0 10px;
  
  .row {
    display: flex;
    flex-wrap: wrap;
    margin-left: -10px;
    margin-right: -10px;
    .column {
      width: 33%;
      padding: 0 10px;
    }
  }
`;

export const CardCostumer = styled.div`
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
  
  width: 100%;
  padding: 20px;
  margin: 0 auto;
  margin-bottom: 15px;
`;

