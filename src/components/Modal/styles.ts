import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View``;

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 0;

  height: 320px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 8px;

  width: 110%;
  margin-left: -19px;
  margin-bottom: -20px;

  padding: 0 16px;
`;

export const CloseModal = styled.TouchableOpacity`
  height: 6px;
  width: 120px;

  margin: 16px auto;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.border};
`;

export const FilterHeader = styled.Text`
  font-size: 16px;

  margin-bottom: 16px;

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.title};

  text-decoration: underline;
`;

export const FilterContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;

  margin: 16px 0;

  border-bottom-color: ${({ theme }) => theme.colors.background};
  border-bottom-width: 1px;

  padding-bottom: 6px;
`;

export const FilterLabel = styled.Text`
  font-size: 22px;

  color: ${({ theme }) => theme.colors.primary};
`;

export const Icon = styled(Feather)`
  font-size: 24px;
  margin-left: 16px;

  color: ${({ theme }) => theme.colors.primary};
`;
