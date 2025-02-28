import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown:false,
        tabBarActiveTintColor: '#E1BEE7', // Roxo mais forte para a cor ativa dos ícones
        tabBarInactiveTintColor: '#F3E5F5', // Rosa suave para os ícones inativos
        tabBarStyle: {
          borderTopWidth: 1,
          borderTopColor: '#6A1B9A', // Limite superior da tab bar com o tom suave de rosa
          backgroundColor: '#9C27B0', // Cor de fundo suave para a tab bar
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Início',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="home-outline" size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#F3E5F5', // Cor do cabeçalho para manter consistência com a tab bar
          },
          headerTintColor: '#9C27B0', // Cor do título do cabeçalho, ajustado para o roxo ativo
        }}
      />
      <Tabs.Screen
        name="students"
        options={{
          title: 'Alunos',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="people-outline" size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#F3E5F5', // Cor do cabeçalho para manter consistência com a tab bar
          },
          headerTintColor: '#9C27B0',// Título no cabeçalho em roxo
        }}
      />
      <Tabs.Screen
        name="workouts"
        options={{
          title: 'Treinos',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="barbell-outline" size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#F3E5F5', // Cor do cabeçalho para manter consistência com a tab bar
          },
          headerTintColor: '#9C27B0', // Título no cabeçalho em roxo
        }}
      />
      <Tabs.Screen
        name="schedule"
        options={{
          title: 'Agenda',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="calendar-outline" size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#F3E5F5', // Cor do cabeçalho para manter consistência com a tab bar
          },
          headerTintColor: '#9C27B0', // Título no cabeçalho em roxo
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Perfil',
          tabBarIcon: ({ size, color }) => (
            <Ionicons name="person-outline" size={size} color={color} />
          ),
          headerStyle: {
            backgroundColor: '#F3E5F5', // Cor do cabeçalho para manter consistência com a tab bar
          },
          headerTintColor: '#9C27B0',// Título no cabeçalho em roxo
        }}
      />
    </Tabs>
  );
}
