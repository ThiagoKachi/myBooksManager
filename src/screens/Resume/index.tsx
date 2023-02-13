import React from 'react';
import { Header } from '../../components/Header';

import * as S from './styles';

export interface DataProps {
  id: string;
  title: string;
}

export function Resume() {
  const DATA: DataProps[] = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'Romance',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Aventura',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Ficção',
    },
  ];

  return (
    <S.Container>
      <Header isSearchable={false} title="Resumo do leitor" />

      <S.ResumeHeader>
        <S.Title>Leituras de 2023</S.Title>
        <S.Icon name="tree" />
      </S.ResumeHeader>

      <S.ResumeContainer>
        <S.ResumeCard>
          <S.ResumeIcon name="book" />
          <S.ResumeInfo>10</S.ResumeInfo>
          <S.ResumeInfoName>Finalizados</S.ResumeInfoName>
        </S.ResumeCard>
        <S.ResumeCard>
          <S.ResumeIcon name="book-open" />
          <S.ResumeInfo>10</S.ResumeInfo>
          <S.ResumeInfoName>Lendo</S.ResumeInfoName>
        </S.ResumeCard>
        <S.ResumeCard>
          <S.ResumeIcon name="layers" />
          <S.ResumeInfo>10</S.ResumeInfo>
          <S.ResumeInfoName>Minha lista</S.ResumeInfoName>
        </S.ResumeCard>
      </S.ResumeContainer>
      <S.CategoryContainer>
        <S.CategoryTitle>Categorias favoritas:</S.CategoryTitle>
        <S.CategoryCard
          data={DATA}
          renderItem={({ item }) => <S.Card>• {item.title} - 1 livros</S.Card>}
          keyExtractor={(item) => item.id}
        />
      </S.CategoryContainer>
    </S.Container>
  );
}
