import styled from 'styled-components';

export const TitleHighlight = styled.span`
  background-color: ${props => props.theme.colors.green500};
  color: ${props => props.theme.colors.white};
  padding: ${props => props.theme.spacing[0]} ${props => props.theme.spacing[1]};
`;
