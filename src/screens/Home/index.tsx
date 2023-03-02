import React, { useCallback, useEffect, useState } from 'react';
import { Alert, FlatList } from 'react-native';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';

import { BookDetailsCard } from '../../components/BookDetailsCard';
import { Header } from '../../components/Header';
import { ModalConfirmation } from '../../components/Modal';
import { FormDataProps } from '../Register';

import * as S from './styles';

export type BookStatus = 'finished' | 'in_progress' | 'my_list' | 'all_books';

export function Home() {
  const navigation = useNavigation<any>();

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState<FormDataProps[]>([]);
  const [searchListData, setSearchListData] = useState<FormDataProps[]>([]);

  async function loadBooks() {
    const dataKey = `@mybooksmanager:books`;
    const response = await AsyncStorage.getItem(dataKey);
    const books = response ? JSON.parse(response) : [];

    setBooks(books);
    setSearchListData(books);
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

  function handleSearchBookByStatus(status: BookStatus | any) {
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

  function handleBookDetails(book: FormDataProps) {
    navigation.navigate('Details', { book });
  }

  useEffect(() => {
    loadBooks();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadBooks();
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
      />
      <FlatList
        data={searchListData}
        renderItem={({ item }) => (
          <BookDetailsCard
            id={item.id}
            title={item.title}
            author={item.author}
            year={item.year}
            pages={item.pages}
            category={item.gender}
            status={item.status}
            image={''}
            onPress={() => handleBookDetails(item)}
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <S.Separator />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
      <ModalConfirmation
        setModalIsOpen={setModalIsOpen}
        modalIsOpen={modalIsOpen}
        handleSearchBookByStatus={handleSearchBookByStatus}
      />
    </S.Container>
  );
}
