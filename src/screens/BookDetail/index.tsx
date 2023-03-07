import React, { useEffect, useState } from 'react';
import { useNavigation, useRoute } from '@react-navigation/native';

import { ChangeStatusModal } from '../../components/ChangeStatusModal';
import { StatusLabel } from '../../components/BookDetailsCard/styles';

import { decodeStatus } from '../../utils/decodeStatus';
import api from '../../services/api';
import { BookProps } from '../../models/book';

import * as S from './styles';

export type NavigateProp = {
  navigate: (screen: string) => void;
};

interface Params {
  book: BookProps;
}

export function BookDetail() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [book, setBook] = useState<BookProps>({} as BookProps);

  const route = useRoute();
  const { book: bookDetail } = route.params as Params;

  const navigation = useNavigation<NavigateProp>();

  useEffect(() => {
    setBook(bookDetail);
  }, [bookDetail]);

  const bookImage = book.image
    ? { uri: book.image }
    : require('../../assets/book_default1.png');

  async function handleChangeStatus(status: string) {
    try {
      await api.put(`/books/${book.id}`, { ...book, status });
      setBook({ ...book, status: status });
    } catch (error) {
      console.log(error);
    } finally {
      setModalIsOpen(false);
    }
  }

  return (
    <>
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
          <S.StatusContainer>
            <S.LabelText>Status:</S.LabelText>
            <StatusLabel status={book.status}>
              <S.Label>{decodeStatus(book.status)}</S.Label>
            </StatusLabel>
          </S.StatusContainer>
          <S.StatusButton onPress={() => setModalIsOpen(true)}>
            <S.StatusMessage>Alterar status </S.StatusMessage>
          </S.StatusButton>
        </S.ChangeStatusButton>
        <S.ResumeContainer>
          <S.Resume>{book.summary}</S.Resume>
        </S.ResumeContainer>
      </S.Container>
      <ChangeStatusModal
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        handleChangeStatus={handleChangeStatus}
      />
    </>
  );
}
