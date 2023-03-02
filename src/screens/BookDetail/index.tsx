import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { FormDataProps } from '../Register';
import { decodeStatus } from '../../utils/decodeStatus';

import * as S from './styles';

export type NavigateProp = {
  navigate: (screen: string) => void;
};

interface Params {
  book: FormDataProps;
}

export function BookDetail() {
  const route = useRoute();
  const { book: bookDetail } = route.params as Params;

  const [book, setBook] = useState<FormDataProps>({} as FormDataProps);

  const navigation = useNavigation<NavigateProp>();

  useEffect(() => {
    setBook(bookDetail);
  }, [bookDetail]);

  const bookImage = book.image
    ? { uri: book.image }
    : require('../../assets/book_default.png');

  return (
    <S.Container>
      <S.Header />
      <S.BackContainer onPress={() => navigation.navigate('Home')}>
        <S.Icon name="arrow-left-circle" />
      </S.BackContainer>
      <S.Image style={{ resizeMode: 'contain' }} source={bookImage} />
      <S.BookContainer>
        <S.Name>{book.title}</S.Name>
        <S.Author>{book.author}</S.Author>
        <S.Gender>Gênero: {book.gender}</S.Gender>
        <S.PageYear>
          <S.Year>Ano: {book.year}</S.Year>
          <S.Pages>Páginas: {book.pages}</S.Pages>
        </S.PageYear>
      </S.BookContainer>
      <S.ChangeStatusButton>
        <S.ChangeStatusButtonText>
          <S.StatusMessage>Mudar status para: </S.StatusMessage>
          <S.Status>{decodeStatus(book.status)}</S.Status>
        </S.ChangeStatusButtonText>
      </S.ChangeStatusButton>
      <S.ResumeContainer>
        <S.Resume>{book.summary}</S.Resume>
      </S.ResumeContainer>
    </S.Container>
  );
}
