import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { useLocalSearchParams, router } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function WorkoutDetailsScreen() {
  const { id } = useLocalSearchParams();

  // Dados mockados do treino (em produção viriam do backend)
  const workout = {
    id,
    name: 'Treino A - Superior',
    type: 'Força',
    duration: '60 min',
    description: 'Treino focado em membros superiores com ênfase em hipertrofia.',
    exercises: [
      {
        name: 'Supino Reto',
        sets: 4,
        reps: '12 repetições',
        rest: '60 seg',
        weight: '20kg',
        notes: 'Manter escápulas retraídas',
      },
      {
        name: 'Puxada Alta',
        sets: 4,
        reps: '12 repetições',
        rest: '60 seg',
        weight: '30kg',
        notes: 'Focar na contração das costas',
      },
      {
        name: 'Desenvolvimento Ombro',
        sets: 3,
        reps: '15 repetições',
        rest: '45 seg',
        weight: '10kg',
        notes: 'Manter core estável',
      },
      {
        name: 'Rosca Direta',
        sets: 3,
        reps: '12 repetições',
        rest: '45 seg',
        weight: '15kg',
        notes: 'Evitar movimento do corpo',
      },
    ],
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color="#FFFFFF" />
        </TouchableOpacity>
        <View>
          <Text style={styles.workoutName}>{workout.name}</Text>
          <Text style={styles.workoutType}>{workout.type} • {workout.duration}</Text>
        </View>
      </View>

      <ScrollView style={styles.content}>
        <View style={styles.descriptionCard}>
          <Text style={styles.descriptionTitle}>Descrição</Text>
          <Text style={styles.descriptionText}>{workout.description}</Text>
        </View>

        <View style={styles.exercisesSection}>
          <Text style={styles.sectionTitle}>Exercícios</Text>
          {workout.exercises.map((exercise, index) => (
            <View key={index} style={styles.exerciseCard}>
              <View style={styles.exerciseHeader}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text style={styles.exerciseSets}>{exercise.sets} séries</Text>
              </View>

              <View style={styles.exerciseDetails}>
                <View style={styles.detailItem}>
                  <Ionicons name="repeat" size={20} color="#8E8E93" />
                  <Text style={styles.detailText}>{exercise.reps}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons name="time-outline" size={20} color="#8E8E93" />
                  <Text style={styles.detailText}>Descanso: {exercise.rest}</Text>
                </View>
                <View style={styles.detailItem}>
                  <Ionicons name="barbell-outline" size={20} color="#8E8E93" />
                  <Text style={styles.detailText}>Carga: {exercise.weight}</Text>
                </View>
              </View>

              {exercise.notes && (
                <View style={styles.notesSection}>
                  <Text style={styles.notesTitle}>Observações:</Text>
                  <Text style={styles.notesText}>{exercise.notes}</Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>

      <View style={styles.footer}>
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>Iniciar Treino</Text>
        </TouchableOpacity>
      </View>
    </View>
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
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    marginRight: 15,
  },
  workoutName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  workoutType: {
    fontSize: 16,
    color: '#FFFFFF',
    opacity: 0.9,
  },
  content: {
    flex: 1,
    padding: 20,
  },
  descriptionCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#4A4A4A',
    lineHeight: 22,
  },
  exercisesSection: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000000',
    marginBottom: 15,
  },
  exerciseCard: {
    backgroundColor: '#FFFFFF',
    padding: 15,
    borderRadius: 12,
    marginBottom: 15,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  exerciseName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000000',
  },
  exerciseSets: {
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '600',
  },
  exerciseDetails: {
    marginBottom: 10,
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  detailText: {
    marginLeft: 10,
    fontSize: 16,
    color: '#4A4A4A',
  },
  notesSection: {
    marginTop: 10,
    padding: 10,
    backgroundColor: '#F8F8F8',
    borderRadius: 8,
  },
  notesTitle: {
    fontSize: 14,
    fontWeight: '600',
    color: '#4A4A4A',
    marginBottom: 5,
  },
  notesText: {
    fontSize: 14,
    color: '#6B6B6B',
    fontStyle: 'italic',
  },
  footer: {
    padding: 20,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E5E5EA',
  },
  startButton: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
  },
  startButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
});