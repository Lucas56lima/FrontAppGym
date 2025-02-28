import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, Alert, Platform } from 'react-native'; 
import { Ionicons } from '@expo/vector-icons';
import React from 'react';
import { useRouter } from 'expo-router';

export default function HomeScreen() {
  const router = useRouter();
  const namePersonal = 'Eduarda'
  const showRegisterForm = () => {
    
      // Aqui você pode definir o caminho da tela de destino
      router.push('/modals/register'); // Navega para a página de perfil
    
  }
  const showAlert = () => {
    if (Platform.OS === "web") {
      // Para Web, usar window.confirm
      const confirm = window.confirm("Deseja adicionar um novo aluno?");
      if (confirm) {
        showRegisterForm();
      }
    } else {
      // Para Android e iOS, usar Alert.alert
      Alert.alert(
        "Novo Aluno",
        "Deseja adicionar um novo aluno?",
        [
          {
            text: "Cancelar",
            onPress: () => console.log("Ação cancelada"),
            style: "cancel"
          },
          {
            text: "Adicionar",
            onPress: () => showRegisterForm()
          }
        ],
        { cancelable: true }
      );
    }
  };
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Olá, {namePersonal}</Text>
        <Text style={styles.date}>{new Date().toLocaleDateString('pt-BR')}</Text>
      </View>

      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Ionicons name="people" size={24} color="#6A1B9A" />
          <Text style={styles.statNumber}>24</Text>
          <Text style={styles.statLabel}>Clientes Ativos</Text>
        </View>
        <View style={styles.statCard}>
          <Ionicons name="calendar" size={24} color="#6A1B9A" />
          <Text style={styles.statNumber}>8</Text>
          <Text style={styles.statLabel}>Sessões Hoje</Text>
        </View>
      </View>

      <Text style={styles.sectionTitle}>Próximas Sessões</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.sessionsScroll}>
        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.sessionCard}>
            <Text style={styles.sessionTime}>09:00</Text>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop' }}
              style={styles.clientImage}
            />
            <Text style={styles.clientName}>Maria Silva</Text>
            <Text style={styles.sessionType}>Treino Força</Text>
          </View>
        ))}
      </ScrollView>

      <Text style={styles.sectionTitle}>Ações Rápidas</Text>
      <View style={styles.quickActions}>
        <TouchableOpacity style={styles.actionButton} onPress={showAlert}>
          <Ionicons name="person-add" size={24} color="#6A1B9A" />
          <Text style={styles.actionText}>Novo Aluno</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="calendar" size={24} color="#6A1B9A" />
          <Text style={styles.actionText}>Agendar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.actionButton}>
          <Ionicons name="barbell" size={24} color="#6A1B9A" />
          <Text style={styles.actionText}>Novo Treino</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5', // Cor de fundo mais suave (lavanda clara)
  },
  header: {
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#9C27B0', // Roxo mais suave para o cabeçalho
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#F3E5F5', // Off-white lavanda
  },
  date: {
    fontSize: 16,
    color: '#F3E5F5',
    marginTop: 4,
  },
  statsContainer: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
  },
  statCard: {
    backgroundColor: '#E1BEE7', // Rosa claro e suave para os cards
    borderRadius: 12,
    padding: 16,
    width: '48%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  statNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
    color: '#6A1B9A', // Roxo para contraste
  },
  statLabel: {
    fontSize: 14,
    color: '#9C4D97', // Roxo mais suave
    marginTop: 4,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 20,
    marginTop: 20,
    marginBottom: 12,
    color: '#9C27B0', // Roxo para o título
  },
  sessionsScroll: {
    paddingLeft: 20,
  },
  sessionCard: {
    backgroundColor: '#E1BEE7', // Mesmo tom suave para os cards das sessões
    borderRadius: 12,
    padding: 16,
    marginRight: 12,
    width: 140,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sessionTime: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6A1B9A', // Roxo suave para o horário
  },
  clientImage: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginVertical: 8,
  },
  clientName: {
    fontSize: 14,
    fontWeight: '600',
    color: '#6A1B9A',
  },
  sessionType: {
    fontSize: 12,
    color: '#9C4D97',
    marginTop: 4,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 20,
    marginBottom: 20,
  },
  actionButton: {
    backgroundColor: '#E1BEE7', // Cor suave para os botões de ação
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    width: '30%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  actionText: {
    fontSize: 12,
    color: '#6A1B9A',
    marginTop: 8,
    textAlign: 'center',
  },
});
