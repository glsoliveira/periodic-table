import styled from 'styled-components';

export const HomeContainer = styled.div`
  background-color: ${props => props.theme['grey-700']}; 
  height: calc(100vh - 40px); 
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px; 
`;

export const Title = styled.h1`
  color: ${props => props.theme['white']};
  margin: 0 0 40px 0; 
  font-size: 4rem; 
  text-align: center;
  word-break: break-all;
  hyphens: auto;

  @media (max-width: 768px) {
    font-size: 2rem; 
  }
`;

export const StyledText = styled.div`
  margin-bottom: 15px; 
`;

export const InputsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px; 
  margin-bottom: 20px; 
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - 10px); 

  @media (max-width: 768px) {
    flex-basis: 100%; 
  }
`;

export const Label = styled.label`
  color: ${props => props.theme['white']};
  font-size: 1rem;
  text-align: left; 
  margin-bottom: 5px;
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: ${props => props.theme['grey-100']}; 
  border: 1px solid transparent; 
  border-radius: 8px;
  padding: 15px;
  
  font-size: 16px;
  width: 100%;
  box-sizing: border-box; 
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme["green-500"]};
  color: ${props => props.theme['white']};
  padding: 15px;
  font-size: 1.25rem;
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 500px; 
  border-radius: 8px;
  align-self: center;

  @media (min-width: 768px) {
    
    width: calc(100% - 20px); 
  }

  &:hover {
    background-color: ${props => props.theme["green-300"]};
  }
`;


