import styled from 'styled-components/native';

export const Container = styled.ScrollView`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const Form = styled.View`
  flex: 1;
  justify-content: space-between;
  width: 100%;
  padding: 24px;
`;

export const Fields = styled.View``;

export const TransactionsTypes = styled.View`
  flex-direction: row;
  justify-content: space-between;

  margin-bottom: 16px;
`;

export const ButtonContainer = styled.View``;

export const ButtonAddExternal = styled.TouchableOpacity`
  margin: 16px auto;
`;

export const ButtonAddExternalText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.title};

  text-decoration: underline;
`;

export const Button = styled.TouchableOpacity`
  align-items: center;

  width: 100%;
  padding: 16px;
  margin-top: 8px;

  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 16px;

  color: ${({ theme }) => theme.colors.shape};
`;
