import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface HeaderProps extends TextInputProps {
  isSearchable: boolean;
  title?: string;
  setModalIsOpen?: (value: boolean) => void;
  headerHeight?: string;
}

export function Header({
  isSearchable = true,
  title,
  setModalIsOpen,
  headerHeight = '140px',
  ...rest
}: HeaderProps) {
  function handleOpenModal() {
    if (!setModalIsOpen) {
      return;
    }
    setModalIsOpen(true);
  }

  return (
    <S.Container headerHeight={headerHeight}>
      {isSearchable ? <S.AppTitle>MyBooksManager</S.AppTitle> : null}
      {isSearchable ? (
        <S.FilterContainer>
          <S.SearchInput>
            <S.Search {...rest} placeholder="Faça sua busca" />
            <S.Icon name="search" />
          </S.SearchInput>
          <S.FilterButton onPress={handleOpenModal}>
            <S.IconFilter name="filter" />
          </S.FilterButton>
        </S.FilterContainer>
      ) : (
        <S.PageTitle>{title}</S.PageTitle>
      )}
    </S.Container>
  );
}
