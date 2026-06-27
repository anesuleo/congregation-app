import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: '#0B0F1A' },
        headerTintColor: '#fff',
      }}
    />
  );
}
