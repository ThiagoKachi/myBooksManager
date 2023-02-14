import AsyncStorage from '@react-native-async-storage/async-storage';
import { useFocusEffect } from '@react-navigation/native';
import React, { useCallback, useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { BookDetailsCard } from '../../components/BookDetailsCard';
import { Header } from '../../components/Header';
import { FormDataProps } from '../Register';

import * as S from './styles';

export function Home() {
  const [books, setBooks] = useState<FormDataProps[]>([]);

  async function loadTransactions() {
    const dataKey = `@mybooksmanager:books`;
    const response = await AsyncStorage.getItem(dataKey);
    const transactions = response ? JSON.parse(response) : [];

    setBooks(transactions);
  }

  useEffect(() => {
    loadTransactions();
  }, []);

  useFocusEffect(
    useCallback(() => {
      loadTransactions();
    }, [])
  );

  return (
    <S.Container>
      <Header isSearchable />
      <FlatList
        data={books}
        renderItem={({ item }) => (
          <BookDetailsCard
            id="1"
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
