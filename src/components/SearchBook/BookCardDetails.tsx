import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Alert } from 'react-native';

import { BooksFromGoogleAPI } from '../../models/bookFromGoogleAPI';
import api from '../../services/api';

import * as S from './styles';
import { NavigationProps } from '../../screens/Register';

interface BookCardDetailsProps {
  book: BooksFromGoogleAPI;
  setBookSearchModalOpen: (value: boolean) => void;
  setLoading: (value: boolean) => void;
}

export function BookCardDetails({
  book,
  setBookSearchModalOpen,
  setLoading,
}: BookCardDetailsProps) {
  const navigation = useNavigation<NavigationProps>();

  const bookImage = book?.volumeInfo?.imageLinks?.thumbnail
    ? book.volumeInfo?.imageLinks?.thumbnail
    : require('../../assets/splash.png');

  async function handleRegisterBook() {
    const newBook = {
      id: book.id,
      title: book.volumeInfo.title,
      author: book.volumeInfo.authors[0],
      pages: String(book.volumeInfo.pageCount),
      year: new Date(book.volumeInfo.publishedDate).getFullYear(),
      summary: book.volumeInfo.description,
      gender: book.volumeInfo.categories[0],
      image: book?.volumeInfo?.imageLinks?.thumbnail ?? '',
      status: 'my_list',
    };

    try {
      setLoading(true);
      await api.post('/books', newBook);
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar o livro.');
    } finally {
      setBookSearchModalOpen(false);
      setLoading(false);
      navigation.navigate('Home');
    }
  }

  function handleSelectCard() {
    Alert.alert(`Deseja cadastrar o livro ${book.volumeInfo.title}?`, '', [
      {
        text: 'Voltar',
        style: 'cancel',
      },
      { text: 'Cadastrar', onPress: () => handleRegisterBook() },
    ]);
  }

  return (
    <S.BookCardContainer onStartShouldSetResponder={() => true}>
      <S.BookCard onPress={handleSelectCard}>
        <S.BookCardImage
          style={{ resizeMode: 'contain' }}
          source={{ uri: bookImage }}
        />
        <S.BookDetails>
          <S.BookCardTitle>{book.volumeInfo.title}</S.BookCardTitle>
          <S.BookCardAuthor>{book.volumeInfo.authors[0]}</S.BookCardAuthor>
          <S.BookPages>Páginas: {book.volumeInfo.pageCount}</S.BookPages>
          <S.BookYear>
            Ano:{' '}
            {new Date(book.volumeInfo.publishedDate).toLocaleDateString(
              'pt-BR'
            )}
          </S.BookYear>
        </S.BookDetails>
      </S.BookCard>
    </S.BookCardContainer>
  );
}
