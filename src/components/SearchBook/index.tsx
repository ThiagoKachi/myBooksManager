import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { SearchInput } from '../SearchInput';

import * as S from './styles';

interface SearchBookProps {
  setBookSearchModalOpen: (value: boolean) => void;
}

export function SearchBook({ setBookSearchModalOpen }: SearchBookProps) {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.BackContainer>
          <S.Title>Busca de livros</S.Title>
          <S.BackButton onPress={() => setBookSearchModalOpen(false)}>
            <S.Icon name="x-circle" />
          </S.BackButton>
        </S.BackContainer>
        <SearchInput placeholder="Busque pelo nome do livro" />
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
