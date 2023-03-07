import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';
import { BookStatus } from '../../models/book';

import * as S from './styles';

interface ChangeStatusModalProps {
  setModalIsOpen: (newValue: boolean) => void;
  modalIsOpen: boolean;
  handleChangeStatus: (status: BookStatus) => void;
}

export function ChangeStatusModal({
  setModalIsOpen,
  modalIsOpen,
  handleChangeStatus,
}: ChangeStatusModalProps) {
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
            <S.ChangeStatusHeader>Mudar o status</S.ChangeStatusHeader>
            <S.ChangeStatusContainer
              onPress={() => handleChangeStatus('finished')}
            >
              <S.FilterLabel>Finalizado</S.FilterLabel>
              <S.Icon name="book" />
            </S.ChangeStatusContainer>
            <S.ChangeStatusContainer
              onPress={() => handleChangeStatus('in_progress')}
            >
              <S.FilterLabel>Estou lendo</S.FilterLabel>
              <S.Icon name="book-open" />
            </S.ChangeStatusContainer>
            <S.ChangeStatusContainer
              onPress={() => handleChangeStatus('my_list')}
            >
              <S.FilterLabel>Minha lista</S.FilterLabel>
              <S.Icon name="bookmark" />
            </S.ChangeStatusContainer>
          </S.ModalContainer>
        </TouchableWithoutFeedback>
      </Modal>
    </S.Container>
  );
}
