import React from 'react';
import {
  Keyboard,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

import { InputForm } from '../../components/Form/InputForm';
import { Header } from '../../components/Header';

import * as S from './styles';

interface FormDataProps {
  author: string;
  gender: string;
  image: string;
  name: string;
  pages: number;
  summary: string;
  url: string;
  year: number;
}

type NavigationProps = {
  navigate: (screen: string) => void;
};

const schema = yup.object().shape({
  name: yup
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
  } = useForm<FormDataProps>({
    resolver: yupResolver(schema),
  });

  async function handleRegister(data: FormDataProps) {
    console.log(data);
  }

  const navigation = useNavigation<NavigationProps>();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <S.Container>
        <Header isSearchable={false} title="Cadastrar livro" />

        <TouchableOpacity onPress={() => navigation.navigate('Details')}>
          <Text>Aqui</Text>
        </TouchableOpacity>

        <S.Form>
          <S.Fields>
            <InputForm
              name="name"
              control={control}
              error={errors.name && errors.name.message}
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
