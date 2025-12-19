// src/App.tsx

function App() {
  useYourIdAuth({
    applicationBaseUrl: import.meta.env.VITE_APPLICATION_URL,
    yourIdLoginUrl: import.meta.env.VITE_YOUR_ID_LOGIN_URL,
    env: import.meta.env.VITE_ENV, // "dev" | "prod"
  });

  return (
    <div className="min-h-screen bg-gray-50">
      <h1>React template</h1>
    </div>
  );
}

export default App;
