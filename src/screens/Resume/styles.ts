import styled from 'styled-components/native';
import { Entypo, Feather } from '@expo/vector-icons';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const ResumeHeader = styled.View`
  align-items: center;
  justify-content: center;
  flex-direction: row;

  padding: 32px;

  margin-top: 24px;
`;

export const Title = styled.Text`
  width: 180px;

  text-align: center;

  font-size: 28px;
  font-family: ${({ theme }) => theme.fonts.semibold};
  color: ${({ theme }) => theme.colors.title};
`;

export const Icon = styled(Entypo)`
  font-size: 80px;

  margin-left: 20px;

  color: ${({ theme }) => theme.colors.title};
`;

export const ResumeContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;

  width: 90%;
  height: 180px;

  margin: 16px auto;
  padding: 32px;

  border: 1px solid ${({ theme }) => theme.colors.border};
  border-radius: 8px;
`;

export const ResumeCard = styled.View`
  align-items: center;
`;

export const ResumeIcon = styled(Feather)`
  font-size: 50px;

  color: ${({ theme }) => theme.colors.title};
`;

export const ResumeInfo = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.semibold};

  color: ${({ theme }) => theme.colors.title};

  margin-top: 8px;
`;

export const ResumeInfoName = styled.Text`
  margin-top: 4px;

  font-family: ${({ theme }) => theme.fonts.medium};

  color: ${({ theme }) => theme.colors.border_dark};
`;
