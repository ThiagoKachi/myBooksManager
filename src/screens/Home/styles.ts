import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;
export const Separator = styled.View`
  margin: 0 auto;

  height: 1px;
  width: 90%;
  background-color: ${({ theme }) => theme.colors.border};
`;
