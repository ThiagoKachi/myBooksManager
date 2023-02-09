import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';

import * as S from './styles';

interface ModalConfirmationProps {
  setModalIsOpen: (newValue: boolean) => void;
  modalIsOpen: boolean;
}

export function ModalConfirmation({
  setModalIsOpen,
  modalIsOpen,
}: ModalConfirmationProps) {
  return (
    <S.Container>
      <Modal
        isVisible={modalIsOpen}
        hasBackdrop
        backdropColor="black"
        backdropOpacity={0.7}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        scrollOffset={0}
        onBackdropPress={() => setModalIsOpen(false)}
      >
        <TouchableWithoutFeedback>
          <S.ModalContainer>
            <S.CloseModal onPress={() => setModalIsOpen(false)} />
            <S.FilterHeader>Filtro por status</S.FilterHeader>
            <S.FilterContainer>
              <S.FilterLabel>Finalizados</S.FilterLabel>
              <S.Icon name="book" />
            </S.FilterContainer>
            <S.FilterContainer>
              <S.FilterLabel>Livros que estou lendo</S.FilterLabel>
              <S.Icon name="book-open" />
            </S.FilterContainer>
            <S.FilterContainer>
              <S.FilterLabel>Todos os livros</S.FilterLabel>
              <S.Icon name="layers" />
            </S.FilterContainer>
          </S.ModalContainer>
        </TouchableWithoutFeedback>
      </Modal>
    </S.Container>
  );
}
