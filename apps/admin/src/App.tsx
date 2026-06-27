import { APP_NAME, API_VERSION } from '@congregation-app/shared';

export function App() {
  return (
    <main
      style={{
        fontFamily: 'system-ui, sans-serif',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        color: '#0B0F1A',
      }}
    >
      <h1>{APP_NAME} — Admin</h1>
      <p>Dashboard scaffold is running.</p>
      <p style={{ opacity: 0.6 }}>API version: {API_VERSION}</p>
    </main>
  );
}
