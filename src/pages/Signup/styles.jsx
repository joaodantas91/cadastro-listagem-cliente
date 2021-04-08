import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1110px;
  margin: 40px auto 0;
  padding: 0 10px;
`;

export const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  input {
    margin-bottom: 15px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`; 
