import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';

export default function StudentsScreen() {
  const router = useRouter(); // Usando o hook para navegação
  
  const showRegisterForm = () => {
    
    // Aqui você pode definir o caminho da tela de destino
    router.push('/modals/register'); // Navega para a página de perfil
  
}
  const navigateToProfile = () => {
    // Aqui você pode definir o caminho da tela de destino
    router.push('/modals/workouts'); // Navega para a página de perfil
  }
  return (
    
    <View style={styles.container} >
      <View style={styles.header}>
        <Text style={styles.title}>Alunos</Text>
        <TouchableOpacity style={styles.addButton} onPress={showRegisterForm}>
          <Ionicons name="person-add" size={24} color="#FFFFFF" />
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>        
        <TextInput
          style={styles.searchInput}
          placeholder="Buscar alunos"
          placeholderTextColor="#8E8E93"
          selectionColor="gray"
        />
        <TouchableOpacity>
          <Ionicons name="search" size={20} color="#8E8E93" style={styles.searchIcon} />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.clientList}>
        {[1, 2, 3, 4, 5].map((_, index) => (
          <TouchableOpacity key={index} style={styles.clientCard} onPress={navigateToProfile}>
            <Image
              source={{ uri: `https://images.unsplash.com/photo-${index % 2 === 0 ? '1438761681033-6461ffad8d80' : '1500648767791-00dcc994a43e'}?w=200&h=200&fit=crop` }}
              style={styles.clientImage}
            />
            <View style={styles.clientInfo}>
              <Text style={styles.clientName}>{index % 2 === 0 ? 'Maria Silva' : 'João Santos'}</Text>
              <Text style={styles.clientDetails}>Treino: {index % 2 === 0 ? 'Força' : 'Cardio'}</Text>
              <Text style={styles.clientDetails}>Próxima sessão: {new Date().toLocaleDateString('pt-BR')}</Text>
            </View>
            <Ionicons name="chevron-forward" size={24} color="#8E8E93" />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3E5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#9C27B0',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  addButton: {
    backgroundColor: '#007AFF',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    margin: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    height: 44,
  },
  searchIcon: {
    marginRight: 10,
  },
  searchInput: {
    flex: 1,
    fontSize: 18,
    color: '#000000',
  },
  clientList: {
    flex: 1,
  },
  clientCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#E1BEE7',
    marginHorizontal: 20,
    marginBottom: 10,
    padding: 15,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  clientImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
  clientInfo: {
    flex: 1,
    marginLeft: 15
  },
  clientName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#6A1B9A',
  },
  clientDetails: {
    fontSize: 14,
    color: '#9C4D97',
    marginTop: 2,
  },
});