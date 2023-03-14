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

  width: 250px;
  height: 300px;

  margin-top: -180px;
`;

export const BookContainer = styled.View`
  padding: 0 32px;

  align-items: flex-start;
  justify-content: center;
`;

export const Name = styled.Text`
  text-align: justify;

  font-size: 22px;
  font-family: ${({ theme }) => theme.fonts.semibold};

  color: ${({ theme }) => theme.colors.text_dark};

  margin-top: 16px;
`;

export const Author = styled.Text`
  margin-top: 8px;

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

export const ChangeStatusButton = styled.View`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;

  width: 85%;
  margin: 8px auto;
  padding: 16px 0;
`;

export const StatusButton = styled.TouchableOpacity``;

export const StatusMessage = styled.Text`
  font-size: 14px;
  text-decoration: underline;

  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.primary};
`;

export const StatusContainer = styled.View`
  display: flex;
  align-items: center;
  flex-direction: row;
`;

export const Label = styled(Year)`
  color: ${({ theme }) => theme.colors.shape};
`;

export const LabelText = styled(Year)`
  color: ${({ theme }) => theme.colors.title};

  margin-right: 8px;
`;

export const ResumeContainer = styled.ScrollView``;

export const Resume = styled.Text`
  padding: 8px 32px;

  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.regular};

  color: ${({ theme }) => theme.colors.title};
`;
