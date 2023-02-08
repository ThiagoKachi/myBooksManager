import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 160px;

  padding-bottom: 34px;
`;

export const FilterContainer = styled.View`
  align-items: center;
  flex-direction: row;

  margin: 0 16px;
`;

export const FilterButton = styled.TouchableOpacity``;

export const IconFilter = styled(Feather)`
  font-size: 30px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const SearchInput = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Icon = styled(Feather)`
  position: absolute;
  z-index: 1;
  left: 10px;

  color: ${({ theme }) => theme.colors.border};
  font-size: 20px;
`;

export const Search = styled.TextInput.attrs({
  placeholder: 'Faça sua busca',
})`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  width: 90%;
  padding: 6px 42px;
  border-radius: 6px;

  background-color: ${({ theme }) => theme.colors.shape};
  color: ${({ theme }) => theme.colors.title};
`;

export const PageTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 20px;
`;

export const AppTitle = styled.Text`
  color: ${({ theme }) => theme.colors.shape};

  font-family: ${({ theme }) => theme.fonts.semibold};
  font-size: 20px;

  margin-bottom: 8px;
`;
