import React from 'react';
import { TouchableOpacityProps } from 'react-native';
import { decodeStatus } from '../../utils/decodeStatus';

import * as S from './styles';

type ParamNavigation = {
  id: string;
};

export type NavigationProps = {
  navigate: (screen: string, param: ParamNavigation) => void;
};

export type BookStatus = 'finished' | 'in_progress' | 'my_list';

export interface BookDetailsCardProps extends TouchableOpacityProps {
  id: string;
  title: string;
  author: string;
  year: string;
  pages: string;
  category: string;
  image: string;
  status: BookStatus;
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
  ...rest
}: BookDetailsCardProps) {
  const bookImage = image
    ? { uri: image }
    : require('../../assets/book_default.png');

  return (
    <S.Container {...rest}>
      <S.Image style={{ resizeMode: 'contain' }} source={bookImage} />
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
            <S.Label>{decodeStatus(status)}</S.Label>
          </S.StatusLabel>
        </S.BookStatus>
      </S.BookInfoContainer>
    </S.Container>
  );
}
