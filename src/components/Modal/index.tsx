import React from 'react';
import { TouchableWithoutFeedback } from 'react-native';
import Modal from 'react-native-modal';

import { BookStatus } from '../../screens/Home';

import * as S from './styles';

interface ModalConfirmationProps {
  setModalIsOpen: (newValue: boolean) => void;
  modalIsOpen: boolean;
  handleSearchBookByStatus: (status: BookStatus) => void;
}

export function ModalConfirmation({
  setModalIsOpen,
  modalIsOpen,
  handleSearchBookByStatus,
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
            <S.FilterContainer
              onPress={() => handleSearchBookByStatus('finished')}
            >
              <S.FilterLabel>Finalizados</S.FilterLabel>
              <S.Icon name="book" />
            </S.FilterContainer>
            <S.FilterContainer
              onPress={() => handleSearchBookByStatus('in_progress')}
            >
              <S.FilterLabel>Livros que estou lendo</S.FilterLabel>
              <S.Icon name="book-open" />
            </S.FilterContainer>
            <S.FilterContainer
              onPress={() => handleSearchBookByStatus('my_list')}
            >
              <S.FilterLabel>Minha lista</S.FilterLabel>
              <S.Icon name="bookmark" />
            </S.FilterContainer>
            <S.FilterContainer>
              <S.FilterLabel
                onPress={() => handleSearchBookByStatus('all_books')}
              >
                Todos os livros
              </S.FilterLabel>
              <S.Icon name="layers" />
            </S.FilterContainer>
          </S.ModalContainer>
        </TouchableWithoutFeedback>
      </Modal>
    </S.Container>
  );
}
