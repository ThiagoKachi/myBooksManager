import React from 'react';

import * as S from './styles';

interface HeaderProps {
  isSearchable: boolean;
  title?: string;
}

export function Header({ isSearchable = true, title }: HeaderProps) {
  return (
    <S.Container>
      {isSearchable ? <S.AppTitle>MyBooksManager</S.AppTitle> : null}
      {isSearchable ? (
        <S.SearchInput>
          <S.Search />
          <S.Icon name="search" />
        </S.SearchInput>
      ) : (
        <S.PageTitle>{title}</S.PageTitle>
      )}
    </S.Container>
  );
}
