import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, StyleSheet } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'expo-router';

const schema = yup.object().shape({
  nome: yup.string().required('Nome é obrigatório'),
  email: yup.string().email('Digite um e-mail válido').required('E-mail é obrigatório'),
  senha: yup.string().min(6, 'A senha deve ter pelo menos 6 caracteres').required('Senha é obrigatória'),
});

export default function RegisterScreen() {
  const { control, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const onSubmit = (data: { nome: any; }) => {
    Alert.alert('Cadastro realizado!', `Bem-vindo, ${data.nome}!`);
    router.back(); // Fecha o modal após o cadastro
  };

  return (
    <View style={styles.overlay}>
      <View style={styles.modalContainer}>
        {/* Botão "X" para fechar */}
        <TouchableOpacity style={styles.closeIcon} onPress={() => router.back()}>
          <Text style={styles.closeIconText}>✖</Text>
        </TouchableOpacity>

        <Text style={styles.title}>Cadastro</Text>

        {/* Campo Nome */}
        <Controller
          control={control}
          name="nome"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Nome"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.nome && <Text style={styles.errorText}>{errors.nome.message}</Text>}

        {/* Campo E-mail */}
        <Controller
          control={control}
          name="email"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="E-mail"
              keyboardType="email-address"
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.email && <Text style={styles.errorText}>{errors.email.message}</Text>}

        {/* Campo Senha */}
        <Controller
          control={control}
          name="senha"
          render={({ field: { onChange, value } }) => (
            <TextInput
              style={styles.input}
              placeholder="Senha"
              secureTextEntry
              value={value}
              onChangeText={onChange}
            />
          )}
        />
        {errors.senha && <Text style={styles.errorText}>{errors.senha.message}</Text>}

        {/* Botão Cadastrar */}
        <TouchableOpacity style={styles.button} onPress={handleSubmit(onSubmit)}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Estilos
const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    width: '90%',
    padding: 20,
    backgroundColor: '#F3E5F5',
    borderRadius: 10,
    alignItems: 'center',
    position: 'relative',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    padding: 10,
  },
  closeIconText: {
    fontSize: 24,
    color: '#5A2D4E',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'black',
  },
  input: {
    width: '100%',
    padding: 12,
    borderWidth: 1,
    borderColor: '#9E5A6D',
    borderRadius: 8,
    backgroundColor: '#FFF',
    marginBottom: 10,
  },
  errorText: {
    color: '#D32F2F',
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#9C27B0',
    padding: 15,
    borderRadius: 8,
    width: '100%',
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

