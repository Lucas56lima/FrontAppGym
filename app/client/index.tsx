import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function ClientPortalScreen() {
  // Dados mockados do cliente (em produção viriam do backend)
  const clientData = {
    name: 'Maria Silva',
    nextSession: '25/01/2024 às 10:00',
    trainer: {
      name: 'Ricardo Santos',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
    },
    progress: {
      sessionsCompleted: 24,
      currentStreak: 5,
      weightLoss: '3.5kg',
    },
    workouts: [
      {
        id: '1',
        name: 'Treino A - Superior',
        type: 'Força',
        duration: '60 min',
        exercises: 8,
        lastCompleted: '22/01/2024',
      },
      {
        id: '2',
        name: 'Treino B - Inferior',
        type: 'Força',
        duration: '45 min',
        exercises: 6,
        lastCompleted: '23/01/2024',
      },
      {
        id: '3',
        name: 'Cardio HIIT',
        type: 'Cardio',
        duration: '30 min',
        exercises: 5,
        lastCompleted: '21/01/2024',
      },
    ],
  };

  return (
    <ScrollView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.welcomeSection}>
          <Text style={styles.greeting}>Olá, {clientData.name}!</Text>
          <Text style={styles.nextSession}>
            Próximo treino: {clientData.nextSession}
          </Text>
        </View>
      </View>

      {/* Trainer Section */}
      <View style={styles.trainerCard}>
        <Image
          source={{ uri: clientData.trainer.image }}
          style={styles.trainerImage}
        />
        <View style={styles.trainerInfo}>
          <Text style={styles.trainerLabel}>Seu Personal Trainer</Text>
          <Text style={styles.trainerName}>{clientData.trainer.name}</Text>
        </View>
        <TouchableOpacity style={styles.messageButton}>
          <Ionicons name="chatbubble-outline" size={24} color="#007AFF" />
        </TouchableOpacity>
      </View>

      {/* Progress Section */}
      <View style={styles.progressSection}>
        <Text style={styles.sectionTitle}>Seu Progresso</Text>
        <View style={styles.progressGrid}>
          <View style={styles.progressItem}>
            <Text style={styles.progressNumber}>{clientData.progress.sessionsCompleted}</Text>
            <Text style={styles.progressLabel}>Treinos Realizados</Text>
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressNumber}>{clientData.progress.currentStreak}</Text>
            <Text style={styles.progressLabel}>Dias Seguidos</Text>
          </View>
          <View style={styles.progressItem}>
            <Text style={styles.progressNumber}>{clientData.progress.weightLoss}</Text>
            <Text style={styles.progressLabel}>Peso Perdido</Text>
          </View>
        </View>
      </View>

      {/* Workouts Section */}
      <View style={styles.workoutsSection}>
        <Text style={styles.sectionTitle}>Seus Treinos</Text>
        {clientData.workouts.map((workout) => (
          <TouchableOpacity
            key={workout.id}
            style={styles.workoutCard}
            onPress={() => router.push(`/client/workout-details?id=${workout.id}`)}
          >
            <View style={styles.workoutHeader}>
              <View>
                <Text style={styles.workoutName}>{workout.name}</Text>
                <Text style={styles.workoutType}>{workout.type}</Text>
              </View>
              <Ionicons name="chevron-forward" size={24} color="#8E8E93" />
            </View>
            
            <View style={styles.workoutDetails}>
              <View style={styles.workoutDetail}>
                <Ionicons name="time-outline" size={20} color="#8E8E93" />
                <Text style={styles.detailText}>{workout.duration}</Text>
              </View>
              <View style={styles.workoutDetail}>
                <Ionicons name="barbell-outline" size={20} color="#8E8E93" />
                <Text style={styles.detailText}>{workout.exercises} exercícios</Text>
              </View>
            </View>
            
            <Text style={styles.lastCompleted}>
              Último treino: {workout.lastCompleted}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    backgroundColor: '#007AFF',
    padding: 20,
    paddingTop: 60,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
  },
  welcomeSection: {
    marginBottom: 20,
  },
  greeting: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FFFFFF',
    marginBottom: 5,
  },
  nextSession: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  trainerCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 20,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  trainerImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  trainerInfo: {
    flex: 1,
    marginLeft: 15,
  },
  trainerLabel: {
    fontSize: 14,
    color: '#8E8E93',
  },
  trainerName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  messageButton: {
    padding: 10,
  },
  progressSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  progressGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  progressItem: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    width: '31%',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  progressNumber: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#007AFF',
    marginBottom: 5,
  },
  progressLabel: {
    fontSize: 12,
    color: '#8E8E93',
    textAlign: 'center',
  },
  workoutsSection: {
    padding: 20,
  },
  workoutCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  workoutHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  workoutName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  workoutType: {
    fontSize: 14,
    color: '#8E8E93',
  },
  workoutDetails: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  workoutDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
  },
  detailText: {
    marginLeft: 5,
    color: '#8E8E93',
  },
  lastCompleted: {
    fontSize: 14,
    color: '#8E8E93',
    fontStyle: 'italic',
  },
});