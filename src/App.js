import './App.css';
import MainPage from './pages/MainPage';
import ProductPage from './pages/ProductPage';
import { MyContext } from './context/MyContext';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react';

function App() {
  const [getProduct, setProduct] = useState(null)
  return (
    <div>
      <MyContext.Provider value={{ getProduct, setProduct }}>
        <BrowserRouter>

          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/product' element={<ProductPage />} />
          </Routes>

        </BrowserRouter>
      </MyContext.Provider>
    </div>
  );
}

export default App;
