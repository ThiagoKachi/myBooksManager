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

export const BookCardContainer = styled.View`
  width: 100%;

  margin-top: 16px;
`;

export const BookCard = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 6px;

  padding: 8px 0;
`;

export const BookDetails = styled.View`
  margin-left: 16px;
`;

export const BookCardImage = styled.Image`
  width: 120px;
  height: 120px;
`;

export const BookCardTitle = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.semibold};

  color: ${({ theme }) => theme.colors.title};
`;

export const BookCardAuthor = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.border_dark};

  margin-top: 8px;
`;

export const BookPages = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.border_dark};

  margin-top: 2px;
`;

export const BookYear = styled.Text`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.border_dark};

  margin-top: 2px;
`;

export const NoBooksFound = styled.Text`
  align-items: center;
  justify-content: center;

  margin-top: 50%;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.border_dark};
`;
