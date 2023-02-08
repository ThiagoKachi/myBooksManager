import styled from 'styled-components/native';

export const Container = styled.TouchableWithoutFeedback``;

export const ModalContainer = styled.View`
  position: absolute;
  bottom: 0;

  height: 230px;

  background-color: ${({ theme }) => theme.colors.shape};

  border-radius: 8px;

  width: 110%;
  margin-left: -19px;
  margin-bottom: -20px;
`;

export const CloseModal = styled.View`
  height: 4px;
  width: 120px;

  margin: 16px auto;

  border-radius: 50%;

  background-color: ${({ theme }) => theme.colors.border};
`;

export const FilterHeader = styled.Text``;

export const FilterByFinished = styled.TouchableOpacity``;

export const FilterByInProgress = styled.TouchableOpacity``;

export const FilterAll = styled.TouchableOpacity``;

export const FilterLabel = styled.Text``;
