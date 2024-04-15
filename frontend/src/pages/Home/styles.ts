import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: ${props => props.theme.spacing[4]}; 
`;

export const Title = styled.h1`
  color: ${props => props.theme.colors.white};
  margin: 0 0 ${props => props.theme.spacing[10]} 0;
  font-size: ${props => props.theme.fontSize.xl};
  height: 10rem;
  text-align: center;
  word-break: break-all;
  hyphens: auto;

  @media (max-width: ${props => props.theme.screens.md}) {
    margin-bottom: ${props => props.theme.spacing[15]};
    font-size: ${props => props.theme.fontSize['2xl']};
    height: 6rem;
  }
`;

export const StyledText = styled.div`
  margin-bottom: ${props => props.theme.spacing[3]}; 
`;

export const InputsContainer = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: ${props => props.theme.spacing[4]};
  margin-bottom: ${props => props.theme.spacing[4]};
`;

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: calc(50% - ${props => props.theme.spacing[2]}); 

  @media (max-width: ${props => props.theme.screens.md}) {
    flex-basis: 100%; 
  }
`;

export const Label = styled.label`
  color: ${props => props.theme.colors.white};
  font-size: ${props => props.theme.fontSize.base};
  text-align: left; 
  margin-bottom: ${props => props.theme.spacing[1]};
  font-weight: bold;
`;

export const Input = styled.input`
  background-color: ${props => props.theme.colors.grey100}; 
  border: 1px solid transparent; 
  border-radius: 8px;
  padding: ${props => props.theme.spacing[3]};
  font-size: ${props => props.theme.fontSize.base};
  width: 100%;
  box-sizing: border-box; 
  &:focus {
    outline: none;
  }
`;

export const Button = styled.button`
  background-color: ${props => props.theme.colors.green500};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing[3]};
  font-size: ${props => props.theme.fontSize.lg};
  border: none;
  cursor: pointer;
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
  align-self: center;
  margin-bottom: ${props => props.theme.spacing[4]};

  @media (min-width: ${props => props.theme.screens.md}) {
    width: calc(100% - ${props => props.theme.spacing[4]});
  }

  &:hover {
    background-color: ${props => props.theme.colors.green300};
  }

  &:disabled {
    background-color: ${props => props.theme.colors.gray500}; 
    color: ${props => props.theme.colors.gray300}; 
    cursor: not-allowed; 
    opacity: 0.7; 
  }
`;
