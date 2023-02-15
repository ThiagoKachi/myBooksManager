import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FormDataProps } from '../Register';

interface NavigationProps {
  route: {
    key: string;
    name: string;
    params: {
      id: number;
    };
    path: undefined | string;
  };
}

export type NavigateProp = {
  navigate: (screen: string) => void;
};

export function BookDetail({ route }: NavigationProps) {
  const { id } = route.params;
  const [book, setBook] = useState<FormDataProps>({} as FormDataProps);

  const navigation = useNavigation<NavigateProp>();

  function changeStatus(status: string) {
    if (status === 'finished') return 'Finalizado';
    if (status === 'in_progress') return 'Finalizado';
    if (status === 'my_list') return 'Lendo';
  }

  useEffect(() => {
    async function getBookDetail() {
      const dataKey = `@mybooksmanager:books`;
      const response = await AsyncStorage.getItem(dataKey);
      const bookList = response ? JSON.parse(response) : [];
      const book = bookList.find(
        (book: FormDataProps) => book.id === String(id)
      );

      setBook(book);
    }
    getBookDetail();
  }, [id]);

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
          <S.Status>{changeStatus(book.status)}</S.Status>
        </S.ChangeStatusButtonText>
      </S.ChangeStatusButton>
      <S.ResumeContainer>
        <S.Resume>{book.summary}</S.Resume>
      </S.ResumeContainer>
    </S.Container>
  );
}
