import React from 'react';
import { TextInputProps } from 'react-native';

import * as S from './styles';

interface SearchInputProps extends TextInputProps {
  placeholder: string;
}

export function SearchInput({ placeholder, ...rest }: SearchInputProps) {
  return (
    <S.Container>
      <S.SearchInput>
        <S.Search
          {...rest}
          placeholder={placeholder}
          placeholderTextColor="#969CB2"
        />
        <S.Icon name="search" />
      </S.SearchInput>
    </S.Container>
  );
}
