import React from 'react';
import { FlatList } from 'react-native';
import {
  BookDetailsCard,
  BookDetailsCardProps,
} from '../../components/BookDetailsCard';
import { Header } from '../../components/Header';

import * as S from './styles';

interface HomeProps extends BookDetailsCardProps {
  id: string;
}

const data: HomeProps[] = [
  {
    id: '1',
    title: 'Harry Potter',
    author: 'J. K. Rowling',
    year: '2000',
    pages: '224',
    category: 'Aventura',
    status: 'finished',
  },
  {
    id: '2',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J. K. Rowling',
    year: '2000',
    pages: '224',
    category: 'Aventura',
    status: 'in_progress',
  },
  {
    id: '3',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J. K. Rowling',
    year: '2000',
    pages: '224',
    category: 'Aventura',
    status: 'in_progress',
  },
  {
    id: '4',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J. K. Rowling',
    year: '2000',
    pages: '224',
    category: 'Aventura',
    status: 'in_progress',
  },
  {
    id: '5',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J. K. Rowling',
    year: '2000',
    pages: '224',
    category: 'Aventura',
    status: 'finished',
  },
  {
    id: '6',
    title: 'Harry Potter e a Pedra Filosofal',
    author: 'J. K. Rowling',
    year: '2000',
    pages: '224',
    category: 'Aventura',
    status: 'finished',
  },
];

export function Home() {
  return (
    <S.Container>
      <Header isSearchable />
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <BookDetailsCard
            title={item.title}
            author={item.author}
            year={item.year}
            pages={item.pages}
            category={item.category}
            status={item.status}
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