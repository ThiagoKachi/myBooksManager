import styled from 'styled-components/native';

interface StatusLabelProps {
  status: 'finished' | 'not_finished' | 'in_progress';
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;

  padding: 24px 112px 16px 16px;
`;

export const Image = styled.Image`
  width: 100px;
  height: 130px;

  border-radius: 12px;
`;

export const BookInfoContainer = styled.View`
  margin-left: 8px;

  justify-content: space-between;
`;

export const BookContainer = styled.View``;

export const Title = styled.Text`
  color: ${({ theme }) => theme.colors.text_dark};

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.semibold};
`;

export const Author = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_text};

  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const BookInfos = styled.View`
  flex-direction: row;
  align-items: center;

  margin: 4px 0;
`;

export const BookCategory = styled(Author)``;

export const Year = styled(Author)``;

export const Divider = styled(Author)`
  margin-left: 8px;

  color: ${({ theme }) => theme.colors.text_dark};
`;

export const Pages = styled(Author)`
  margin-left: 8px;
`;

export const BookStatus = styled.View`
  flex-direction: row;
  align-items: center;

  margin-top: 8px;
`;

export const StatusTitle = styled.Text`
  color: ${({ theme }) => theme.colors.secondary_text};

  margin-right: 8px;
`;

export const StatusLabel = styled.View<StatusLabelProps>`
  padding: 2px 16px;

  border-radius: 12px;

  background-color: ${({ theme, status }) =>
    status === 'finished' ? theme.colors.success : theme.colors.primary_light};
`;

export const Label = styled.Text`
  font-size: 12px;
  color: ${({ theme }) => theme.colors.text};
`;
