import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function WorkoutsScreen() {
  const workoutCategories = [
    { name: 'Força', icon: 'barbell' },
    { name: 'Cardio', icon: 'heart' },
    { name: 'Flexibilidade', icon: 'body' },
    { name: 'HIIT', icon: 'timer' },
  ];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Treinos</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.categories}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {workoutCategories.map((category, index) => (
            <TouchableOpacity key={index} style={styles.categoryCard}>
              <Ionicons name={category.icon} size={24} color="#007AFF" />
              <Text style={styles.categoryText}>{category.name}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>

      <ScrollView style={styles.workoutList}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <TouchableOpacity key={index} style={styles.workoutCard}>
            <View style={styles.workoutHeader}>
              <Text style={styles.workoutName}>Treino {String.fromCharCode(65 + index)}</Text>
              <TouchableOpacity>
                <Ionicons name="ellipsis-horizontal" size={24} color="#8E8E93" />
              </TouchableOpacity>
            </View>
            
            <View style={styles.workoutDetails}>
              <View style={styles.detailItem}>
                <Ionicons name="time-outline" size={20} color="#8E8E93" />
                <Text style={styles.detailText}>60 min</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="fitness-outline" size={20} color="#8E8E93" />
                <Text style={styles.detailText}>8 exercícios</Text>
              </View>
              <View style={styles.detailItem}>
                <Ionicons name="people-outline" size={20} color="#8E8E93" />
                <Text style={styles.detailText}>12 alunos</Text>
              </View>
            </View>

            <View style={styles.exerciseList}>
              {[1, 2, 3].map((_, exerciseIndex) => (
                <View key={exerciseIndex} style={styles.exerciseItem}>
                  <Text style={styles.exerciseName}>Exercício {exerciseIndex + 1}</Text>
                  <Text style={styles.exerciseDetails}>3 séries x 12 repetições</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000000',
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categories: {
    paddingVertical: 15,
    backgroundColor: '#FFFFFF',
  },
  categoryCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F2F2F7',
    marginLeft: 15,
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 20,
  },
  categoryText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
  },
  workoutList: {
    flex: 1,
    padding: 15,
  },
  workoutCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 15,
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
  workoutDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E5E5EA',
  },
  detailItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  detailText: {
    marginLeft: 5,
    color: '#8E8E93',
  },
  exerciseList: {
    marginTop: 10,
  },
  exerciseItem: {
    marginVertical: 5,
  },
  exerciseName: {
    fontSize: 16,
    color: '#000000',
  },
  exerciseDetails: {
    fontSize: 14,
    color: '#8E8E93',
  },
});