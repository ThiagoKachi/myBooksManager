import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  width: 100%;
`;

export const Search = styled(TextInput)`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  width: 90%;
  padding: 16px 48px;
  border-radius: 6px;

  margin: 0 auto;

  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.title};
`;

export const SearchInput = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  position: absolute;
  z-index: 1;
  left: 32px;

  color: ${({ theme }) => theme.colors.border};
  font-size: 24px;
`;
