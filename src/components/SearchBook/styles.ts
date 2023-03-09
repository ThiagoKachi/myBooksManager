import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;

  align-items: center;

  background-color: ${({ theme }) => theme.colors.primary_dark};
`;

export const BackContainer = styled.View`
  margin-top: 60px;
  margin-bottom: 40px;

  width: 100%;

  padding: 0 24px;

  align-items: center;
  justify-content: space-between;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.shape};

  margin-top: 4px;
  margin-left: 16px;
`;

export const BackButton = styled.TouchableOpacity`
  position: absolute;
  left: 7%;
  top: 7%;
`;

export const Icon = styled(Feather)`
  font-size: 40px;

  color: ${({ theme }) => theme.colors.shape};
`;
