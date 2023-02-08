import React from 'react';
import { Alert, Text, TouchableOpacity, View } from 'react-native';
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
      >
        <S.ModalContainer>
          <TouchableOpacity onPress={() => setModalIsOpen(false)}>
            <Text>I am the modal content!</Text>
          </TouchableOpacity>
        </S.ModalContainer>
      </Modal>
    </S.Container>
  );
}
