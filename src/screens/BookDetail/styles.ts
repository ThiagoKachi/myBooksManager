import styled from 'styled-components/native';
import { Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const Header = styled.View`
  background-color: ${({ theme }) => theme.colors.primary};

  align-items: center;
  justify-content: flex-end;

  width: 100%;
  height: 250px;
`;

export const BackContainer = styled.TouchableOpacity`
  position: absolute;
  left: 7%;
  top: 7%;
`;

export const Icon = styled(Feather)`
  font-size: 40px;

  color: ${({ theme }) => theme.colors.shape};
`;

export const Image = styled.Image`
  margin: 0 auto;

  width: 300px;
  height: 300px;

  margin-top: -160px;
`;

export const BookContainer = styled.View`
  align-items: center;
  justify-content: center;
`;

export const Name = styled.Text`
  margin-top: 16px;

  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.semibold};

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Author = styled.Text`
  margin-top: 2px;

  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.semibold};

  color: ${({ theme }) => theme.colors.title};
`;

export const Gender = styled.Text`
  margin-top: 8px;

  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.border_dark};
`;

export const PageYear = styled.View`
  flex-direction: row;

  margin-top: 8px;
`;

export const Year = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.border_dark};
`;

export const Pages = styled(Year)`
  margin-left: 16px;
`;

export const ResumeContainer = styled.ScrollView``;

export const Resume = styled.Text`
  margin-top: 16px;

  padding: 32px;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.title};
`;
