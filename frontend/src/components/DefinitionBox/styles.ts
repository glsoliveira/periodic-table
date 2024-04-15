import styled from 'styled-components';

export const BoxContainer = styled.div`
  background-color: ${props => props.theme.colors.darkBlue};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing[4]};
  border-radius: ${props => props.theme.borderRadius.default};
  font-family: Arial, sans-serif;
`;

export const InfoText = styled.div`
  white-space: pre-wrap;
  font-size: ${props => props.theme.fontSize.base};
  line-height: ${props => props.theme.lineHeight.relaxed};
  margin-bottom: ${props => props.theme.spacing[4]};
`;

export const Title = styled.span`
  font-weight: bold;
  color: ${props => props.theme.colors.gray500}; // Utilizando uma cor destacada para os títulos
`;

export const Content = styled.p`
  margin-top: ${props => props.theme.spacing[1]};
  margin-bottom: ${props => props.theme.spacing[1]};
`;


export const SymbolHeader = styled.h3`
  color: ${props => props.theme.colors.green300};
  margin-bottom: ${props => props.theme.spacing[2]};
`;

export const DefinitionText = styled.p`
  color: ${props => props.theme.colors.gray300};
  font-size: ${props => props.theme.fontSize.base};
  line-height: ${props => props.theme.lineHeight.snug};
`;
