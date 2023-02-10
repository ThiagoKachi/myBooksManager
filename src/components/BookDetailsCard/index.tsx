import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';

type ParamNavigation = {
  id: string;
};

export type NavigationProps = {
  navigate: (screen: string, param: ParamNavigation) => void;
};

export interface BookDetailsCardProps {
  id: string;
  title: string;
  author: string;
  year: string;
  pages: string;
  category: string;
  image: string;
  status: 'finished' | 'in_progress' | 'my_list';
}

export function BookDetailsCard({
  id = '1',
  title,
  author,
  year,
  pages,
  category,
  image,
  status = 'finished',
}: BookDetailsCardProps) {
  function decodeStatus() {
    if (status === 'finished') return 'Finalizado';
    if (status === 'in_progress') return 'Lendo';
    if (status === 'my_list') return 'Minha lista';
  }

  const navigation = useNavigation<NavigationProps>();

  return (
    <S.Container onPress={() => navigation.navigate('Details', { id })}>
      <S.Image
        style={{ resizeMode: 'contain' }}
        source={{
          uri: 'https://m.media-amazon.com/images/I/41897yAI4LL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        }}
      />
      <S.BookInfoContainer>
        <S.BookContainer>
          <S.Title>{title}</S.Title>
          <S.Author>{author}</S.Author>
        </S.BookContainer>
        <S.BookInfos>
          <S.Year>Ano: {year}</S.Year>
          <S.Divider>•</S.Divider>
          <S.Pages>{pages} páginas</S.Pages>
        </S.BookInfos>
        <S.BookCategory>Categoria: {category}</S.BookCategory>
        <S.BookStatus>
          <S.StatusTitle>Status:</S.StatusTitle>
          <S.StatusLabel status={status}>
            <S.Label>{decodeStatus()}</S.Label>
          </S.StatusLabel>
        </S.BookStatus>
      </S.BookInfoContainer>
    </S.Container>
  );
}
