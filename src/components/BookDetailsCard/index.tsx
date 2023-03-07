import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { BookProps } from '../../models/book';
import { decodeStatus } from '../../utils/decodeStatus';

import * as S from './styles';

type ParamNavigation = {
  id: string;
};

export type NavigationProps = {
  navigate: (screen: string, param: ParamNavigation) => void;
};

export interface BookDetailsCardProps extends TouchableOpacityProps {
  book: BookProps;
}

export function BookDetailsCard({ book, ...rest }: BookDetailsCardProps) {
  const bookImage = book.image
    ? { uri: book.image }
    : require('../../assets/book_default1.png');

  return (
    <S.Container {...rest}>
      <S.Image style={{ resizeMode: 'contain' }} source={bookImage} />
      <S.BookInfoContainer>
        <S.BookContainer>
          <S.Title>{book.title}</S.Title>
          <S.Author>{book.author}</S.Author>
        </S.BookContainer>
        <S.BookInfos>
          <S.Year>Ano: {book.year}</S.Year>
          <S.Divider>•</S.Divider>
          <S.Pages>{book.pages} páginas</S.Pages>
        </S.BookInfos>
        <S.BookCategory>Categoria: {book.category}</S.BookCategory>
        <S.BookStatus>
          <S.StatusTitle>Status:</S.StatusTitle>
          <S.StatusLabel status={book.status}>
            <S.Label>{decodeStatus(book.status)}</S.Label>
          </S.StatusLabel>
        </S.BookStatus>
      </S.BookInfoContainer>
    </S.Container>
  );
}
