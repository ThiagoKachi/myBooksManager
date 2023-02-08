import React from 'react';
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
    <S.Container onPressOut={() => setModalIsOpen(false)}>
      <Modal
        isVisible={modalIsOpen}
        hasBackdrop
        backdropColor="black"
        backdropOpacity={0.7}
        animationIn={'slideInUp'}
        animationOut={'slideOutDown'}
        scrollOffset={0}
      >
        <S.ModalContainer>
          <S.CloseModal />
          <S.FilterHeader>Filtro por status</S.FilterHeader>
          <S.FilterByFinished>
            <S.FilterLabel>Finalizados</S.FilterLabel>
          </S.FilterByFinished>
          <S.FilterByInProgress>
            <S.FilterLabel>Livros que estou lendo</S.FilterLabel>
          </S.FilterByInProgress>
          <S.FilterAll>
            <S.FilterLabel>Todos os livros</S.FilterLabel>
          </S.FilterAll>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}
