import React, { useCallback, useEffect, useState } from 'react';
import { useFocusEffect } from '@react-navigation/native';

import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';

import api from '../../services/api';
import { BookProps } from '../../models/book';

import * as S from './styles';

export interface DataProps {
  id: string;
  title: string;
}

export function Resume() {
  const [isLoading, setIsLoading] = useState(false);
  const [booksResume, setBooksResume] = useState({
    finished: 0,
    myList: 0,
    inProgress: 0,
  });

  async function loadBooks() {
    setIsLoading(true);
    try {
      const response = await api.get<BookProps[]>('/books');
      const finishedBooks = response.data.filter(
        (book) => book.status === 'finished'
      ).length;
      const myListBooks = response.data.filter(
        (book) => book.status === 'my_list'
      ).length;
      const inProgressBooks = response.data.filter(
        (book) => book.status === 'in_progress'
      ).length;

      setBooksResume({
        finished: finishedBooks,
        myList: myListBooks,
        inProgress: inProgressBooks,
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
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
      <Header isSearchable={false} title="Resumo do leitor" />

      <S.ResumeHeader>
        <S.Title>Leituras de 2023</S.Title>
        <S.Icon name="tree" />
      </S.ResumeHeader>

      {isLoading ? (
        <Loading />
      ) : (
        <S.ResumeContainer>
          <S.ResumeCard>
            <S.ResumeIcon name="book" />
            <S.ResumeInfo>{booksResume.finished}</S.ResumeInfo>
            <S.ResumeInfoName>Finalizados</S.ResumeInfoName>
          </S.ResumeCard>
          <S.ResumeCard>
            <S.ResumeIcon name="book-open" />
            <S.ResumeInfo>{booksResume.inProgress}</S.ResumeInfo>
            <S.ResumeInfoName>Lendo</S.ResumeInfoName>
          </S.ResumeCard>
          <S.ResumeCard>
            <S.ResumeIcon name="layers" />
            <S.ResumeInfo>{booksResume.myList}</S.ResumeInfo>
            <S.ResumeInfoName>Minha lista</S.ResumeInfoName>
          </S.ResumeCard>
        </S.ResumeContainer>
      )}
    </S.Container>
  );
}
