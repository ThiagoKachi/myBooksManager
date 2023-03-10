import React, { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';

import { BookDetailsCard } from '../../components/BookDetailsCard';
import { Header } from '../../components/Header';
import { ModalConfirmation } from '../../components/Modal';

import * as S from './styles';
import api from '../../services/api';
import { Loading } from '../../components/Loading';
import { BookProps, BookStatus } from '../../models/book';

export function Home() {
  const navigation = useNavigation<any>();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState<BookProps[]>([]);
  const [searchListData, setSearchListData] = useState<BookProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  async function fetchBooks() {
    try {
      const response = await api.get('/books');
      setBooks(response.data);
      setSearchListData(response.data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }

  function handleSearchBook() {
    const lowerSearch = searchText.toLowerCase();

    if (searchText === '') {
      return setSearchListData(books);
    }

    const response = books.filter((book) =>
      book.title.toLowerCase().includes(lowerSearch)
    );

    setSearchListData(response);
  }

  function handleSearchBookByStatus(status: BookStatus) {
    if (status === 'all_books') {
      setModalIsOpen(false);
      return setSearchListData(books);
    }

    const response = books.filter((book) => book.status === status);
    if (response.length === 0 && status !== 'all_books') {
      Alert.alert('Nenhum livro encontrado', 'Busque por outro status.');
    }

    setModalIsOpen(false);

    return setSearchListData(response);
  }

  function handleBookDetails(book: BookProps) {
    navigation.navigate('Details', { book });
  }

  useEffect(() => {
    fetchBooks();
  }, []);

  useFocusEffect(
    useCallback(() => {
      fetchBooks();
    }, [])
  );

  return (
    <S.Container>
      <Header
        isSearchable
        onChangeText={setSearchText}
        value={searchText}
        returnKeyType="search"
        onSubmitEditing={handleSearchBook}
        setModalIsOpen={setModalIsOpen}
        headerHeight={'180px'}
      />
      {isLoading ? (
        <Loading />
      ) : (
        <FlatList
          data={searchListData}
          renderItem={({ item }) => (
            <BookDetailsCard
              book={item}
              onPress={() => handleBookDetails(item)}
            />
          )}
          keyExtractor={(item) => item.id}
          ItemSeparatorComponent={() => <S.Separator />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 20 }}
        />
      )}
      <ModalConfirmation
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        handleSearchBookByStatus={handleSearchBookByStatus}
      />
    </S.Container>
  );
}
