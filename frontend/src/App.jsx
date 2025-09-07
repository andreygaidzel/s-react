import Navbar from './components/Navbar.jsx';

import HomePage from './pages/HomePage.jsx';
import ProductPage from './pages/ProductPage.jsx';

import { Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/useThemeStore.js';

function App() {
  const { theme } = useThemeStore();
  console.log(theme)
  return (
    <div className="min-h-screen bg-base-200 transition-color duration-300" data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/product/:id" element={<ProductPage />} />
      </Routes>
    </div>
  );
}

export default App
