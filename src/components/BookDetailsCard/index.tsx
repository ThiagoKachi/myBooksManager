import React from 'react';

import * as S from './styles';

export interface BookDetailsCardProps {
  title: string;
  author: string;
  year: string;
  pages: string;
  status: 'finished' | 'in_progress';
}

export function BookDetailsCard({
  title,
  author,
  year,
  pages,
  status = 'finished',
}: BookDetailsCardProps) {
  function decodeStatus() {
    if (status === 'finished') return 'Finalizado';
    if (status === 'in_progress') return 'Lendo';
  }

  return (
    <S.Container>
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
