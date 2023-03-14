import React, { useState } from 'react';
import { useTheme } from 'styled-components';
import { FlatList, Keyboard, TouchableWithoutFeedback } from 'react-native';
import { BooksFromGoogleAPI } from '../../models/bookFromGoogleAPI';
import { getBookDetails } from '../../services/googleBooks';
import { Loading } from '../Loading';
import { SearchInput } from '../SearchInput';
import { BookCardDetails } from './BookCardDetails';

import * as S from './styles';

interface SearchBookProps {
  setBookSearchModalOpen: (value: boolean) => void;
}

export function SearchBook({ setBookSearchModalOpen }: SearchBookProps) {
  const theme = useTheme();

  const [searchText, setSearchText] = useState('');
  const [books, setBooks] = useState<BooksFromGoogleAPI[]>([]);
  const [loading, setLoading] = useState(false);

  async function searchBooks() {
    try {
      setLoading(true);
      const response = await getBookDetails(searchText);
      setBooks(response.items.slice(0, 5));
    } catch (error) {
      console.log(error);
    } finally {
      Keyboard.dismiss();
      setLoading(false);
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <S.BackContainer>
          <S.Title>Busca de livros</S.Title>
          <S.BackButton onPress={() => setBookSearchModalOpen(false)}>
            <S.Icon name="x-circle" />
          </S.BackButton>
        </S.BackContainer>
        <SearchInput
          placeholder="Busque pelo nome do livro"
          onChangeText={setSearchText}
          value={searchText}
          returnKeyType="search"
          onSubmitEditing={searchBooks}
        />

        {loading ? (
          <Loading color={theme.colors.shape} />
        ) : books.length === 0 ? (
          <S.NoBooksFound>Nenhum livro encontrado..</S.NoBooksFound>
        ) : (
          <FlatList
            data={books}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <BookCardDetails
                book={item}
                setBookSearchModalOpen={setBookSearchModalOpen}
                setLoading={setLoading}
              />
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: 24, width: '61%' }}
          />
        )}
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
