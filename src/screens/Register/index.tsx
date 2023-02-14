import React from 'react';
import { Alert, Keyboard, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid';
import AsyncStorage from '@react-native-async-storage/async-storage';

import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { InputForm } from '../../components/Form/InputForm';
import { Header } from '../../components/Header';

import * as S from './styles';
import { BookStatus } from '../../components/BookDetailsCard';

export interface FormDataProps {
  id: string;
  author: string;
  gender: string;
  title: string;
  pages: string;
  summary: string;
  year: string;
  status: BookStatus;
  url?: string;
  image?: string;
}

type NavigationProps = {
  navigate: (screen: string) => void;
};

const schema = yup.object().shape({
  title: yup
    .string()
    .min(2, 'Preencha com um nome válido')
    .required('Nome é obrigatório'),
  author: yup
    .string()
    .min(2, 'Preencha com um nome válido')
    .required('Nome do autor é obrigatório'),
  pages: yup
    .number()
    .positive('O valor não poder ser negativo')
    .required('Nº de páginas é obrigatório'),
  year: yup.number().required('Ano de lançamento é obrigatório'),
  summary: yup.string().required('Resumo é obrigatório'),
  gender: yup.string().required('Genêro é obrigatório'),
});

export function Register() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<NavigationProps>();

  async function handleRegister(data: FormDataProps) {
    console.log(data);
    const newBook = {
      id: String(uuid.v4()),
      title: data.title,
      author: data.author,
      pages: data.pages,
      year: data.year,
      summary: data.summary,
      gender: data.gender,
      image: data.image,
      url: data.url,
      status: 'my_list',
    };

    try {
      const dataKey = `@mybooksmanager:books`;
      const data = await AsyncStorage.getItem(dataKey);
      const currentData = data ? JSON.parse(data) : [];

      const dataFormatted = [...currentData, newBook];
      await AsyncStorage.setItem(dataKey, JSON.stringify(dataFormatted));

      reset();
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar.');
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Header isSearchable={false} title="Cadastrar livro" />

        <S.Form>
          <S.Fields>
            <InputForm
              name="title"
              control={control}
              error={errors.title && errors.title.message}
              placeholder="Nome do livro"
              autoCapitalize="sentences"
              autoCorrect={false}
            />

            <InputForm
              name="author"
              control={control}
              error={errors.author && errors.author.message}
              placeholder="Autor"
            />

            <InputForm
              name="pages"
              control={control}
              error={errors.pages && errors.pages.message}
              placeholder="Nº de páginas"
              keyboardType="numeric"
            />

            <InputForm
              name="year"
              control={control}
              error={errors.year && errors.year.message}
              placeholder="Ano de lançamento"
              keyboardType="numeric"
              maxLength={4}
            />

            <InputForm
              name="summary"
              control={control}
              error={errors.summary && errors.summary.message}
              placeholder="Resumo"
              multiline
              numberOfLines={8}
            />

            <InputForm
              name="gender"
              control={control}
              error={errors.gender && errors.gender.message}
              placeholder="Gênero"
            />

            <InputForm
              name="image"
              control={control}
              error={errors.image && errors.image.message}
              placeholder="Imagem do livro"
            />

            <InputForm
              name="url"
              control={control}
              error={errors.url && errors.url.message}
              placeholder="Link de compra do livro"
            />
          </S.Fields>

          <S.Button onPress={handleSubmit(handleRegister)}>
            <S.ButtonText>Enviar</S.ButtonText>
          </S.Button>
        </S.Form>
      </S.Container>
    </TouchableWithoutFeedback>
  );
}
