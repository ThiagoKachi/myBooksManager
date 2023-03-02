import React, { useState } from 'react';
import { TextInputProps } from 'react-native';
import { ModalConfirmation } from '../Modal';

import * as S from './styles';

interface HeaderProps extends TextInputProps {
  isSearchable: boolean;
  title?: string;
  setModalIsOpen: (value: boolean) => void;
}

export function Header({
  isSearchable = true,
  title,
  setModalIsOpen,
  ...rest
}: HeaderProps) {
  return (
    <S.Container>
      {isSearchable ? <S.AppTitle>MyBooksManager</S.AppTitle> : null}
      {isSearchable ? (
        <S.FilterContainer>
          <S.SearchInput>
            <S.Search {...rest} placeholder="Faça sua busca" />
            <S.Icon name="search" />
          </S.SearchInput>
          <S.FilterButton onPress={() => setModalIsOpen(true)}>
            <S.IconFilter name="filter" />
          </S.FilterButton>
        </S.FilterContainer>
      ) : (
        <S.PageTitle>{title}</S.PageTitle>
      )}
    </S.Container>
  );
}
