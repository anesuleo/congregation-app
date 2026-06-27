import { View, Text, StyleSheet } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { Stack } from 'expo-router';
import { APP_NAME } from '@congregation-app/shared';

export default function Home() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{ title: APP_NAME }} />
      <StatusBar style="light" />
      <Text style={styles.title}>{APP_NAME}</Text>
      <Text style={styles.subtitle}>Mobile scaffold is running.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0B0F1A',
    padding: 24,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: '700',
  },
  subtitle: {
    color: '#94A3B8',
    fontSize: 16,
    marginTop: 8,
  },
});
