import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function ScheduleScreen() {
  const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  const currentDate = new Date();

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Agenda</Text>
        <TouchableOpacity style={styles.addButton}>
          <Ionicons name="add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.calendar}>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {weekDays.map((day, index) => {
            const date = new Date();
            date.setDate(currentDate.getDate() - currentDate.getDay() + index);
            const isToday = date.getDate() === currentDate.getDate();

            return (
              <TouchableOpacity
                key={index}
                style={[
                  styles.dayCard,
                  isToday && styles.todayCard
                ]}
              >
                <Text style={[styles.dayName, isToday && styles.todayText]}>{day}</Text>
                <Text style={[styles.dayNumber, isToday && styles.todayText]}>{date.getDate()}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

      <ScrollView style={styles.scheduleList}>
        {[9, 10, 11, 14, 15, 16].map((hour, index) => (
          <View key={index} style={styles.timeSlot}>
            <View style={styles.timeIndicator}>
              <Text style={styles.timeText}>{`${hour}:00`}</Text>
            </View>
            
            {index % 2 === 0 ? (
              <TouchableOpacity style={styles.sessionCard}>
                <View style={[styles.sessionStatus, { backgroundColor: '#4CAF50' }]} />
                <View style={styles.sessionInfo}>
                  <Text style={styles.clientName}>Maria Silva</Text>
                  <Text style={styles.sessionType}>Treino de Força</Text>
                </View>
                <TouchableOpacity style={styles.moreButton}>
                  <Ionicons name="ellipsis-horizontal" size={24} color="#8E8E93" />
                </TouchableOpacity>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity style={styles.emptySlot}>
                <Text style={styles.emptySlotText}>Disponível</Text>
                <Ionicons name="add-circle-outline" size={24} color="#8E8E93" />
              </TouchableOpacity>
            )}
          </View>
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
  calendar: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
  },
  dayCard: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 60,
    height: 80,
    marginHorizontal: 5,
    borderRadius: 12,
    backgroundColor: '#F2F2F7',
  },
  todayCard: {
    backgroundColor: '#007AFF',
  },
  dayName: {
    fontSize: 14,
    color: '#8E8E93',
    marginBottom: 5,
  },
  dayNumber: {
    fontSize: 20,
    fontWeight: '600',
    color: '#000000',
  },
  todayText: {
    color: '#FFFFFF',
  },
  scheduleList: {
    flex: 1,
    padding: 15,
  },
  timeSlot: {
    flexDirection: 'row',
    marginBottom: 15,
  },
  timeIndicator: {
    width: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  timeText: {
    fontSize: 14,
    color: '#8E8E93',
  },
  sessionCard: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  sessionStatus: {
    width: 4,
    height: '100%',
    borderRadius: 2,
    marginRight: 15,
  },
  sessionInfo: {
    flex: 1,
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000000',
  },
  sessionType: {
    fontSize: 14,
    color: '#8E8E93',
    marginTop: 2,
  },
  moreButton: {
    padding: 5,
  },
  emptySlot: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#FFFFFF',
    marginLeft: 10,
    padding: 15,
    borderRadius: 12,
    borderWidth: 1,
    borderStyle: 'dashed',
    borderColor: '#8E8E93',
  },
  emptySlotText: {
    fontSize: 16,
    color: '#8E8E93',
  },
});