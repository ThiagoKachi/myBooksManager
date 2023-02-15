import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { BookDetailsCard } from '../../components/BookDetailsCard';
import { Header } from '../../components/Header';
import { FormDataProps } from '../Register';
import { BookStatus } from '../../components/BookDetailsCard';

import * as S from './styles';

export function Home() {
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
    if (searchText === '') return;

    const response = books.filter((book) => {
      return book.title === searchText;
    });

    setSearchListData(response);
  }

  function handleSearchBookByStatus(status: BookStatus) {
    console.log(status);
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
          />
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={() => <S.Separator />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </S.Container>
  );
}
