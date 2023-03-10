import React from 'react';

import { BooksFromGoogleAPI } from '../../models/bookFromGoogleAPI';

import * as S from './styles';

interface BookCardDetailsProps {
  book: BooksFromGoogleAPI;
}

export function BookCardDetails({ book }: BookCardDetailsProps) {
  const bookImage = book?.volumeInfo?.imageLinks?.thumbnail
    ? { uri: book?.volumeInfo?.imageLinks?.thumbnail }
    : require('../../assets/splash.png');

  return (
    <S.BookCardContainer onStartShouldSetResponder={() => true}>
      <S.BookCard>
        <S.BookCardImage style={{ resizeMode: 'contain' }} source={bookImage} />
        <S.BookDetails>
          <S.BookCardTitle>{book.volumeInfo.title}</S.BookCardTitle>
          <S.BookCardAuthor>{book.volumeInfo.authors[0]}</S.BookCardAuthor>
          <S.BookPages>Páginas: {book.volumeInfo.pageCount}</S.BookPages>
          <S.BookYear>Ano: {book.volumeInfo.publishedDate}</S.BookYear>
        </S.BookDetails>
      </S.BookCard>
    </S.BookCardContainer>
  );
}
