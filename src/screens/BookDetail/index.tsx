import React from 'react';
import { useNavigation } from '@react-navigation/native';

import * as S from './styles';
import { Text, TouchableOpacity } from 'react-native';

interface NavigationProps {
  route: {
    key: string;
    name: string;
    params: {
      id: number;
    };
    path: undefined | string;
  };
}

export type NavigateProp = {
  navigate: (screen: string) => void;
};

export function BookDetail({ route }: NavigationProps) {
  const navigation = useNavigation<NavigateProp>();

  function changeStatus(status: string) {
    if (status === 'finished') return 'Finalizado';
    if (status === 'in_progress') return 'Finalizado';
    if (status === 'my_list') return 'Lendo';
  }

  const { id } = route.params;

  // const bookImage = image
  //   ? { uri: image }
  //   : require('../../assets/book_default.png');

  return (
    <S.Container>
      <S.Header />
      <S.BackContainer onPress={() => navigation.navigate('Home')}>
        <S.Icon name="arrow-left-circle" />
      </S.BackContainer>
      <S.Image
        style={{ resizeMode: 'contain' }}
        source={{
          uri: 'https://m.media-amazon.com/images/I/41897yAI4LL._SY344_BO1,204,203,200_QL70_ML2_.jpg',
        }}
      />
      <S.BookContainer>
        <S.Name>Harry Potter</S.Name>
        <S.Author>J. K. Rowling</S.Author>
        <S.Gender>Gênero: Aventura</S.Gender>
        <S.PageYear>
          <S.Year>Ano: 2000</S.Year>
          <S.Pages>Páginas: 224</S.Pages>
        </S.PageYear>
      </S.BookContainer>
      <S.ChangeStatusButton>
        <S.ChangeStatusButtonText>
          {changeStatus('in_progress')}
        </S.ChangeStatusButtonText>
      </S.ChangeStatusButton>
      <S.ResumeContainer>
        <S.Resume>
          Border width adds up to the size of the component that you added to.
          This makes your image bigger than the size of your container
          component. To solve this issue you can add the border width to the
          component sizes Border width adds up to the size of the component that
          you added to. This makes your image bigger than the size of your
          container component. To solve this issue you can add the border width
          to the component sizes
        </S.Resume>
      </S.ResumeContainer>
    </S.Container>
  );
}
