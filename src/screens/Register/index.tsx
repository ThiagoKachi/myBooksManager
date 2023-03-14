import React, { useState } from 'react';
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  TouchableWithoutFeedback,
} from 'react-native';
import uuid from 'react-native-uuid';

import { useTheme } from 'styled-components';
import * as yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';

import { InputForm } from '../../components/Form/InputForm';
import { Header } from '../../components/Header';
import { Loading } from '../../components/Loading';
import { SearchBook } from '../../components/SearchBook';

import { BookProps } from '../../models/book';
import api from '../../services/api';

import * as S from './styles';

export type NavigationProps = {
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
  const theme = useTheme();

  const [isLoading, setLoading] = useState(false);
  const [bookSearchModalOpen, setBookSearchModalOpen] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<BookProps>({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<NavigationProps>();

  async function handleRegister(data: BookProps) {
    const newBook = {
      id: String(uuid.v4()),
      title: data.title,
      author: data.author,
      pages: data.pages,
      year: data.year,
      summary: data.summary,
      gender: data.gender,
      image: data.image,
      status: 'my_list',
    };

    try {
      setLoading(true);
      await api.post('/books', newBook);

      reset();
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
      Alert.alert('Não foi possível salvar.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior="padding" style={{ flex: 1 }}>
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
              </S.Fields>

              <S.ButtonContainer>
                <S.Button onPress={handleSubmit(handleRegister)}>
                  <S.ButtonText disabled={isLoading}>
                    {isLoading ? (
                      <Loading color={theme.colors.shape} size="small" />
                    ) : (
                      'Enviar'
                    )}
                  </S.ButtonText>
                </S.Button>
                <S.ButtonAddExternal
                  onPress={() => setBookSearchModalOpen(true)}
                >
                  <S.ButtonAddExternalText>
                    Buscar livro
                  </S.ButtonAddExternalText>
                </S.ButtonAddExternal>
              </S.ButtonContainer>
            </S.Form>
          </S.Container>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
      <Modal visible={bookSearchModalOpen}>
        <SearchBook setBookSearchModalOpen={setBookSearchModalOpen} />
      </Modal>
    </>
  );
}
