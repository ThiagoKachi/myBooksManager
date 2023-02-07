import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 140px;

  padding-bottom: 24px;
`;

export const PageTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.text_dark};
`;
